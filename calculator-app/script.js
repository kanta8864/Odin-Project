function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case "+":
            addition(a, b);
            break;
        case "-":
            subtraction(a, b);
            break;
        case "*":
            multiplication(a,b);
            break;
        case "/":
            division(a,b);
        default:
            alert("Damn. You broke the code.")
    }
}

const zero = document.querySelector("#zero")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const add = document.querySelector("#add")
const subtract = document.querySelector("#subtract")
const multiply = document.querySelector("#multiply")
const divide = document.querySelector("#divide")
const equal = document.querySelector("#equal")
const dot = document.querySelector("#dot")
const clear = document.querySelector("#clear")

const displayDiv = document.querySelector(".display");
const displayContent = document.querySelector(".display-content");

zero.addEventListener("click", () => {
    displayContent.textContent = "0";
})

