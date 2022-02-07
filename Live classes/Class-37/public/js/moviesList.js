let body = document.querySelector("body");
let h1  = document.querySelector("h1");

let obscuro = window.confirm("¿Desea usar modo obscuro?");

if(obscuro){
    body.style.backgroundColor = "#7f7f7f";
    body.classList.add("fondoMoviesList");
}

h1.innerText += "LISTADO DE PELICULAS"

h1.classList("encabezado");