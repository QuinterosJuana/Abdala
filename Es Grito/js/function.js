function EsGrito{

    let i=0, y=0;
    let length = frase.length;

            for (let j=0; j < length; j++ ){

                x = frase.charAt(j);

                if ( x == "!"){

                    i++;
                } 
                if (isNaN(x) &&  x != "!"){
                    y++;
                }                                     
            }

            if (i > y){

                document.write('ES GRITO');
            }
            else{
                document.write('es grito');
            }
}