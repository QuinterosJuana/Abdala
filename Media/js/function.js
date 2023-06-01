function Mediana(num, a) {

    let mit = 0, med = 0;

    if (num % 2 == 0) {
       mit = num / 2;
       med = (a[mit-1] + a[mit]);
    }
    else {
        mit= parseInt(num / 2);
        med = a[mit] * 2;
    }
    return med;
}