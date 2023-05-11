const n = 16;
const MAX_SQUARES = n;

let containerDiv = document.querySelector(".container");
containerDiv.setAttribute("style",
    `grid-template-columns: repeat(${n}, 1fr);
grid-template-rows: repeat(${n}, 1fr)`);

function makeGrid(n) {
    containerDiv.setAttribute("style", `grid-template-columns: repeat(${n}, 1fr);
                                        grid-template-rows: repeat(${n}, 1fr)`);
    for (let i = 0; i < Math.pow(n, 2); i++) {
        const childDiv = document.createElement("div");
        childDiv.classList.add("pad");
        childDiv.style.border = "1px solid darkcyan";
        childDiv.addEventListener("mouseenter", e => {
            childDiv.style.backgroundColor = "#fff";
            childDiv.classList.add("active");
        });
        childDiv.addEventListener("mouseleave", e => {
            childDiv.style.removeProperty("background-color");
            childDiv.classList.remove("active");
        });
        childDiv.addEventListener("click", e => {
            childDiv.classList.toggle("rainbow");
        });
        containerDiv.appendChild(childDiv);
    }
}

makeGrid(n);

const btn = document.querySelector("button");
btn.addEventListener("click", e => {
    let msg = "How many squares per side do you want for the new grid?";
    let response = this.prompt(msg);
    if (response === "") {
        return;
    }
    while (Number.isNaN(response) || !Number.isInteger(response) || parseInt(response) < 1 || parseInt(response) > MAX_SQUARES) {
        response = this.prompt(`Invalid input. Enter an integer between 1 and ${MAX_SQUARES}:`);
        if (response === "") {
            return;
        }
        response = Number(response);
    }

    removeAllChildNodes(containerDiv)

    makeGrid(response);
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
