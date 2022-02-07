let main = document.querySelector("main");
console.log(main)

let h2 = document.querySelector("h2");
console.log(h2)

let a = document.querySelector("a");
console.log(a)

let parrafos = document.querySelectorAll("p")
console.log(parrafos)


let out2 = window.prompt("Ingresa tu nombre");
let answer = window.confirm("¿Deseas agregar un fondo de pantalla?")
if (out2){
    h2.innerHTML += out2;
    
} else {
    h2.innerHTML += "invitado"
}
h2.classList.add("uppercase")

a.style.color = "#E51B3E"

if (answer){
    main.classList.add("fondo");
}

let numeroDeParrafos = parrafos.length;
for(let i = 0; i < numeroDeParrafos; i++) {
    if(i%2 ==0){
        parrafos[i].classList.add("destacadoPar");
    } else {
        parrafos[i].classList.add("destacadoImpar");
    }
}
