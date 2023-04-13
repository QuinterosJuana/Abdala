function DesinfectandoArchivos(letra, virus, frase){

    let copia = '';

    for (let i = 0; i < frase.length; i++){
        if (frase[i] == virus && frase[i-1] == letra && frase[i+1] == letra){

        }
        else {
            copia = copia + frase[i];
        }
    }
    
}