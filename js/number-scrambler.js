function numberScrambler(n) {
    let sym = '';
    switch (n % 9) {
        case 0:
            sym = '🍑';
            break;
        case 1:
            sym = '😔';
            break;
        case 2:
            sym = '😁';
            break;
        case 3:
            sym = '😳';
            break;
        case 4:
            sym = '🙌🏻';
            break;
        case 5:
            sym = '👀';
            break;
        case 6:
            sym = '😜';
            break;            
        case 7:
            sym = '😉';
            break;
        case 8:
            sym = '😁';
            break;
    }
    return sym 
}

const test = document.getElementById('scrambTest');
test.innerHTML = numberScrambler(8)
