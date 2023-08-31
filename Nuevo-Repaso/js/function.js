function Partido(resultado) {
    let A = 0, B = 0;

    for (let i = 0; i < resultado.length; i++) {

        if (resultado[i] == "A") {
        
            A++;
        
        }

        if (resultado[i] == "B") {

            B++;

        }
    }
    return A + " - " + B;
}