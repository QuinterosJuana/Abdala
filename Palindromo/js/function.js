function Palindromo(frase){

    let reverse = '', letras = '';

    for(let i = 0; i< frase.length; i++){
        if(frase[i] != " "){
            letras += frase[i];
        }
    }
    for (let i = letras.length-1; i >= 0; i--){
        reverse += letras[i];
    }
    console.log(reverse);
    if (letras == reverse){
        document.write("Es un palindromo")
    }
}