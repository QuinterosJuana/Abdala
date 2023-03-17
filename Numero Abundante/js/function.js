function nAbundante(n){

    let suma=0;
       
        for (let j=1; j<n; j++) {
          if (n % j == 0){
            suma = suma + j;
          }
        }
       
        return suma>n;
}