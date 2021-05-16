function showSpoiler(obj)
    {
    var inner = obj.parentNode.getElementsByTagName("div")[0];
    if (inner.style.display == "none")
        inner.style.display = "";
    else
        inner.style.display = "none";
    }

      (function() 
      {
        $("#formulario").validate({
             rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    nombres: "required",
                    fono: "required",
                    apelidos: "required",
                    
                      
                    
                },
            messages: {
                email: {
                    required: 'Ingresa tu correo electrónico',
                    email: 'Formato de correo no válido'
                },
                nombres: {
                    required: 'Ingresa una contraseña',
                    minlength: 'Caracteres insuficientes'
                },
                fono:{
                    required: 'Ingrese un número de celular',
                    minlength: 'Cantidad de digitos insuficiente'
                },               
                apellidos:{
                  required: 'Ingrese un apellido',
                  minlength: 'Caracteres insuficientes'
              },  
            }
        }); 
    }); 

    function CambiarMayusculas()
        {
            var a = document.getElementById("nom");
            a.value = a.value.toUpperCase();
        }

        function CambiarMayusculas2()
        {
            var a = document.getElementById("ape");
            a.value = a.value.toUpperCase();
        }

        function CambiarMayusculas3()
        {
            var a = document.getElementById("ema");
            a.value = a.value.toUpperCase();
        }