const elBoton = document.getElementById("elBoton");
elBoton.addEventListener("click", onClick);

function onClick(event){
    const laAltura = document.getElementById("laAltura");
    const elPeso = document.getElementById("elPeso");
    
    let resultado = parseInt(laAltura.value) / parseInt(elPeso.value);
    
    const elIndiceDeMasa = document.getElementById("elIndiceDeMasa");
    elIndiceDeMasa.value = resultado;
}
