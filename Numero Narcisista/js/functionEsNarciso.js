function EsNarciso(n){
    
    let num = 0, total = 0, count = 0, z = 0;

    z = n;

    while (n > 1){
        n = n / 10;
        count++;
    }
    
    for(let i = 1; i <= z; i*=10){

        num = parseInt((z/i)%10);
        total += Math.pow(num, count);
    }
    
    return total == z;


    
}