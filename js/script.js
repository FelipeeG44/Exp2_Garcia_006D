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
        $("#formulario1").validate({
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
                celular:{
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

    function MostrarFecha() 
    {
        document.getElementById("demo").innerHTML = Date();
    }

    $(document).ready(function()
        {
            $("#enviar").click(function(){

                $.get("https://apis.digital.gob.cl/fl/feriados/2021",
                    function(data){
                        
                        $.each(data,function(i,item){
                            $("#fechas").append("<tr><td>"+item.nombre+"</td><td>"+item.fecha +
                            "</td><td>"+ item.tipo+ "</td><td>"+item.irrenunnciable+"</td></tr>");
                            

                        });

                    });
            });
        })


   

    