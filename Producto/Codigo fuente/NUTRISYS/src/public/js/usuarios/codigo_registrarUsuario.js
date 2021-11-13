//Validar si es alta o modificacion
 const url = new String(window.location)
 let modo = url.substr(url.indexOf("usuarios/"),url.length)
 var nuevo=1
 var emp_legajo=0
 var metodo=''
 var ruta=''
 var emp_legajoUltimo;
 var usu_ultimoid = 0;
 var usu_id=0
 if (modo.toLowerCase()==='usuarios/nuevousuario/') {
     nuevo=1;
     metodo='POST'
     ruta="http://localhost:3000/usuario"
 }
 else{
    nuevo=0;
    emp_legajo = url.substr(url.indexOf("leg=")+4,url.length)
     metodo='PUT'
     ruta="http://localhost:3000/usuarios/" + emp_legajo
     }
     console.log(modo,nuevo,emp_legajo,ruta,metodo)


    
//Cargar pagina según modo
if (nuevo==1) {
    let cabecera =''
    cabecera += `Nuevo Usuario`        
} else {
    let cabecera =''
    cabecera += `Modificar Usuario`        
    let query = 'http://localhost:3000/usuarios/'+emp_legajo
    fetch(query)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
    const mostrarData = (data) => {
        console.log(data)
        document.getElementById("emp_nombre").value = data[0].emp_nombre
        document.getElementById("emp_apellido").value = data[0].emp_apellido
        document.getElementById("emp_nrodoc").value = data[0].emp_nrodoc
        document.getElementById("emp_matricula").value = data[0].emp_matricula
        document.getElementById("emp_direccion").value = data[0].emp_direccion
        document.getElementById("emp_telefono1").value = data[0].emp_telefono1
        document.getElementById("emp_telefono2").value = data[0].emp_telefono2
        document.getElementById("usu_correo").value = data[0].usu_correo
        document.getElementById("usu_clave").value = data[0].usu_clave
        document.getElementById("usu_claveC").value = data[0].usu_clave

        usu_id = data[0].usu_id
        console.log(usu_id)
    }
}
console.log(usu_id)


//BUSCAR LEGAJO A REGISTRAR
if (nuevo == 1) {
    let query = 'http://localhost:3000/ultimolegajo'
    fetch(query)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
    const mostrarData = (data) => {
        emp_legajoUltimo=data[0].emp_legajo
        emp_legajoUltimo=emp_legajoUltimo+1
        console.log(emp_legajoUltimo)
    }
}

//BUSCAR IdUsuario A REGISTRAR
if (nuevo==1) {
    let query = 'http://localhost:3000/ultimoidusuario'
    fetch(query)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
    const mostrarData = (data) => {
        usu_ultimoid=data[0].usu_id
        usu_ultimoid=usu_ultimoid+1
        console.log(usu_ultimoid)
    }
}

