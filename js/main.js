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
        exampleText: 'when you have your number click next',
        helperText: 'click next to proceed',
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
        headerText: '[array of numbers and symbols and shit]',
        exampleText: 'Find your new number',
        helperText: 'Note the symbol beside the number',
    },
    {
        headerText: '🍑',
        exampleText: 'Your symbol is:',
        helperText: '🍑',
    }
]

const resetImage = '../img/reset.png'

const header = document.getElementById('header-text');
const blueButton = document.getElementById('blue-button');
const example = document.getElementById('example-text');
const helper = document.getElementById('helper-text');
const goResetButton = document.getElementById('GO/Reset-button')

let createGoResetButton = document.createElement('button');

createGoResetButton.innerText = 'GO';
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
        createGoResetButton.innerHTML = 'RESET';
    }
}

let createBlueButton = document.createElement('button');
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
    // console.log(state.pg)
    if (state.pg < 5) {
        state.pg += 1;
    }
    // console.log(state.pg)
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

updateContent();

