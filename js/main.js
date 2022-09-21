/*
const headerText = [
    'I can read your mind',
    'Pick a number from 01-99',
    'Add both digits together to get a new number',
    'Subract your new number from the original number',
    [array of numbers and symbols and shit]
    '&'
]

const //blueButtonText = [
    nu//ll,
    'N//EXT',
    'REVEAL'
]

const exampleText = [
    'when you have your number click next',
    'Ex: 14 is 1 + 4 = 5',
    'Ex: 14 - 5 = 9',
    'Find your new number',
    'Your symbol is:'
]

const helperText = [
    null,    
    'click next to proceed',
    'Note the symbol beside the number',
    '&'
]
*/

//let state = {


    
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
//}

const resetImage = '../img/reset.png'

const header = document.getElementById('header-text');
const blueButton = document.getElementById('blue-button');
const example = document.getElementById('example-text');
const helper = document.getElementById('helper-text');
const goResetButton = document.getElementById('GO/Reset-button')

let createBlueButton = document.createElement('button');
createBlueButton.innerText = 'NEXT';
let pg = 0;

createBlueButton.addEventListener('click', function incrementPage() {
    let pg = 0; pg <= 6; pg++;
    console.log(pg)
    //return pg += 1;
})
blueButton.appendChild(createBlueButton);

createBlueButton;

let headerText = pages[incrementPage()].headerText;
header.textContent = headerText;

let exampleText = pages[pg].exampleText;
example.textContent = exampleText;

let helperText = pages[pg].helperText;
helper.textContent = helperText;