function registrarEmpleado() {
    if (validarDatos() == false) {
        return false;
    } 
    else {
    var sel = document.getElementById("bootstrap-duallistbox-selected-list_duallistbox_demo1[]"); 
    
    if (sel.length>0){
        //REGISTRAR NUEVOS EMPLEADOS
        if (nuevo==1) {
            //Empleado
            var emp_nrodoc =   document.getElementById("emp_nrodoc").value;
            var emp_apellido =   document.getElementById("emp_apellido").value;
            var emp_nombre =   document.getElementById("emp_nombre").value;
            var emp_matricula =   document.getElementById("emp_matricula").value;
            var emp_direccion =   document.getElementById("emp_direccion").value;
            var emp_telefono1 =   document.getElementById("emp_telefono1").value;
            var emp_telefono2 =   document.getElementById("emp_telefono2").value;
            const post = {
                emp_nrodoc: emp_nrodoc,
                emp_idusuario: usu_ultimoid,
                emp_apellido: emp_apellido,
                emp_nombre: emp_nombre,
                emp_matricula: emp_matricula,
                emp_direccion: emp_direccion,
                emp_telefono1: emp_telefono1,
                emp_telefono2: emp_telefono2,
            }
            console.log(post)
             try {
                console.log(JSON.stringify(post));
                fetch("http://localhost:3000/registrarEmpleado",{
                method:"POST",
                body: JSON.stringify(post),
                headers: {
                "Content-type": "application/json"
                }
                })  .then(res=>res.json())
                    .then(data=>console.log(data))
            } catch (error) {
                swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
                console.log(error)
                } 
            //Usuarios
            var usu_clave =   document.getElementById("usu_clave").value;
            var usu_correo =   document.getElementById("usu_correo").value;
                const post2 = {
                    usu_usuario: emp_legajoUltimo,
                    usu_clave: usu_clave,
                    usu_correo: usu_correo,
                }
                console.log(post2)
                    try {
                    console.log(JSON.stringify(post2));
                    fetch("http://localhost:3000/registrarUsuarioEmpleado",{
                    method:"POST",
                    body: JSON.stringify(post2),
                    headers: {
                    "Content-type": "application/json"
                    }
                    })  .then(res=>res.json())
                        .then(data=>console.log(data))
                } catch (error) {
                    swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
                    console.log(error)
                    } 

                //Perfiles
            for (var i = 0; i < sel.length; i++) {
                const post3 = {
                    usu_id: emp_legajoUltimo,
                    usu_idperfil: sel[i].value,
                }
                console.log(post3)

                 try {
                    console.log(JSON.stringify(post3));
                    fetch("http://localhost:3000/registrarUsuPerfil",{
                        method:"POST",
                        body: JSON.stringify(post3),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })  .then(res=>res.json())
                        .then(data=>console.log(data))
                } catch (error) {
                    swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
                    console.log(error)
                }
            }
            swal("Empleado Registrado","Empleado "+emp_legajoUltimo+" Registrado con Éxito!","success")
        }
        else{

        //ACTUALIZAR EMPLEADOS
        var emp_nrodoc =   document.getElementById("emp_nrodoc").value;
        var emp_apellido =   document.getElementById("emp_apellido").value;
        var emp_nombre =   document.getElementById("emp_nombre").value;
        var emp_matricula =   document.getElementById("emp_matricula").value;
        var emp_direccion =   document.getElementById("emp_direccion").value;
        var emp_telefono1 =   document.getElementById("emp_telefono1").value;
        var emp_telefono2 =   document.getElementById("emp_telefono2").value;
        const post = {
            emp_nrodoc: emp_nrodoc,
            emp_idusuario: usu_ultimoid,
            emp_apellido: emp_apellido,
            emp_nombre: emp_nombre,
            emp_matricula: emp_matricula,
            emp_direccion: emp_direccion,
            emp_telefono1: emp_telefono1,
            emp_telefono2: emp_telefono2,
        }

        try {
            console.log(JSON.stringify(post));
            fetch("http://localhost:3000/usuarios/actualizarEmpleado/"+emp_legajo,{
            method:metodo,
            body: JSON.stringify(post),
            headers: {
                "Content-type": "application/json"
            }
            }).then(res=>res.json())
            .then(data=>console.log(data))
            //location.href ="/usuarios/actualizarEmpleado/"+emp_legajo
        } catch (error) {
            swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
        } 

        //Actualizar Usuario
        var usu_clave =   document.getElementById("usu_clave").value;
        var usu_correo =   document.getElementById("usu_correo").value;
            
        const post2 = {
            usu_clave: usu_clave,
            usu_correo: usu_correo,
        }
        try {
            console.log(JSON.stringify(post2));
            fetch("http://localhost:3000/usuarios/actualizarusuario/"+emp_legajo,{
            method:metodo,
            body: JSON.stringify(post2),
            headers: {
                "Content-type": "application/json"
            }
            }).then(res=>res.json())
            .then(data=>console.log(data))
            //location.href ="/usuarios/actualizarUsuario/"+usu_usuario
        } catch (error) {
            swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
        }

        try {
            fetch("http://localhost:3000/borrarusuxip/"+emp_legajo,{
            method:"DELETE"
            })  .then(res=>res.json())
        } catch (error) {
            swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
            console.log(error)
            } 

            for (var i = 0; i < sel.length; i++) {
                const post3 = {
                    usu_id: emp_legajo,
                    usu_idperfil: sel[i].value,
                }
                console.log(post3)

                 try {
                    console.log(JSON.stringify(post3));
                    fetch("http://localhost:3000/registrarUsuPerfil",{
                        method:"POST",
                        body: JSON.stringify(post3),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })  .then(res=>res.json())
                        .then(data=>console.log(data))
                } catch (error) {
                    swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
                    console.log(error)
                } 
            }
            swal("Empleado Registrado","Empleado "+emp_legajoUltimo+" Registrado con Éxito!","success")
        }  
    }
    else{
         swal("Atención","Debe seleccionar al menos un perfil de la grilla.","warning" )
    }
}
}

function validarDatos(){
    var incompleto = false;
    var correccion = "Datos incompletos o inválidos: " + "\n";
    var correo= document.getElementById("usu_correo").value;

    if(document.getElementById("emp_nrodoc").value == "")
    {
        correccion = correccion + "*Documento" + "\n"
        incompleto = true;
    }

    if(document.getElementById("emp_direccion").value == "")
    {
        correccion = correccion + "*Dirección" + "\n"
        incompleto = true;
    }

    if(document.getElementById("emp_apellido").value == "")
    {
        correccion = correccion + "*Apellido" + "\n"
        incompleto = true;
    }
    if(document.getElementById("emp_nombre").value == "")
    {
        correccion = correccion + "*Nombre" + "\n"
        incompleto = true;
    }
    if(document.getElementById("emp_telefono1").value == "")
    {
        correccion = correccion + "*Telefono" + "\n"
        incompleto = true;
    }
    if(document.getElementById("usu_correo").value == "" || !(correo.includes("@")))
    {
        correccion = correccion + "*Correo" + "\n"
        incompleto = true;
    }

    if(document.getElementById("usu_clave").value == "")
    {
        correccion = correccion + "*Clave" + "\n"
        incompleto = true;
    }

    if(document.getElementById("usu_claveC").value != document.getElementById("usu_clave").value)
    {
        correccion = "Las contraseñas no coinciden" + "\n"
        incompleto = true;
    }
    

    if(incompleto == true){
        swal("Atención",correccion,"warning" );
        return false;
    }
    else{
    }
}
