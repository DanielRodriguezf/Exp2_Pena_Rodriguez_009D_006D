

    // Validación del formulario
    $("#registro").validate({
        rules:{
            nombre: {
                required: true
            },
            correo:{
                required: true,
                email: true
            },
            genero: { // Agregar regla de validación para el campo de género
                required: true
            },
            telefono:{
                required: true,
                number: true
            },
            fecha:{
                required: true
            },
            txtpass:{
                required: true
            },
            txtpass2:{
                required: true,
                equalTo: '#txtpass'
            },
        },
        messages:{
            nombre:{
                required: 'Ingrese su nombre..',
                minlength: 'Caracteres insuficientes(3)..'
            },
            correo:{
                required: 'Ingrese su correo..',
                email: 'Use formato nombre@ejemplo.com'
            },
            genero: { // Mensaje de error para el campo de género
                required: 'Seleccione su género..'
            },
            
            telefono:{
                required: 'Ingrese su teléfono..',
                minlength: 'Digitos insuficientes(9)..',
                number: 'Teléfono inválido..'
            },
            fecha:{
                required: 'Seleccione su fecha de nacimiento'
            },
            txtpass:{
                required: 'Ingrese una contraseña..',
                minlength: 'Caracteres insuficientes(8)..'
            },
            txtpass2:{
                required: 'Verifique su contraseña..',
                minlength: 'Caracteres insuficientes(8)..',
                equalTo: 'Contraseñas no son iguales..'
            },
        }
    }); 


    function VistaContraseña(){
        let pass = document.getElementById("txtpass"); 
        let ver = document.getElementById("ver");   
        let ocultar = document.getElementById("ocultar");       

        if(pass.type === 'password'){
            pass.type = 'text';
            ver.style.display = 'none';
            ocultar.style.display = 'block';
        } else{
            pass.type = 'password';
            ver.style.display = 'block';
            ocultar.style.display = 'none';
        }
    }


    function VistaReContraseña(){
        let pass = document.getElementById("txtpass2"); 
        let ver = document.getElementById("ver2");   
        let ocultar = document.getElementById("ocultar2");       

        if(pass.type === 'password'){
            pass.type = 'text';
            ver.style.display = 'none';
            ocultar.style.display = 'block';
        } else{
            pass.type = 'password';
            ver.style.display = 'block';
            ocultar.style.display = 'none';
        }
    }    