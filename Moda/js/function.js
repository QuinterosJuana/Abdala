function Moda(array) {
    let cu = 0, cont = 0, moda = 0;

    array.map(m => {
        cu = 0;
        array.map(MM => {
            if (m == MM) { cu++ }
        })
        if (cu > cont) {
            cont = cu;
            moda = m;
        }
    })
    return moda;
}