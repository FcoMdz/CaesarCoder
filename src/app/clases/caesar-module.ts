export class CaesarModule {
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
    // 1)
    transformar(cadena:string, modulo:number):string{
        this.cadenaOriginal = cadena.toLowerCase();
        this.modulo = modulo;
        this.cadenaTransformada = "";
        var saltos = 0;
        //2)
        for (let i = 0; i < this.cadenaOriginal.length; i++) {
            const caracter = this.cadenaOriginal[i];
            if(caracter != ' '){
                //3)
                var posicionCaracter = this.mapaCaracteres.findIndex(caracterMapa => caracterMapa === caracter);
                if(posicionCaracter + modulo >= this.mapaCaracteres.length){
                    var espacios = this.mapaCaracteres.length - posicionCaracter;
                    saltos = this.modulo - espacios;
                }else{
                    saltos = posicionCaracter + this.modulo;
                }
                this.cadenaTransformada += this.mapaCaracteres[saltos];
            }else{
                this.cadenaTransformada += ' ';
            }
            
        }
        return this.cadenaTransformada;
    }
    //4)
    decifrar(cadena:string, modulo:number):string{
        this.cadenaOriginal = cadena.toLowerCase();
        this.modulo = modulo;
        this.cadenaTransformada = "";
        var saltos = 0;
        for (let i = 0; i < this.cadenaOriginal.length; i++) {
            const caracter = this.cadenaOriginal[i];
            if(caracter != ' '){
                var posicionCaracter = this.mapaCaracteres.findIndex(caracterMapa => caracterMapa === caracter);
                if(posicionCaracter - modulo < 0){
                    var espacios = this.modulo - posicionCaracter;
                    saltos = this.mapaCaracteres.length - espacios;
                }else{
                    saltos = posicionCaracter - this.modulo;
                }
                this.cadenaTransformada += this.mapaCaracteres[saltos];
            }
            else {
                this.cadenaTransformada += ' ';
            }
        }
        return this.cadenaTransformada;
    }
}
