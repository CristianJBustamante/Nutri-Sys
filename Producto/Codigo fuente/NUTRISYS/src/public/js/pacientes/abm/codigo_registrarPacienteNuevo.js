//--------------------------------------------PERMISOS-----------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
var s = (document.getElementById("user").href)
let milegajo = s.substr(s.indexOf("leg=")+4,s.length)
var admin
var profesional
var recepcionista
console.log(milegajo)
var urls
buscarperfiles()
swal({
  text:"Ingresando...",
  icon: "https://thumbs.gfycat.com/NecessaryEvilGuillemot-max-1mb.gif",
  buttons: false,      
  closeOnClickOutside: false,
  timer: 1000,
  //icon: "success"
}).then((value) => {
  
  setTimeout(function(){ 
  redirigirporpermiso('/usuarios/consultausuario',profesional,recepcionista) 
  if (admin.length>0) {
  }else{
    document.getElementById('usuarios').style="display:none"
  }

  if (profesional.length>0) {
  }else{
    document.getElementById('misturnos').style="display:none"
  }

  if (recepcionista.length>0) {
  }else{
    document.getElementById('recepcion').style="display:none"
  }

  if (recepcionista.length>0 || profesional.length>0) {   
  }else{
    document.getElementById('hc').style="display:none"
  }
}, 500)})


function buscarperfiles() {
  urls='http://localhost:3000/permiso/'+milegajo+'/1'
  fetch(urls)
          .then(response => response.json())
          .then(data => permisoadmin(data))
          .catch(error => console.log(error))
  const permisoadmin = (data) => {
        admin=data}

  urls='http://localhost:3000/permiso/'+milegajo+'/2'
  fetch(urls)
          .then(response => response.json())
          .then(data => permisoprofesional(data))
          .catch(error => console.log(error))  
  const permisoprofesional = (data) => {
        profesional=data}

  urls='http://localhost:3000/permiso/'+milegajo+'/3'
  fetch(urls)
          .then(response => response.json())
          .then(data => permisorecepcion(data))
          .catch(error => console.log(error))   
  const permisorecepcion = (data) => {
        recepcionista=data}
return
}

function redirigirporpermiso(ruta,rol1,rol2) {
  if (rol1.length>0 || rol2.length>0){
    return
  }else{
    location.href=ruta
  }
}
//-------------------------------------------FIN PERMISOS----------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------


//Validar si es alta o modificacion

const url = new String(window.location)
let modo = url.substr(url.indexOf("pacientes/"),url.length)
var nuevo=0
var pac_nrohc=0
var metodo=''
var ruta=''
if (modo=="pacientes/nuevopaciente/") {
    nuevo=1;
    metodo='POST'
    ruta="http://localhost:3000/pacientes"
}
else{
    nuevo=0;
    pac_nrohc = url.substr(url.indexOf("hc=")+3,url.length)
    metodo='PUT'
    ruta="http://localhost:3000/pacientes/" +pac_nrohc
    }
    console.log(modo,nuevo,pac_nrohc,ruta,metodo)

//Cargar pagina según modo
if (nuevo==1) {
    let cabecera =''
    cabecera += `Nuevo Paciente`        
} else {
    let cabecera =''
    cabecera += `Modificar Paciente`        
    let query = 'http://localhost:3000/paciente/'+pac_nrohc
    fetch(query)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
    const mostrarData = (data) => {
        console.log(data)
        document.getElementById("tipodocumento__paciente").value = data.pac_tipodoc
        document.getElementById("documento__paciente").value = data.pac_nrodoc
        document.getElementById("apellido__paciente").value = data.pac_apellido
        document.getElementById("nombre__paciente").value = data.pac_nombre
        document.getElementById("sexo__paciente").value = data.pac_sexo
        document.getElementById("mutual__paciente").value = data.pac_mutual
        document.getElementById("mutual__paciente2").value = data.pac_mutual2
        document.getElementById("celular__paciente").value = data.pac_telefono1
        document.getElementById("telefono__paciente").value = data.pac_telefono2
        document.getElementById("fechaNac__paciente").value = data.pac_fnac
        document.getElementById("correo__paciente").value = data.pac_correo
        document.getElementById("direccion__paciente").value = data.pac_direccion
        document.getElementById("barrio__paciente").value = data.pac_barrio

        calcularEdad();
    }
}


