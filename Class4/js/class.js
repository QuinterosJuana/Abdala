class CPassword{

    constructor(longitud, contresena){
        this.longitud = longitud;
        this.contresena = contresena;
    }
    esFuerte(){

        let numeros = 0, minusculas = 0, mayusculas = 0, caracter, msg = ""; 

        this.longitud = this.contresena;

        if (this.longitud < 8){
            msg = "NO CUMPLE CON LOS REQUISITOS";
        }
        for ( let i = 0; i < this.longitud; i++){
            if (caracter >= 'A' && caracter <= 'Z'){
                mayusculas++;
            }
            else if(caracter >= 'a' && caracter <= 'z'){
                minusculas++;
            }else if (!isNaN(caracter)){
                numeros++;
            }
        }

        if (mayusculas >= 2 && minusculas >= 1 && numeros >= 5){
            msg="FUERTE";
        }
        else {
            msg="NO CUMPLE CON LOS REQUISITOS";
        }
        return msg;
    }
}