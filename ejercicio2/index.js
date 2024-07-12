const input = document.querySelector("input");
input.addEventListener("keyup", onChange);

let elDiv = document.getElementById("elDiv");


function onChange(event){
    const inputText = input.value;
    elDiv.innerText = inputText;
}

const elBoton = document.getElementById("elBoton");
elBoton.addEventListener("click", onClick);

function onClick(event){
    elDiv.innerText = "";
}