function Presidente(n) {
    let div = 0;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            div++;
        }
    }
    return div == 0;
}