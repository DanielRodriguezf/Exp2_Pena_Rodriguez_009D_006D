$(function(){
    // Validación del formulario
    $("#evaluacion").validate({
        rules:{
            nombre: {
                required:true
            },
            correo:{
                email: true,
                required:true
            },
            telefono:{
                required:true,
                number:true
            },
            comentario:{
                required:true
            },
        },
        messages:{
            nombre:{
                required:'Ingrese su nombre..',
                minlength:'Caracteres insuficientes(3)..'
            },
            correo:{
                required:'Ingrese su correo..',
                email:'Formato de correo no válido..'
            },
            telefono:{
                required:'Ingrese su teléfono..',
                minlength:'Digitos insuficientes(9)..',
                number: 'Teléfono inválido..'
            },
            comentario:{
                required:'Ingrese su comentario de evaluacion por favor..'
            },
        },
        submitHandler: function(form) {
            // Obtener el valor del campo de comentario
            var comentario = $('#comentario').val().trim();

            // Verificar si el campo de comentario está vacío
            if (comentario === '') {
                // Mostrar un mensaje de error
                alert('Por favor, ingrese un comentario antes de enviar el formulario.');
                return false; // Evitar que el formulario se envíe
            }

            // Si pasa la validación, enviar el formulario y mostrar mensaje de confirmación
            alert("Evaluación enviada correctamente.");
            form.reset();
        }
    });

    // Función para limpiar los campos del formulario
    function LimpiarEva() {
        $('#evaluacion')[0].reset();
        alert("Los campos han sido limpiados con éxito.");
    }

    // Manejo del clic en el botón "Limpiar"
    $("#Limpiar").click(function() {
        LimpiarEva();
    });
});
