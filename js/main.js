let state = {
    pg : 0
}
    
let pages = [
    {
        headerText: 'I can read your mind',
        //blueButtonText: null,
        exampleText: null,
        helperText: null,
        //goResetButton: 'GO',
    },
    {
        headerText: 'Pick a number from 01-99',
        //blueButtonText: null,
        exampleText: 'when you have your number click next',
        helperText: 'click next to proceed',
        //goResetButton: resetImage,
    },
    {
        headerText: 'Add both digits together to get a new number',
        //blueButtonText: null,
        exampleText: 'Ex: 14 is 1 + 4 = 5',
        helperText: 'click next to proceed',
        //goResetButton: resetImage,
    },
    {
        headerText: 'Subract your new number from the original number',
        //blueButtonText: null,
        exampleText: 'Ex: 14 - 5 = 9',
        helperText: 'click next to proceed',
        //goResetButton: resetImage,
    },
    {
        headerText: null, //[array of numbers and symbols and shit]
        //blueButtonText: null,
        exampleText: 'Find your new number',
        helperText: 'Note the symbol beside the number',
        //goResetButton: resetImage,
    },
    {
        headerText: '&',
        //blueButtonText: null,
        exampleText: 'Your symbol is:',
        helperText: '&',
        //goResetButton: resetImage,
    }
]

const resetImage = '../img/reset.png'

const header = document.getElementById('header-text');
const blueButton = document.getElementById('blue-button');
const example = document.getElementById('example-text');
const helper = document.getElementById('helper-text');
const goResetButton = document.getElementById('GO/Reset-button')

let createGoResetButton = document.createElement('button');

function goResetUpdate() {
    if (state.pg === 0) {
        createGoResetButton.innerText = 'GO';
        goResetButton.appendChild(createGoResetButton);
        createGoResetButton.addEventListener('click', incrementPage)
        console.log('next')
    } else {
        createGoResetButton.innerText = 'RESET';
        goResetButton.appendChild(createGoResetButton)
        createGoResetButton.addEventListener('click', resetPage)
        console.log('reset')
        console.log(state.pg)
    }
}

let createBlueButton = document.createElement('button');
createBlueButton.innerText = 'NEXT';
blueButton.appendChild(createBlueButton);

function incrementPage() {
    // console.log(state.pg)
    if (state.pg < 5) {
        state.pg += 1;
    } else {state.pg = 0}
    // console.log(state.pg)
    updateContent();
    goResetUpdate();
}

function resetPage() {
    state.pg = 0;
    goResetUpdate();
    updateContent();
}

createBlueButton.addEventListener('click', incrementPage)

function updateContent() {
    let headerText = pages[state.pg].headerText;
    header.textContent = headerText;

    let exampleText = pages[state.pg].exampleText;
    example.textContent = exampleText;

    let helperText = pages[state.pg].helperText;
    helper.textContent = helperText;
}

updateContent();
goResetUpdate();
