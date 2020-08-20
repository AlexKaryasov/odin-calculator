//global declarations
let displayButtons = document.querySelectorAll('.display-button');
let display = document.querySelector("#display")
let operation;


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
    let result;
    switch (operator) {
        case "+":
            result = add(a, b);
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

    return result;
}

const clickNunmberButton = (event) => {
    display.textContent += event.target.innerHTML;
}

const clickOrepationButton = (event) => {
    display.textContent += event.target.innerHTML;
    operation = event.target.innerHTML;
}l

displayButtons.forEach((displayButton) => {
    displayButton.addEventListener("click", clickNunmberButton);
});
