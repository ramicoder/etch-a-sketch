


const container = document.getElementById("container");
grid(16);
const newBtn = document.createElement("button");
newBtn.classList.add("button");
newBtn.textContent = "New Sketch?";
newBtn.addEventListener("click", () => {
    colNum = prompt("How many columns do you want in your grid? ");
    
    if (isNaN(colNum)){
        alert("Columns should have a minimum 2 and a maximum of 100");
    } else if (colNum > 100 || colNum < 2) {
        alert("Please enter a number.");
    } else {
        grid(colNum);
    }
})

let randomClicked = false;
let clearClicked = false;
const rBtn = document.createElement("button");
const cBtn = document.createElement("button");
cBtn.classList.add("button");
cBtn.style.cssText = "background-color: grey; color: white;"
cBtn.textContent = "Clear"
const buttons = document.createElement("div");
buttons.style.cssText = "display: flex; margin-top: 15px; gap: 10px;";
rBtn.classList.add("button");
rBtn.textContent = "Random color";
rBtn.style.cssText = "background-color: purple; color: white;"
rBtn.addEventListener("click", () => {
    randomClicked = !randomClicked;
    if (randomClicked) {
        rBtn.style.backgroundColor = "#380138";
    } else {
        rBtn.style.backgroundColor = "purple";
    }
});

container.before(newBtn);
container.after(buttons);
buttons.appendChild(rBtn);
buttons.appendChild(cBtn);
function grid (col) {
    
    container.innerHTML = "";
    
    for (let i = 0; i < col; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        
        for (let j = 0; j < col; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            column.appendChild(box);
        }
        
        container.appendChild(column);
    } 
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            if (randomClicked) {
                box.style.backgroundColor = getRandomColor();
                box.style.opacity = 1;
            } else {
                box.style.backgroundColor = "#000";
            }
        });
    });
}
cBtn.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.style.backgroundColor = "")
    clearClicked = !clearClicked;
    if (clearClicked) {
        cBtn.style.backgroundColor = "#494749";
    } else {
        cBtn.style.backgroundColor = "grey";
    }
})
function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}
const p = document.createElement("p");
p.textContent = "Created by Rami Daood";
buttons.after(p);
