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
let query = '/paciente/'+pac_nrohc
fetch(query)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data) 
    let solapas=''
    solapas += `<a class="nav__solapa"  href="/pacientes/consultapacientefichainicial/hc=${data.pac_nrohc}">Ficha Inicial</a>
                <a class="nav__solapa" href="/pacientes/consultapaciente/hc=${data.pac_nrohc}">Resumen </a>
                <a class="nav__solapa--seleccionado" href="/pacientes/consultapacientehabitos/hc=${data.pac_nrohc}">Hábitos</a>
                <a class="nav__solapa" href="/pacientes/buscarconsultaspaciente/hc=${data.pac_nrohc}">Evoluciones</a>
                <a class="nav__solapa" href="/pacientes/graficospaciente/hc=${data.pac_nrohc}">Gráficos</a>
                <a class="nav__solapa" href="/pacientes/buscarplanes/hc=${data.pac_nrohc}">Planes</a>
                <a class="nav__solapa--resto"></a>`
    let cabecera =''
    document.getElementById('solapas').innerHTML = solapas
    cabecera += `<h2>Paciente: ${data.pac_apellido}, ${data.pac_nombre}</h2><h2>HC: ${data.pac_nrohc}</h2><h2>DOC.: ${data.pac_nrodoc}</h2><h2>FN: ${data.pac_fechanac}</h2>`        
    document.getElementById('pac_datos').innerHTML = cabecera
    }



//Consultar Habitos Por Fecha
var consultas
fetch('/consultapacientehabitos/'+pac_nrohc)
        .then(response => response.json())
        .then(data => buscarconsultas(data))
        .catch(error => console.log(error))

const buscarconsultas = (data) => {
  consultas=data
  console.log(consultas)
}

function buscarConsulta() {
  let fechadesde= document.getElementById("fechadesde").value
  let fechahasta= document.getElementById("fechahasta").value
  if (fechadesde!="" && fechahasta!="" && fechahasta<fechadesde) {
        fechadesde= document.getElementById("fechahasta").value
        fechahasta= document.getElementById("fechadesde").value
        document.getElementById("fechahasta").value = fechahasta
        document.getElementById("fechadesde").value = fechadesde
  }

  if( fechadesde == "" &&  fechahasta == "") {
    let body =''
        for (let i = 0; i<consultas.length; i++){
          console.log(fechahasta,consultas[i].fecha)
          body += `<tr onclick="seleccionarconsulta(${consultas[i].cons_id})"><td class="td__width--L" scope="row">${consultas[i].row_number}</td><td class="td__width--C" >${consultas[i].fecha}</td></tr>`
        }
        document.getElementById('data').innerHTML = body
  }

  if (fechadesde == "" &&  fechahasta != "") {
    let body =''
    for (let i = 0; i<consultas.length; i++){
      if(consultas[i].turno_fecha<=fechahasta){
        body += `<tr onclick="seleccionarconsulta(${consultas[i].cons_id})"><td class="td__width--L" scope="row">${consultas[i].row_number}</td><td class="td__width--C" >${consultas[i].fecha}</td></tr>`
      }
    }
    document.getElementById('data').innerHTML = body
  }

  if (fechadesde != "" &&  fechahasta == "") {
    let body =''
    for (let i = 0; i<consultas.length; i++){
      if(consultas[i].turno_fecha>=fechadesde){
        body += `<tr onclick="seleccionarconsulta(${consultas[i].cons_id})"><td class="td__width--L" scope="row">${consultas[i].row_number}</td><td class="td__width--C" >${consultas[i].fecha}</td></tr>`
      }
    }
    document.getElementById('data').innerHTML = body
  }

  if (fechadesde != "" &&  fechahasta != "") {
    let body =''
    for (let i = 0; i<consultas.length; i++){
      if(consultas[i].turno_fecha>=fechadesde && consultas[i].turno_fecha<=fechahasta){
        body += `<tr onclick="seleccionarconsulta(${consultas[i].cons_id})"><td class="td__width--L" scope="row">${consultas[i].row_number}</td><td class="td__width--C" >${consultas[i].fecha}</td></tr>`
      }
    }
    document.getElementById('data').innerHTML = body
  }
}

function seleccionarconsulta(id) {
  location.href ="/consulta/consultaHabitos/hc="+pac_nrohc+"/trn="+id
}
