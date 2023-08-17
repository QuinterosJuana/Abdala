function generarVectorA(vectorA, n){

    vectorA = parseInt(prompt("Ingrese la cantidad de elementos del vector A: ", " "));

        for (let i = 0; i < n; i++){
            vectorA[i] = parseInt(Math.random() * 32000);
        }

        return vectorA;
}
function calcularPromedio(vectorA, n ){

    let sum;

    for (let i = 0; i < n; i++){
        sum = parseFloat( sum + vectorA[i]); 
    }

    return sum / n;
}
function generarVectorB(vectorA, vectorB, n, promedio){

    for (let i = 0; i < n; i++){

        if (vectorA[i] > promedio){

            for (let j = 0; j < i; j++){
                vectorB[j] = vectorA[i]; 
            }
        }
    }

    return vectorB;
}
function contarMultiplos2y3(vectorB) {

    let num = 0, count = 0;

    for (let i = 0; i <= vectorB.length; i++) {

        if (num % 2 == 0 && num % 3 == 0) {
            count++;
        }
    }

    return count;
}
function calcularSuma(vectorB){

    let suma = 0;

    for(let i = 0; i < vectorB.length; i++){

        suma = suma + vectorB[i];

    }
    return suma;
}
function generarVectorC(vectorC, vectorA, n){

    for(let i = 0; i < n; i++){

        vectorC[i] = (vectorA[i] * 2);
    }

    return vectorC;
}