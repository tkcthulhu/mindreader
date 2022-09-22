
let emojis = ['🍑', '😔', '😁', '😳', '🙌🏻', '👀', '😜', '😉', '😁'];

let emojiShuffle = emojis.sort((a, b) => 0.5 - Math.random());

let state = {
    pg : 0
}
    
let pages = [
    {
        headerText: 'I can read your mind',
        exampleText: null,
        helperText: null,
    },
    {
        headerText: 'Pick a number from 01-99',
        exampleText: 'when you have your number',
        helperText: 'click next',
    },
    {
        headerText: 'Add both digits together to get a new number',
        exampleText: 'Ex: 14 is 1 + 4 = 5',
        helperText: 'click next to proceed',
    },
    {
        headerText: 'Subract your new number from the original number',
        exampleText: 'Ex: 14 - 5 = 9',
        helperText: 'click next to proceed',
    },
    {
        headerText: numberScrambler(),
        exampleText: 'Find your new number',
        helperText: 'Note the symbol beside the number',
    },
    {
        headerText: `\n\n${emojiShuffle.at(0)}`,
        exampleText: 'Your symbol is:',
        helperText: emojiShuffle.at(0),
    }
]

const resetImage = document.createElement('img')
resetImage.setAttribute('id', 'reset-image')
resetImage.src = '../img/reset.png';

const header = document.getElementById('header-text-col');
const blueButton = document.getElementById('blue-button-col');
const example = document.getElementById('example-text-col');
const helper = document.getElementById('helper-text-col');
const goResetButton = document.getElementById('GO-Reset-button')

let createGoResetButton = document.createElement('button');

createGoResetButton.innerText = 'GO';
createGoResetButton.setAttribute('id', 'GO-RESET')
createGoResetButton.setAttribute('class', 'align-self-end')
goResetButton.appendChild(createGoResetButton);

createGoResetButton.addEventListener('click', () => {
    if (state.pg < 1) {
        incrementPage()
    } else {
        resetPage()
    }});

function goResetUpdate() {
    if (state.pg < 1) {
        createGoResetButton.innerText = 'GO';
    } else {
        createGoResetButton.innerText = '';
        createGoResetButton.appendChild(resetImage);
    }
}

let createBlueButton = document.createElement('button');
createBlueButton.setAttribute('id','blue-button');
blueButton.appendChild(createBlueButton);

function blueButtonUpdate() {    
    if ((state.pg == 0) || (state.pg == 5)) {
        blueButton.style.visibility = 'hidden';
    } else if ((state.pg >= 1) && (state.pg <= 3)) {
        blueButton.style.visibility = 'visible';
        createBlueButton.innerText = 'NEXT';    
    } else if (state.pg == 4) {
        blueButton.style.visibility = 'visible';
        createBlueButton.innerText = 'REVEAL';   
    } 
}

createBlueButton.addEventListener('click', () => {incrementPage()})



function incrementPage() {
    if (state.pg < 5) {
        state.pg += 1;
    }
    updateContent();
}

function resetPage() {
    state.pg = 0;
    updateContent();
}

function updateContent() {
    let headerText = pages[state.pg].headerText;
    header.textContent = headerText;

    let exampleText = pages[state.pg].exampleText;
    example.textContent = exampleText;

    let helperText = pages[state.pg].helperText;
    helper.textContent = helperText;

    goResetUpdate();
    blueButtonUpdate();
}

function numberScrambler() {
    emojiShuffle
    let n = 0;
    let sym = '';
    let arr = [];
    do {
        n ++;
        switch (n % 9) {
            case 0:
                sym = emojiShuffle.at(0);
                break;
            case 1:
                sym = emojiShuffle.at(1);
                break;
            case 2:
                sym = emojiShuffle.at(2);
                break;
            case 3:
                sym = emojiShuffle.at(3);
                break;
            case 4:
                sym = emojiShuffle.at(4);
                break;
            case 5:
                sym = emojiShuffle.at(5);
                break;
            case 6:
                sym = emojiShuffle.at(6);
                break;            
            case 7:
                sym = emojiShuffle.at(7);
                break;
            case 8:
                sym = emojiShuffle.at(8);
                break;
        }
        arr.push(`${n} = ${sym}\n`);
    } while (n < 81);
    return (arr.join('')); 
}

updateContent();

