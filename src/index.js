const body = document.querySelector("body");
body.style.margin = "0";
// body.style.border = "1px solid black";

const containerDiv = document.querySelector(".container");

for (let i = 0; i < (16*16); i++) {
    const childDiv = document.createElement("div");
    childDiv.classList.add("pad");
    childDiv.style.border = "1px solid darkcyan";
    containerDiv.appendChild(childDiv);
}