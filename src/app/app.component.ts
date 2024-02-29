import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CaesarModule } from './clases/caesar-module';
import { FormControl,FormsModule, FormGroup, Validators, NgControl, NgForm, NgModel } from '@angular/forms';
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
    'cifrado': new FormControl<number|null>(null, [Validators.required, Validators.pattern('^[0-9]{1,2}$'), Validators.max(this.caesar.mapaCaracteres.length), Validators.min(1)])
  })
  formDescifrado = new FormGroup({
    'codificado': new FormControl('', [Validators.required]),
  })
  formCadena = new FormGroup({
    'cadena': new FormControl('')
  })
  //8)
  cifrar(){
    if(this.formCadena.controls.cadena.value){
      this.caesar.modificarCadenaCaracteres(this.formCadena.controls.cadena.value)
    }
    this.cadena = this.formCifrado.controls.codigo.value!;
    this.numCifrado = this.formCifrado.controls.cifrado.value!;
    this.texto = this.caesar.transformar(this.cadena,this.numCifrado);
  }
  //9)
  descifrar(){
    if(this.formCadena.controls.cadena.value){
      this.caesar.modificarCadenaCaracteres(this.formCadena.controls.cadena.value)
    }
    this.descifrado = this.formDescifrado.controls.codificado.value!;
    this.cifradores = [];
    for(let i=1; i < this.caesar.mapaCaracteres.length;i++){
      this.cifradores.push({
        cadena: this.caesar.decifrar(this.descifrado,i),
        cifrado: i
      });
    }
    this.cifradores = this.cifradores.sort((a,b) => a.cifrado - b.cifrado);
  }
}
