//--------------------------------------------PERMISOS-----------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//var s = (document.getElementById("user").href)
//let milegajo = s.substr(s.indexOf("leg=")+4,s.length)
// var admin
// var profesional
// var recepcionista
// console.log(milegajo)
// var urls
// buscarperfiles()
// swal({
//   text:"Ingresando...",
//   icon: "https://thumbs.gfycat.com/NecessaryEvilGuillemot-max-1mb.gif",
//   buttons: false,      
//   closeOnClickOutside: false,
//   timer: 1000,
//   //icon: "success"
// }).then((value) => {
  
//   setTimeout(function(){ 
//   redirigirporpermiso('/pacientes/buscarpaciente',[],admin) 
//   if (admin.length>0) {
//   }else{
//     document.getElementById('usuarios').style="display:none"
//   }

//   if (profesional.length>0) {
//   }else{
//     document.getElementById('misturnos').style="display:none"
//   }

//   if (recepcionista.length>0) {
//   }else{
//     document.getElementById('recepcion').style="display:none"
//   }

//   if (recepcionista.length>0 || profesional.length>0) {   
//   }else{
//     document.getElementById('hc').style="display:none"
//     document.getElementById('organizador').style="display:none"
//   }
// }, 500)})


// function buscarperfiles() {
//   urls='/permiso/'+milegajo+'/1'
//   fetch(urls)
//           .then(response => response.json())
//           .then(data => permisoadmin(data))
//           .catch(error => console.log(error))
//   const permisoadmin = (data) => {
//         admin=data}

//   urls='/permiso/'+milegajo+'/2'
//   fetch(urls)
//           .then(response => response.json())
//           .then(data => permisoprofesional(data))
//           .catch(error => console.log(error))  
//   const permisoprofesional = (data) => {
//         profesional=data}

//   urls='/permiso/'+milegajo+'/3'
//   fetch(urls)
//           .then(response => response.json())
//           .then(data => permisorecepcion(data))
//           .catch(error => console.log(error))   
//   const permisorecepcion = (data) => {
//         recepcionista=data}
// return
// }

// function redirigirporpermiso(ruta,rol1,rol2) {
//   if (rol1.length>0 || rol2.length>0){
//     return
//   }else{
//     location.href=ruta
//   }
// }
//-------------------------------------------FIN PERMISOS----------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

//Validar si es alta o modificacion
const url = new String(window.location)
let modo = url.substr(url.indexOf("usuarios/"),url.length)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,url.length)
console.log(pac_nrohc)
var nuevo=0 //aca antes decia 1 lo cambie recien, porque asi estaba en el registrar paciente esta bien
var emp_legajo=0
var metodo=''
var ruta=''
var emp_legajoUltimo;
var usu_ultimoid = 0;
var usu_id=0
console.log(modo)
if (modo.toLowerCase()==='usuarios/registrarusuariopaciente/hc='+pac_nrohc) {
    nuevo=1;
    metodo='POST'
    ruta="http://localhost:3000/usuarios/registrarUsuarioPaciente/"+pac_nrohc
    console.log("modo registrar")
}
else{
  console.log("modo Actualizar")
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

//BUSCAR CORREO A REGISTRAR
if (nuevo == 1) {
  let query = 'http://localhost:3000/usuarios/registrarUsuarioPaciente/'+pac_nrohc
  fetch(query)
      .then(response => response.json())
      .then(data => mostrarData(data))
      .catch(error => console.log(error))
  const mostrarData = (data) => {
      usu_correo=data[0].pac_correo
      console.log(usu_correo)
      document.getElementById('usu_correo').value = usu_correo;
  }
}

function registrarUsuarioPaciente() {
    if (validarDatos() == false) {
        return false;
    } 
    else {
    //REGISTRAR NUEVOS EMPLEADOS
        if (nuevo==1) {
            //Usuarios
            var usu_clave = document.getElementById("usu_clave").value;
            var usu_correo = document.getElementById("usu_correo").value;
            var usu_hab = 1;

                const post2 = {
                    usu_usuario: emp_legajoUltimo,
                    usu_clave: usu_clave,
                    usu_correo: usu_correo,
                    usu_hab: usu_hab,
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
                swal("Usuario Registrado","Usuario "+usu_correo+" Registrado con Éxito!","success")
                .then((value) => {
                        location.href ="/turnospaciente/hc="+pac_nrohc})
        }
}
}

function validarDatos(){
    var incompleto = false;
    var correccion = "Datos incompletos o inválidos: " + "\n";
    var correo= document.getElementById("usu_correo").value;

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