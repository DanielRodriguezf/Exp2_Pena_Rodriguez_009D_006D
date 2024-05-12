
//implementar funcion que permita por medio de fetch mostrar las mascotas de nuestro json

function mostrarMascota(){

    let url='http://localhost:3000/mascotas';
    fetch(url) /*Lo que hace fetch es ir a buscar es url*/
    .then(response => response.json())
    .then(data => mostrarMascota(data))
    .catch(error => console.log(error))

    const mostrarMascota=(data)=>{
        console.log(data)
        let body="" //este body es un string y le agregaremos la fila y datos
        for(var i=0; i<data.length; i++)
        {
            body+=`<tr>
            <td>${data[i].id}</td>
            <td>${data[i].nombre_producto}</td>
            <td><img src="${data[i].imagen}" class="producto-imagen"></td>
            <td>${data[i].tipo_mascota}</td>
            <td>${data[i].edad}</td>
            <td>${data[i].precio}</td>
            </tr>`
        }
        document.getElementById('mascotas').innerHTML=body 
    }
}

function buscarTipo(){

    let url='http://localhost:3000/mascotas';
    let tipoo=document.getElementById('tipo').value;
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarMascota(data))
    .catch(error => console.log(error))

    const mostrarMascota=(data)=>{
        console.log(data)
        let body=""
        if(document.getElementById('tipo').value===0){
            mostrarMascota();
        }
        else{
        for(var i=0; i<data.length; i++){
            if (tipoo==data[i].tipo_mascota){ 
                body+=`<tr>
                        <td>${data[i].id}</td>
                        <td>${data[i].nombre_producto}</td>
                        <td><img src="${data[i].imagen}" class="producto-imagen"></td>
                        <td>${data[i].tipo_mascota}</td>
                        <td>${data[i].edad}</td>
                        <td>${data[i].precio}</td>
                        </tr>`
            }
        }
            document.getElementById('mascotas').innerHTML=body
    }//else
}//buscar mascotas

}//function