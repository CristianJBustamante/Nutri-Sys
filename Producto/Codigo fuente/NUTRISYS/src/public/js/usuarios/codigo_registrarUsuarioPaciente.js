swal({
    text:"Ingresando...",
    icon: "https://thumbs.gfycat.com/NecessaryEvilGuillemot-max-1mb.gif",
    buttons: false,      
    closeOnClickOutside: false,
    timer: 3000,
    //icon: "success"
  })

//Buscar hc
const url = new String(window.location)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,url.length)
console.log(pac_nrohc)



//BUSCAR CORREO A REGISTRAR - validar que no haya usuario registrado 
  let query = 'http://localhost:3000/buscardatospaciente/'+pac_nrohc
  fetch(query)
      .then(response => response.json())
      .then(data => mostrarData(data))
      .catch(error => console.log(error))
  const mostrarData = (data) => {
      console.log(data)
      if (data.length==0) {
        swal("Link No Válido","El Paciente con HC: "+pac_nrohc+" no existe.","warning" )
        .then((value) => {
            location.href ="/"
            })
      }
      if (data[0].usu_correo ==null) {
        usu_correo=data[0].pac_correo
        document.getElementById('usu_correo').value = usu_correo;
      }else{
        swal("Link No Válido","El Paciente con HC: "+pac_nrohc+" ya posee un usuario.","warning" )
        .then((value) => {
            location.href ="/"
            })
      }           
  }



function registrarUsuarioPaciente() {
    if (validarDatos() == false) {
        return false;
    } 
    else {
    //REGISTRAR Usuario Paciente
            //Usuarios
            var usu_clave = document.getElementById("usu_clave").value;
            var usu_correo = document.getElementById("usu_correo").value;
            var usu_hab = 1;

            const post2 = {
                usu_usuario: usu_correo,
                usu_clave: usu_clave,
                usu_correo: usu_correo,
                usu_hab: usu_hab,
                usu_nrohc: pac_nrohc
            }
            try {
                console.log(JSON.stringify(post2));
                fetch("http://localhost:3000/nuevousuariopac",{
                method:"POST",
                body: JSON.stringify(post2),
                headers: {
                "Content-type": "application/json"
                }})
                .then(res=>res.json())
                .then(data=>console.log(data))
                swal("Usuario Registrado","Usuario "+usu_correo+" Registrado con Éxito!","success")
                .then((value) => {
                        location.href ="/login"})
            } catch (error) {
                swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
                console.log(error)
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