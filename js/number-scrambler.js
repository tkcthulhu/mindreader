let emojis = ['🍑', '😔', '😁', '😳', '🙌🏻', '👀', '😜', '😉', '😁'];

let emoji = emojis[Math.floor(Math.random() * emojis.length)];

function numberScrambler() {
    let n = 0;
    let sym = '';
    let arr = [];
    do {
        n ++;
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
        arr.push(`${n} = ${sym}`);
    } while (n < 81);
    return (arr);
 
}

