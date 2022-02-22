window.onload = () => {
    const campos = document.querySelectorAll("form input")
    //console.log(campos)
    //console.log(campos[1].id)
    fetch("http://localhost:3031/api/movies/8")
    .then(function(res){
        return res.json();
    })
    .then(function({data}){
        const  keys = Object.keys(data)
        

        for(i=0; i < campos.length; i++){
            //for(j=0; j< campos.length;j++){
            //    if(keys[i]==campos[j].id){
            //        campos[j].value = data[campos[j].id]
            //    }

            campos[i].value = data[campos[i].id]
            
            //   console.log(`${campos[i].id}  ${data[campos[i].id]} `) 
                        
            
            
        }
    })
    

}