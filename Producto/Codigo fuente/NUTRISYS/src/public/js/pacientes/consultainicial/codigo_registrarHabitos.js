//Get nrohc
const url = new String(window.location)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,url.length)
let modo = url.substr(url.indexOf("consulta/"),url.length)
var nuevo=0
var metodo=''
var ruta=''
if (modo=="consulta/registrarHabitos/hc="+pac_nrohc) {
    nuevo=1;
    metodo='POST'
    ruta="http://localhost:3000/registrarHabitos"
}
else{
    nuevo=0;
    metodo='PUT'
    ruta="http://localhost:3000/actualizarHabitos"+pac_nrohc
    }


//Cargar pagina según modo
if (nuevo==1) {
    let cabecera =''
    cabecera += `Habitos No Saludable`        
    document.getElementById('subTituloModo').innerHTML = cabecera
} else {
    let cabecera =''
    cabecera += `Modificar Habitos No Saludables`        
    document.getElementById('subTituloModo').innerHTML = cabecera
    let query = 'http://localhost:3000/consulta/registrarHabitos/'+pac_nrohc
    fetch(query)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
    const mostrarData = (data) => {
        //REVISAR
        console.log(data)
        document.getElementById("hab_descripcion").value = data.hab_descripcion;
        document.getElementById("habpac_fecharegistro").value = data.habpac_fecharegistro;
        document.getElementById("habpac_observaciones").value = data.habpac_observaciones;
        document.getElementById("dhabpac_realiza").checked = data.dhabpac_realiza;
        document.getElementById("habpac_observaciones").checked = data.habpac_observaciones;
        document.getElementById("habpac_observaciones").checked = data.habpac_observaciones;

    }
}

//Buscar datos personales del nrohc
let query = 'http://localhost:3000/paciente/'+pac_nrohc
fetch(query)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
const mostrarData = (data) => {
    console.log(data)   
    let cabecera =''
    cabecera += `<h2>Paciente: ${data.pac_apellido}, ${data.pac_nombre}</h2><h2>HC: ${data.pac_nrohc}</h2><h2>DOC.: ${data.pac_nrodoc}</h2><h2>FN: ${data.pac_fechanac}</h2>`        
    document.getElementById('pac_datos').innerHTML = cabecera
    }

//COMPLETAR
function crearHabitos(){
    if (validarDatos() == false) {
        return false;
    } 
    else {
    var habpac_nrohc = pac_nrohc;
    var hab_descripcion =       document.getElementById("hab_descripcion").value;
    var habpac_fecharegistro =  document.getElementById("habpac_fecharegistro").value;
    var habpac_observaciones =  document.getElementById("habpac_observaciones").value;
    //var habpac_idconsulta =             document.getElementById("habpac_idconsulta").value;
    var dhabpac_realiza =             document.getElementById("dhabpac_realiza").value;
    //var dhabpac_linea =             document.getElementById("dhabpac_linea").value;
    var dhabpac_idhabito =             document.getElementById("dhabpac_idhabito").value;

    const post = {
        habpac_nrohc: habpac_nrohc,
        hab_descripcion: hab_descripcion,
        habpac_fecharegistro: habpac_fecharegistro,
        habpac_observaciones: habpac_observaciones,
        //habpac_idconsulta: habpac_idconsulta,
        dhabpac_realiza: dhabpac_realiza,
        //dhabpac_linea: dhabpac_linea,
        dhabpac_idhabito: dhabpac_idhabito
    }
    console.log(post)
    try {
        console.log(JSON.stringify(post));
        fetch("http://localhost:3000/registrarHabitos",{
        method:'POST',
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json"
        }
        }).then(res=>res.json())
        .then(data=>console.log(data))
        swal("Ficha Registrada con Éxito",{
            icon: "success"}).then((value) => {
                location.href ="../../pacientes/buscarpaciente"})
    } catch (error) {
        swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
    }
    }
}


function validarDatos(){
    var incompleto = false;
    var correccion = "Datos incompletos: " + "\n";
    if(incompleto == true){
        alert(correccion);
        return false;
    }
}

window.addEventListener('load',onload);
