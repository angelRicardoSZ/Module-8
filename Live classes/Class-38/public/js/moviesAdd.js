window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let buttonadd = document.querySelector(".botonAgregar"); 
    
    buttonadd.addEventListener("mouseover", function(){
        buttonadd.style.color='#E51B3E';
    })

    buttonadd.addEventListener("mouseout", function(){
        buttonadd.style.color='white';
    })

}