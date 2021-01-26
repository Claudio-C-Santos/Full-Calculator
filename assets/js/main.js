var calculator = {
    displayValue: 0,
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

function updatedDisplay() {
    let display = document.querySelector('#innerDisplay');
    display.textContent = calculator.displayValue;
    return calculator.displayValue;
}

updatedDisplay()
console.log(updatedDisplay())



















/*
//Button clicked => Concatenate value to variable "expression"
//Calculate button pressed run calculateResult()

//let display = document.querySelectorAll("#innerDisplay");

let expression= 0;

//Paragraph can only have 11 characters max
let calculation = document.createElement("span");
calculation.setAttribute("id", "calcChar");
calculation.textContent = expression;
innerDisplay.appendChild(calculation);

init()

function init() {
    calculation.textContent = selection;
}

function displayValue(button) {
    calculation.textContent = expression;
    expression+=button.value;
}
*/


