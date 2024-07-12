const button = document.querySelector("button");
button.addEventListener("click", onClick);

function onClick(event){
    const elDiv = document.getElementById("elDiv");
    elDiv.style.backgroundColor = "lightblue"
}