// alert("Hola este es mi Javascript");
// let nombre ="marta";
// nombre = "maria"

// var nombre1 ="marta";
// nombre1="maria"

// const nombre2 ="marta";

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);

//seleccionar elementos
let contenidoTitulo = "charlyys212"

let titulo = document.querySelector(".nombre");

//condiciones
let textoTitulo = titulo.innerText;
console.log("el nombre de la variable es en html:",textoTitulo);

if(textoTitulo == contenidoTitulo){
    titulo.innerHTML = "CONFORME";
}
else{
    console.log("NO ES IGUAL AL DEL HTML");
}