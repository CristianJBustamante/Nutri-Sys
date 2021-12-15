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
  timer: 500,
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

const url = new String(window.location)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,url.length)
consid = url.substr(url.indexOf("cns=")+4,(url.indexOf("/hc="),url.indexOf("cns=")+4,(url.indexOf("/hc="))-(url.indexOf("cns=")+4)))
console.log(pac_nrohc,consid)
let query = 'http://localhost:3000/paciente/'+pac_nrohc
fetch(query)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

//Cargar cabecera
const mostrarData = (data) => {
    console.log(data) 
    let solapas=''
    solapas=`<a class="nav__solapa"  href="/pacientes/consultapacientefichainicial/hc=${data.pac_nrohc}">Ficha Inicial</a>
    <a class="nav__solapa" href="/pacientes/consultapaciente/hc=${data.pac_nrohc}">Resumen</a>
    <a class="nav__solapa" href="/pacientes/consultapacientehabitos/hc=${data.pac_nrohc}">Hábitos</a>
    <a class="nav__solapa--seleccionado" href="/pacientes/consultapacienteplan/hc=${data.pac_nrohc}">Evoluciones</a>
    <a class="nav__solapa" href="/pacientes/consultapacientefichas/hc=${data.pac_nrohc}">Gráficos</a>
    <a class="nav__solapa" href="">Documentos</a>
    <a class="nav__solapa" href="">Estudios</a>
    <a class="nav__solapa--resto"></a>`        
    document.getElementById('solapas').innerHTML = solapas  
    let cabecera =''
    cabecera += `<h2>Paciente: ${data.pac_apellido}, ${data.pac_nombre}</h2><h2>HC: ${data.pac_nrohc}</h2><h2>DOC.: ${data.pac_nrodoc}</h2><h2>FN: ${data.pac_fechanac}</h2>`        
    document.getElementById('pac_datos').innerHTML = cabecera
  
    }

fetch("/consultapaciente/"+consid)
        .then(response => response.json())
        .then(data => mostrarconsulta(data))
        .catch(error => console.log(error))

//Cargar cabecera
const mostrarconsulta = (data) => {
  document.getElementById('edad__paciente').value=data.cons_edad
  document.getElementById('cons_CCM').value=data.cons_CCM
  document.getElementById('cons_CCU').value=data.cons_CCU
  document.getElementById('cons_CCP').value=data.cons_CCP
  document.getElementById('cons_peso').value=data.cons_peso
  document.getElementById('cons_IMC').value=data.cons_IMC
  document.getElementById('cons_talla').value=data.cons_talla
  document.getElementById('cons_GC').value=data.cons_GC
  document.getElementById('cons_M').value=data.cons_M
  document.getElementById('cons_GV').value=data.cons_GV
  document.getElementById('cons_PBI').value=data.cons_PBI
  document.getElementById('cons_observaciones').value=data.cons_observaciones











  
}