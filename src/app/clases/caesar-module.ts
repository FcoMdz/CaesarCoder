export class CaesarModule {
    //1)
    modulo:number = 1;
    cadenaOriginal:string = "";
    cadenaTransformada: string = "";
    mapaCaracteres:string[] = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ]
    modificarCadenaCaracteres(nuevo: string){
      nuevo = nuevo;
      if(nuevo == ' ') return;
      this.mapaCaracteres = [];
      for (let i = 0; i < nuevo.length; i++) {
        const element = nuevo[i];
        if(!this.mapaCaracteres.includes(element)){
          this.mapaCaracteres.push(element);
        }
      }
    }
    modificarCadenaCaracteresMantenerRepetidos(nuevo: string){
      nuevo = nuevo;
      if(nuevo == ' ') return;
      this.mapaCaracteres = [];
      for (let i = 0; i < nuevo.length; i++) {
        const element = nuevo[i];
        //if(!this.mapaCaracteres.includes(element)){
          this.mapaCaracteres.push(element);
        //}
      }
    }
    // 2)
    transformar(cadena:string, modulo:number):string{
        this.cadenaOriginal = cadena;
        this.modulo = modulo;
        this.cadenaTransformada = "";
        var saltos = 0;
        //3)
        for (let i = 0; i < this.cadenaOriginal.length; i++) {
            const caracter = this.cadenaOriginal[i];
            if(this.mapaCaracteres.includes(caracter)){
                //4)
                var posicionCaracter = this.mapaCaracteres.findIndex(caracterMapa => caracterMapa === caracter);
                if(posicionCaracter + modulo >= this.mapaCaracteres.length){
                    var espacios = this.mapaCaracteres.length - posicionCaracter;
                    saltos = this.modulo - espacios;
                }else{
                    saltos = posicionCaracter + this.modulo;
                }
                this.cadenaTransformada += this.mapaCaracteres[saltos];
            }else if(caracter == ' '){
              this.cadenaTransformada += ' ';
            }else if(caracter == '\n'){
              this.cadenaTransformada += '\n';
            }else{
              this.cadenaTransformada += '�';
            }

        }
        return this.cadenaTransformada;
    }
    //5)
    decifrar(cadena:string, modulo:number):string{
        this.cadenaOriginal = cadena;
        this.modulo = modulo;
        this.cadenaTransformada = "";
        var saltos = 0;
        for (let i = 0; i < this.cadenaOriginal.length; i++) {
            const caracter = this.cadenaOriginal[i];
            if(this.mapaCaracteres.includes(caracter)){
                var posicionCaracter = this.mapaCaracteres.findIndex(caracterMapa => caracterMapa === caracter);
                if(posicionCaracter - modulo < 0){
                    var espacios = this.modulo - posicionCaracter;
                    saltos = this.mapaCaracteres.length - espacios;
                }else{
                    saltos = posicionCaracter - this.modulo;
                }
                this.cadenaTransformada += this.mapaCaracteres[saltos];
            }
            else if(caracter == ' ') {
              this.cadenaTransformada += ' ';
            }else if(caracter == '\n'){
              this.cadenaTransformada += '\n';
            }else{
              this.cadenaTransformada += '�';
            }
        }
        return this.cadenaTransformada;
    }
}
