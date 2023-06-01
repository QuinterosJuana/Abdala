function DistanciaDeHamming(x, y, large, distancia_de_hamming) 
{

    for (let i = 0; i < large; i++) {
        if (x[i] != y[i]) {
            distancia_de_hamming++;
        }
    }
    return distancia_de_hamming;
}