function Konnichiwa(n){

    let nombre = '', copia = '', NoConsonante = "aeiounAEIOUN";
    
    for (let i = 0; i< n; i++){
        nombre= prompt('<br>','Ingrese un nombre: ',' ');
    
        for(let j = 0; j< nombre.length; j++){
            copia += nombre[j];
            if(!NoConsonante.includes(nombre[j]) && !NoConsonante.includes(nombre[j+1]) && nombre[j] != " "){
                copia+= "u";
            }
        }
        document.write('Konnichi wa, ',copia,'-san');
        copia -= copia;
    }
}