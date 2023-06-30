class CPassword{

    constructor(longitud, contresena){
        this.longitud = longitud;
        this.contresena = contresena;
    }
    generarPassword(){

        let Mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', Minusculas = 'abcdefghijklmnopqrstuvwxyz', Numeros = '0123456789', CaracterAleatorio;

        this.longitud = 8;

        for (let i = 0; i < 2; i++){
 
            CaracterAleatorio = Mayusculas.charAt(Math.floor(Math.random()*Mayusculas.length));
            this.contresena = this.contresena + CaracterAleatorio;
        }
        CaracterAleatorio = Minusculas.charAt(Math.floor(Math.random()*Minusculas.length));
        this.contresena = this.contresena + CaracterAleatorio;

        for (let i = 0; i < 5; i++){

            CaracterAleatorio = Numeros,charAt(Math.floor(Math.random()*Numeros.length));
            this.contresena = this.contresena + CaracterAleatorio;
        }

        return this.contresena;
    }
    esFuerte(){

        let cantNumeros = 0, cantMinusculas = 0, cantMayusculas = 0, caracter, msg = ""; 

        this.longitud = this.contresena;

        if (this.longitud < 8){
            msg = false;
        }
        for ( let i = 0; i < this.longitud; i++){
            if (caracter >= 'A' && caracter <= 'Z'){
                cantMayusculas++;
            }
            else if(caracter >= 'a' && caracter <= 'z'){
                cantMinusculas++;
            }else if (!isNaN(caracter)){
                cantNumeros++;
            }
        }

        if (cantMayusculas >= 2 && cantMinusculas >= 1 && cantNumeros >= 5){
            msg= true;
        }
        else {
            msg= false;
        }
        return msg;
    }
}