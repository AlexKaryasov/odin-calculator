//global declarations
let numberButtons = document.querySelectorAll('.number-button');
let orepationButtons = document.querySelectorAll('.operation-button');
let resultButton = document.querySelector('.result-button');
let display = document.querySelector("#display")

const calculator = {
    operation: "",
    operands: [],
    lastInputCharacter: ""
}


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (calculator) => {
    let result;
    let a = calculator.operands[0];
    let b = calculator.operands[1];
    switch (calculator.operation) {
        case "+":
            result = add(+a, +b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b)
            break;
    }

    console.log(calculator.operator)
    console.log(result);
    return result;
}

const clickDisplayButton = (event) => {
    display.textContent += event.target.innerHTML;
    calculator.lastInputCharacter = event.target.innerHTML;
}

const clickNumberButton = (event) => {
    let numberRegex = /[0-9]/
    if (calculator.operands[calculator.operands.length - 1] && numberRegex.test(calculator.lastInputCharacter)) {
        calculator.operands[calculator.operands.length - 1] += event.target.innerHTML;
    } else {
        calculator.operands.push(event.target.innerHTML);
    }
}

const clickOrepationButton = (event) => {
    calculator.operation = event.target.innerHTML;
}

const clickResultButton = (event) => {
    display.textContent = operate(calculator)
}

numberButtons.forEach((displayButton) => {
    displayButton.addEventListener("click", (event) => {
        clickNumberButton(event);
        clickDisplayButton(event);
    });
});

orepationButtons.forEach((displayButton) => {
    displayButton.addEventListener("click", (event) => {
        clickOrepationButton(event);
        clickDisplayButton(event);
    });
});

resultButton.addEventListener("click", clickResultButton);