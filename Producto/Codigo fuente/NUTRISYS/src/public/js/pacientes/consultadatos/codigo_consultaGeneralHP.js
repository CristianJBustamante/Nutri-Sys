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
}
//-------------------------------------------FIN PERMISOS----------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

var nuevo
var pac_nrohc
var url
var cons_idturno
var modo
var hab_idconsulta
var habpac_id =0
var legajo

//DEFINIR SI ACTUALIZA O REGISTRA
url = new String(window.location) 
pac_nrohc = url.substr(url.indexOf("hc=")+3,(url.indexOf("/trn="),url.indexOf("hc=")+3,(url.indexOf("/trn="))-(url.indexOf("hc=")+3)))
cons_idturno = url.substr(url.indexOf("trn=")+4,url.length)
modo = url.substr(url.indexOf("consulta/"),url.length)
console.log('Url='+url)
if (modo=='consulta/consultaHabitos/hc='+pac_nrohc+"/trn="+cons_idturno){
    nuevo=1;
}else{
    nuevo=0;
}
console.log('Estado: '+nuevo)
console.log('Turno: '+cons_idturno)

//-----------------------------------------------------------------------------------------------------------------------------
//BUSCAR DATOS DEL PACIENTE
let query = 'http://localhost:3000/paciente/'+pac_nrohc
fetch(query)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
const mostrarData = (data) => {
    console.log(data)   
    let cabecera =''
    cabecera += `<h2>Paciente: ${data.pac_apellido}, ${data.pac_nombre}</h2><h2>HC: ${data.pac_nrohc}</h2><h2>DOC.: ${data.pac_nrodoc}</h2><h2>FN: ${data.pac_fechanac}</h2>`        
    //document.getElementById('pac_datos').innerHTML = cabecera
    }

//------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------Navegabilidad--------------------------------------------------------
function fichaInicial() {
  location.href ="/pacientes/consultapacientefichainicial/hc="+pac_nrohc
}
function resumen() {
  location.href ="/pacientes/consultapaciente/hc="+pac_nrohc
}
function habitos() {
  location.href ="/pacientes/consultapacientehabitos/hc="+pac_nrohc
}
function evolucion() {
  location.href ="/pacientes/buscarconsultaspaciente/hc="+pac_nrohc
}
function graficos() {
  location.href ="/pacientes/graficospaciente/hc="+pac_nrohc
}
function planes() {
  location.href ="/pacientes/buscarplanes/hc="+pac_nrohc
}