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
    return Number((a / b).toFixed(3));
    
}

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case "+":
            return addition(a, b);
        case "-":
            return subtraction(a, b);
        case "*":
            return multiplication(a,b);
        case "\u00f7":
            return division(a,b);
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
const backspace = document.querySelector("#backspace")

const displayDiv = document.querySelector(".display");
let displayContent = document.querySelector(".display-content");

let operandOne = "";
let operandTwo = "";
let operator = "";

zero.addEventListener("click", () => {
    updateDisplay("0");
})

one.addEventListener("click", () => {
    updateDisplay("1");
})

two.addEventListener("click", () => {
    updateDisplay("2");
})

three.addEventListener("click", () => {
    updateDisplay("3");
})

four.addEventListener("click", () => {
    updateDisplay("4");
})

five.addEventListener("click", () => {
    updateDisplay("5");
})

six.addEventListener("click", () => {
    updateDisplay("6");
})

seven.addEventListener("click", () => {
    updateDisplay("7");
})

eight.addEventListener("click", () => {
    updateDisplay("8");
})

nine.addEventListener("click", () => {
    updateDisplay("9");
})

add.addEventListener("click", () => {
    updateDisplay("+");
})

subtract.addEventListener("click", () => {
    updateDisplay("-");
})

multiply.addEventListener("click", () => {
    updateDisplay("*");
})

divide.addEventListener("click", () => {
    updateDisplay("\u00f7");
})

equal.addEventListener("click", () => {
    equalFuntion();
})

function equalFuntion() {
    if(operator == "" || operandOne == "" || operandTwo == ""){
        alert("You have not indicated enough operators/operands");
    } else {
        updateDisplay("=");
    }
}

clear.addEventListener("click", () => {
    clearFunction();
})

function clearFunction() {
    operandOne = "";
    operandTwo = "";
    operator = "";
    displayContent.textContent = "";
}

dot.addEventListener("click", () => {
    updateDisplay(".");
})

backspace.addEventListener("click", () => {
    backspaceFunction();
})

function backspaceFunction() {
    if(operator == "") {
        operandOne = operandOne.slice(0, -1);
        console.log(operandOne);
        displayContent.textContent = operandOne;
    }
    if(operator != "" && operandTwo == "") {
        operator = "";
        displayContent.textContent =  operandOne;
    }
    else {
        operandTwo = operandTwo.slice(0, -1);
        displayContent.textContent =  `${operandOne} ${operator} ${operandTwo}`;
    }
}


function updateDisplay(str) {
    if(isNaN(str)) {
        if(str == ".") {
            if(operator == "") operandOne += ".";
            else operandTwo += "."
            displayContent.textContent +=  `.`;
        } else if(operator == "") {
            operator = str;
            displayContent.textContent +=  ` ${str} `;
        }  else {
            // then we need to do computation of the first operation
            if(operandTwo == "0" && operator=="\u00f7") {
                alert("Cannot divide by zero");
                operandTwo = "";
                displayContent.textContent = `${operandOne} ${operator} `;
            }
            else {
                let result = String(operate(operandOne, operandTwo, operator));
                operandOne = result;
                operator = str == "=" ? "" : str;
                operandTwo = "";
                if(str != "=") displayContent.textContent = `${result} ${str} `;
                else displayContent.textContent = `${result}`;
            }
        }
    } else {
        if(operator == "") {
            operandOne += str;
            displayContent.textContent = operandOne;
        }
        else {
            operandTwo += str;
            displayContent.textContent += `${str}`;
        } 
    }
}

window.addEventListener("keydown", (e) => {
    switch(e.key.toLowerCase()){
        case "1": 
            updateDisplay("1");
            break;
        case "2":
            updateDisplay("2");
            break;
        case "3": 
            updateDisplay("3");
            break;
        case "4":
            updateDisplay("4");
            break;
        case "5": 
            updateDisplay("5");
            break;
        case "6":
            updateDisplay("6");
            break;
        case "7": 
            updateDisplay("7");
            break;
        case "8":
            updateDisplay("8");
            break;
        case "9": 
            updateDisplay("9");
            break;
        case "0":
            updateDisplay("0");
            break;
        case "+": 
            updateDisplay("+");
            break;
        case "-":
            updateDisplay("-");
            break;
        case "*": 
            updateDisplay("*");
            break;
        case "/":
            updateDisplay("\u00f7");
            break;
        case "delete":
            // this is fn + backspace in my mac japanese keyboard
            clearFunction();
            break;
        case "backspace": 
            backspaceFunction();
            break;
        case ".":
            updateDisplay(".");
            break;
        case "enter":
            equalFuntion();f
            break;
        default:
    }
})