function calcularEdad(){
    var userinput = document.getElementById("fechaNac__paciente").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='' || dob.getTime() >= Date.now()) {
      alert("Coloque una fecha de nacimiento correcta");  
      document.getElementById("fechaNac__paciente").value='';
      document.getElementById("edad__paciente").value='';
      return false; 
    } 
    else {
    
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();
    
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff); 
    
    //extract year from date    
    var year = age_dt.getUTCFullYear();
    
    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    
    //display the calculated age
    return document.getElementById("edad__paciente").value =  age + " años. ";

    console.log("se ejecuto");
    }
}


function registrarPaciente(){
    if (validarDatos() == false) {
        return false;
    } 
    else {
    var tipodoc = document.getElementById("tipodocumento__paciente").value;
    var nrodoc = document.getElementById("documento__paciente").value;
    var apellido =  document.getElementById("apellido__paciente").value;
    var nombre = document.getElementById("nombre__paciente").value;
    var sexo = document.getElementById("sexo__paciente").value;
    var mutual = document.getElementById("mutual__paciente").value;
    var mutual2 = document.getElementById("mutual__paciente2").value;
    var telefono1 = document.getElementById("celular__paciente").value;
    var telefono2 = document.getElementById("telefono__paciente").value;
    var fechanacimiento = document.getElementById("fechaNac__paciente").value;
    var correo = document.getElementById("correo__paciente").value;
    var direccion = document.getElementById("direccion__paciente").value;
    var barrio = document.getElementById("barrio__paciente").value;

    const post = {
        pac_tipodoc: tipodoc,
        pac_nrodoc: nrodoc,
        pac_apellido: apellido,
        pac_nombre: nombre,
        pac_sexo: sexo,
        pac_mutual: mutual,
        pac_mutual2: mutual2,
        pac_telefono1: telefono1,
        pac_telefono2: telefono2,
        pac_fechanacimiento: fechanacimiento,
        pac_correo: correo,
        pac_direccion: direccion,
        pac_barrio: barrio
    }
    try {
        console.log(JSON.stringify(post));
        fetch(ruta,{
        method:metodo,
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json"
        }
        }).then(res=>res.json())
        .then(data=>console.log(data))
        console.log(nuevo)        

    } catch (error) {
        swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
    }
        if (nuevo==1) {
            swal("Paciente Registrado","Paciente Registrado con Éxito!","success")
                .then((value) => {
                        location.href ="../buscarpaciente"
                    })
        }
        else {
            swal("Paciente Actualizado","Paciente "+pac_nrohc+" Actualizado con Éxito!","success")
                .then((value) => {
                        location.href ="../buscarpaciente"})
        }   
    }
}

function validarDatos(){
    var incompleto = false;
    var correccion = "Datos incompletos o inválidos: " + "\n";
    var correo= document.getElementById("correo__paciente").value;

    if(document.getElementById("documento__paciente").value == "")
    {
        correccion = correccion + "*Documento" + "\n"
        incompleto = true;
    }

    if(document.getElementById("mutual__paciente").value == "")
    {
        correccion = correccion + "*Mutual" + "\n"
        incompleto = true;
    }

    if(document.getElementById("direccion__paciente").value == "")
    {
        correccion = correccion + "*Dirección" + "\n"
        incompleto = true;
    }

    if(document.getElementById("apellido__paciente").value == "")
    {
        correccion = correccion + "*Apellido" + "\n"
        incompleto = true;
    }
    if(document.getElementById("nombre__paciente").value == "")
    {
        correccion = correccion + "*Nombre" + "\n"
        incompleto = true;
    }
    if(document.getElementById("celular__paciente").value == "")
    {
        correccion = correccion + "*Celular" + "\n"
        incompleto = true;
    }
    if(document.getElementById("correo__paciente").value == "" || !(correo.includes("@")))
    {
        correccion = correccion + "*Correo" + "\n"
        incompleto = true;
    }
    if(document.getElementById("fechaNac__paciente").value == "")
    {
        correccion = correccion + "*Fecha Nacimiento" + "\n"
        incompleto = true;
    }

    if(incompleto == true){
        swal("Atención",correccion,"warning" );
        return false;
    }
    else{
        
    }
    
}
