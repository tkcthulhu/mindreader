/*
const headerText = [
    'I can read your mind',
    'Pick a number from 01-99',
    'Add both digits together to get a new number',
    'Subract your new number from the original number',
    [array of numbers and symbols and shit]
    '&'
]

const blueButtonText = [
    null,
    'NEXT',
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

const resetImage = '../img/reset.png'

const blueButton = document.getElementById('blue-button');

let createBlueButton = document.createElement('button');
createBlueButton.innerText = 'NEXT';
//btn.addEventListener('click', )
blueButton.appendChild(createBlueButton);

let state = {


    
    pages : [
        {
            headerText: 'I can read your mind',
            blueButtonText: null,
            exampleText: null,
            helperText: null,
            //goResetButton: 'GO',
        },
        {
            headerText: 'Pick a number from 01-99',
            blueButtonText: null,
            exampleText: null,
            helperText: null,
            //goResetButton: resetImage,
        },
        {
            headerText: 'Add both digits together to get a new number',
            blueButtonText: null,
            exampleText: null,
            helperText: null,
            //goResetButton: resetImage,
        },
        {
            headerText: 'Subract your new number from the original number',
            blueButtonText: null,
            exampleText: null,
            helperText: null,
            //goResetButton: resetImage,
        },
        {
            headerText: null, //[array of numbers and symbols and shit]
            blueButtonText: null,
            exampleText: null,
            helperText: null,
            //goResetButton: resetImage,
        },
        {
            headerText: '&',
            blueButtonText: null,
            exampleText: null,
            helperText: null,
            //goResetButton: resetImage,
        }
    ]
}

createBlueButton;