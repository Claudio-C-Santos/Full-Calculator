var calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

function inputDigit(digit) {
    let { displayValue,waitingForSecondOperand } = calculator;
    
    if (waitingForSecondOperand === true || calculator.displayValue == '0') {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else  {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    console.log(calculator)
}

function inputDecimal(dot) {
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return parseFloat(firstOperand) + parseFloat(secondOperand);
    } else if (operator === '-') {
        return parseFloat(firstOperand) - parseFloat(secondOperand);
    } else if (operator === '/') {
        return parseFloat(firstOperand) / parseFloat(secondOperand);
    } else if (operator === '*') {
        return parseFloat(firstOperand) * parseFloat(secondOperand);
    }

    return secondOperand;
}

function handleOperator(nextOperator) {
    let {firstOperand, displayValue, operator} = calculator;
    let inputValue = parseFloat(displayValue);
    let result;

    if (firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand=inputValue;
    } else if (operator) {
        result=calculate(firstOperand,displayValue,operator);

    }
  

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;

    console.log(calculator)
}



function updatedDisplay() {
    let display = document.querySelector('#innerDisplay');
    display.value = calculator.displayValue;
}

updatedDisplay()

let keys = document.querySelector('#keysArea');
keys.addEventListener('click', function(event) {
    let {target} = event;

    if (!target.matches("button")) {
        return;
    } 

    if (target.matches('.number')) {
        inputDigit(target.value);
        updatedDisplay();
        return;
    }

    if (target.matches('.operator')) {
        handleOperator(target.value);
        return;
    }

    if (target.matches('.decimal')) {
        inputDecimal(target.value);
        updatedDisplay();
        return;
    }

    if (target.matches('.other')) {
        console.log(target.value);
        return;
    } 
    if (target.matches('.calculate')) {
        handleOperator(target.value);
        updatedDisplay();
        console.log(target.value);
        return;
    } 
});





















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


