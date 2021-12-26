//--------------------------------------------PERMISOS-----------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
/* var s = (document.getElementById("user").href)
let milegajo = s.substr(s.indexOf("hc=")+3,s.length)
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
  redirigirporpermiso('/pacientes/buscarpaciente',[],profesional) 
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
  urls='/permiso/'+milegajo+'/1'
  fetch(urls)
          .then(response => response.json())
          .then(data => permisoadmin(data))
          .catch(error => console.log(error))
  const permisoadmin = (data) => {
        admin=data}

  urls='/permiso/'+milegajo+'/2'
  fetch(urls)
          .then(response => response.json())
          .then(data => permisoprofesional(data))
          .catch(error => console.log(error))  
  const permisoprofesional = (data) => {
        profesional=data}

  urls='/permiso/'+milegajo+'/3'
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
} */
//-------------------------------------------FIN PERMISOS----------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------


var verCancelados = false;
var pacientes



var hcs=[
    {hc:"1000", nombre:"Juan Carlos", apellido:"Altamiranda", doc:"37463213", celular:"3518132532"},
    {hc:"1001", nombre:"Pedro", apellido:"Sanchez", doc:"22321456", celular:"3512133213"},
    {hc:"1002", nombre:"Dario", apellido:"Vito", doc:"29384732", celular:"3513212341"}
    ];

//Get nrohc
//FALTA LA VALIDACIÓN DE QUE EL NRHC ES EL DEL USUARIO LOGUEADO
const url = new String(window.location)
let turno_nrohc = url.substr(url.indexOf("hc=")+3,url.length)
// if (emp_legajo!=milegajo) {
//     location.href="/turnos/leg="+milegajo
// }

function verTurnosCancelados(){
   
    const labelReferenciaCancelado = document.querySelector('#referenciaCancelado');
    const labelsTurnoCancelado = document.querySelectorAll('.label-turno-cancelado');
    if(!verCancelados){
        console.log('entra');
        labelReferenciaCancelado.hidden = false;
        verCancelados = true;
        labelsTurnoCancelado.forEach(function(label){
            label.classList.remove('invisible');
        })
    }
    else{
        console.log('sale');
        labelReferenciaCancelado.hidden = true;
        verCancelados = false;
        labelsTurnoCancelado.forEach(function(label){
            label.classList.add('invisible');
        })
    }
}

//GET PACIENTES
query = 'http://localhost:3000/pacientes'
fetch(query)
    .then(response => response.json())
    .then(data => getpacientes(data))
    .catch(error => console.log(error))
const getpacientes = (data) => {
    pacientes = data
}

function verificarPaciente(hc)
{
    //Consulta de Base de Datos
    var hcs=["1000","1001","1002"];
    if(hcs.includes(hc)){
        return true;
    }
    else{
        return false;
    }
}

function buscarNombrePaciente(titulo){
    var nombre;
    var hc = mostrarHC(titulo);

        const filtered = pacientes.filter(function(element){
            if(element.pac_nrohc == hc){
                console.log(element.pac_nombre);
                nombre = element.pac_nombre;
            }
          });
    
    return nombre;

}

function buscarApellidoPaciente(titulo){
    var apellido;
    var hc = mostrarHC(titulo);
        const filtered = pacientes.filter(function(element){
            if(element.pac_nrohc == hc){
                console.log(element.pac_apellido);
                apellido = element.pac_apellido;
            }
          });
    
    return apellido;

}

function buscarCelularPaciente(titulo){
    var celular;
    var hc = mostrarHC(titulo);
        const filtered = pacientes.filter(function(element){
            if(element.pac_nrohc == hc){
                console.log(element.pac_telefono1);
                celular = element.pac_telefono1;
            }
          });
    
    return celular;

}

function buscarDocPaciente(hc){
    var doc;

        const filtered = hcs.filter(function(element){
            if(element.hc == hc){
                console.log(element.doc);
                doc = element.doc;
            }
          });
    
    return doc;

}





function mostrarHC(title){
    var hc = title.split(" - ");
    if (hc[0].match(/^\d/)) {
        return hc[0];
     }
     else{
         return "";
     }
}

function mostrarDoc(title){
    var hc = title.split(" - ");
    if(hc[2] === undefined){
        return "";
    }
    else{
        return hc[2];
    }
    
}

// REVISAR SI SE PUEDE SACAR
// function validarDoc(doc){
//     var docs=["37463213","22321456","29384732"];
//     if(docs.includes(doc)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

function buscarHCPorDoc(doc){

    var hc;

        const filtered = hcs.filter(function(element){
            if(element.doc == doc){
                console.log("OK");
                hc = element.hc;
            }
          });
    
    return hc;
}



function buscarHorarioTurno(horario){
    var horarioCorto = horario.substr(11,18);
    return horarioCorto.substr(0,8);
}



