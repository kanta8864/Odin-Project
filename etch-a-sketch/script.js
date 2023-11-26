// global variable for color. 
let color = "#e66465"; 

// idea taken from michalosman's work as I could not figure out how to
// only add color when the user hovers over while mousedown
//https://github.com/michalosman/etch-a-sketch/blob/master/script.js
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createDivs(gridSize){
    let container = document.querySelector(".grid-container");
    container.innerHTML = "";
    for(let i = 0; i < gridSize; i++) {
        let parentDiv = document.createElement("div");
        parentDiv.className = `row${i}`
        for(let j = 0; j < gridSize; j++) {
            let div = document.createElement("div");
            div.className = "grid";
            let divSize = 600 / gridSize;
            div.style.width = `${divSize}px`;
            div.style.height = `${divSize}px`;
            div.addEventListener("mouseover", () => {
                if(!mouseDown) return 
                div.style.backgroundColor = color;
            })
            parentDiv.appendChild(div);
        }
        container.appendChild(parentDiv);
    }
}

window.onload = () => createDivs(50);

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
    let divs = document.querySelectorAll(".grid");
    for(let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "white";
    }
})

let slider = document.querySelector(".slider");

slider.oninput = function() {
    createDivs(this.value);
    changeSliderValue(this.value);
  }

function changeSliderValue(value) {
    let sliderValue = document.querySelector(".slider-value");
    sliderValue.textContent = `${value} x ${value}`
}

let colorInput = document.querySelector("#colorInput");
colorInput.addEventListener("input", () => {
    color = colorInput.value;
})