import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CaesarModule } from './clases/caesar-module';
import { FormControl,FormsModule, FormGroup, Validators, NgControl, NgForm, NgModel, AbstractControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    FormsModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'CeasearCoder';
  //6)
  caesar = new CaesarModule();
  numCifrado!:number
  cadena:string =""
  texto:string = ""
  cifradores:{cadena:string, cifrado:number }[] = []
  descifrado:string = ""

  //7)
  formCifrado = new FormGroup({
    'codigo': new FormControl('', [Validators.required]),
    'cifrado': new FormControl<number|null>(null, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(1),
      (control: AbstractControl) => Validators.max(this.caesar.mapaCaracteres.length)(control)
    ])
  })
  formDescifrado = new FormGroup({
    'codificado': new FormControl('', [Validators.required]),
    'cifrado': new FormControl<number|null>(null, [
      Validators.pattern('^[0-9]*$'),
      Validators.min(1),
      (control: AbstractControl) => Validators.max(this.caesar.mapaCaracteres.length)(control)
    ])
  })
  formCadena = new FormGroup({
    'cadena': new FormControl(''),
    'rrepetidas': new FormControl<boolean>(true)
  })

  updateCadena(){
    if(this.formCadena.controls.cadena.value && this.formCadena.controls.rrepetidas.value){
      this.caesar.modificarCadenaCaracteres(this.formCadena.controls.cadena.value)
    }else if(this.formCadena.controls.cadena.value && !this.formCadena.controls.rrepetidas.value){
      this.caesar.modificarCadenaCaracteresMantenerRepetidos(this.formCadena.controls.cadena.value)
    }
  }
  //8)
  cifrar(){
    this.cadena = this.formCifrado.controls.codigo.value!;
    this.numCifrado = this.formCifrado.controls.cifrado.value!;
    this.texto = this.caesar.transformar(this.cadena,this.numCifrado);
  }
  //9)
  descifrar(){
    this.descifrado = this.formDescifrado.controls.codificado.value!;
    this.cifradores = [];
    if(this.formDescifrado.controls.cifrado.value){
      this.cifradores.push({
        cadena: this.caesar.decifrar(this.descifrado,this.formDescifrado.controls.cifrado.value),
        cifrado: this.formDescifrado.controls.cifrado.value
      })
    }else{
      for(let i=1; i < this.caesar.mapaCaracteres.length;i++){
        this.cifradores.push({
          cadena: this.caesar.decifrar(this.descifrado,i),
          cifrado: i
        });
      }

    }
    this.cifradores = this.cifradores.sort((a,b) => a.cifrado - b.cifrado);

  }
}
