function MensajeSecreto(x){

    let frase = '', copia = 1, inicio = 0, fin = 0;

    for(let i = 0; i < x.length; i++){

        
        if (x[i] == "("){
            copia = 0; 
            inicio = i;        
        }if (copia == 1){
            frase = frase + x[i];
        }else if(x[i] == ")"){
            copia = 1;
            fin = i;

            for (let j = fin-1; j > inicio; j--){
                frase = frase + x[j];
            }
        }
        
    }
    document.write(frase);
}