function EsFeliz(n){
    let suma;

    for (let i = 0; i < n; i*10){
        suma = suma + pow(((n/i)%10), 2);
    }

    return suma == 1;
}