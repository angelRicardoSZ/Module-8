window.addEventListener("load", function() {
    let formulario = document.querySelector("form.addnewmovie")
    

    formulario.addEventListener("submit", function(e) {
        
    let errores = [];

        
    let title = document.querySelector("input#title");
    let rating = document.querySelector("input#rating");
    let awards = document.querySelector("input#awards");
    let release_date = document.querySelector("input#release_date");
    let length = document.querySelector("input#length");
    let genreId = document.querySelector("select#genreID")
    title.focus();
    title.select();    
    
    if(title.value == "") {
        errores.push("El campo de nombre no puede estar vacío")
        title.classList.toggle("is-invalid")
        
    }

    if(rating.value == "") {
        errores.push("El rating no puede estar vacío")
        rating.classList.toggle("is-invalid")
        
            
    }
    
    
    if(awards.value == "") {
        errores.push("Los premios no pueden estar vacío")
        awards.classList.toggle("is-invalid")
        
    }

    if(release_date.value==""){
        errores.push("La fecha de creación no puede estar vacía")
        release_date.classList.toggle("is-invalid")
        
    }

    if(length.value==""){
        errores.push("La longitud no puede estar vacía")
        length.classList.toggle("is-invalid")
        
    }

    if(genreId.value==""){
        errores.push("Agregar un género")
        genreId.classList.toggle("is-invalid")
        
    }


    if(rating.value < 0 || rating.value>10) {
        errores.push("El rating se encuentra fuera del rango")
        rating.classList.toggle("is-invalid")
        
            
    }
    if(length.value < 60 || length.value>360) {
        errores.push("Se encuentra fuera del rango, debe estar entre 60 y 360")
        length.classList.toggle("is-invalid")
        
            
    }
    if(awards.value < 0 || rating.value>10) {
        errores.push("Los premios están fuera de rango")
        rating.classList.toggle("is-invalid")
        
            
    }

    console.log(errores)
    if(errores.length > 0) {
        e.preventDefault();
        let ulErrores = document.querySelector("div.errores ul")
        for(let i=0;i<errores.length;i++){
            ulErrores.innerHTML += "<li>"+errores[i]+"</li>"
        }
    }

    if(errores.length == 0 ){
        title.classList.toggle("is-invalid")
        rating.classList.toggle("is-invalid")
        awards.classList.toggle("is-invalid")
        release_date.classList.toggle("is-invalid")
        length.classList.toggle("is-invalid")
        genreId.classList.toggle("is-invalid")
    }


    })
    
    
})