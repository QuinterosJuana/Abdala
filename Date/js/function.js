function mediana(a, num, mit, med) {

    if (num % 2 == 0) {

       mit = (num / 2);

       med = (a[mit-1] + a[mit]);
    }
    else {
    
        mit = parseInt(num / 2);

        med = a[mit] * 2;
    }
    return med;
}