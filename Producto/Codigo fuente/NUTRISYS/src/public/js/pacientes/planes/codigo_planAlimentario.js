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
    let cabecera =''
    cabecera += `<h2>Paciente: ${data.pac_apellido}, ${data.pac_nombre}</h2><h2>HC: ${data.pac_nrohc}</h2><h2>DOC.: ${data.pac_nrodoc}</h2><h2>FN: ${data.pac_fechanac}</h2>`        
    document.getElementById('pac_datos').innerHTML = cabecera
    }



var comida;
var titulo;
var descripcion;

let cerrar = document.querySelectorAll(".cerrar");
let abrir = document.querySelectorAll(".cta");
let modal = document.querySelectorAll(".modales")[0];
let modalC = document.querySelectorAll(".modales-container")[0];

abrir.forEach(item =>{
    item.addEventListener("click", function(e){
        e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modales-close");
        traerDatosComida();
})
})

cerrar.forEach(item =>{
    item.addEventListener("click", function(e){
        modal.classList.toggle("modales-close");
        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 900);
})
})

window.addEventListener("click", function(e){
    if(e.target == modalC){
        modal.classList.toggle("modales-close");
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    }, 900);
    }
})

function comidaAEditar(comidaEditar){
    comida = comidaEditar;
}

function guardarComida(){
    // console.log(document.getElementById("tituloComida").value);
    // var nodo = "<h2>" + document.getElementById("tituloComida").value + "</h2>";
    // console.log(nodo);
    // document.getElementById(comida).appendChild(nodo);
    // document.getElementById(comida).innerHTML = nodo;

    var capa = document.getElementById(comida);
    var tituloComida = document.createElement("h3");
    var descripcionComida = document.createElement("h3");
    tituloComida.innerHTML = document.getElementById("tituloComida").value;
    descripcionComida.innerHTML = document.getElementById("descripcionComida").value;
    descripcionComida.style.display = "none";
    capa.innerHTML = "";
    capa.appendChild(tituloComida);
    capa.appendChild(descripcionComida);
}

function traerDatosComida(){
    var comidaDatos = document.getElementById(comida);
    var tbxTitulo = document.getElementById("tituloComida");
    var tbxDescripcion = document.getElementById("descripcionComida");
    tbxTitulo.value="";
    tbxDescripcion.value="";
    // console.log(comidaDatos.firstChild.innerText);
    // console.log(comidaDatos.lastChild.innerText);
    if(comidaDatos.firstChild.innerText != undefined){
        tbxTitulo.value = comidaDatos.firstChild.innerText;
    }
    if(comidaDatos.lastChild.innerText != undefined){
        tbxDescripcion.value = comidaDatos.lastChild.innerText;
    }
}

function registrarPlan(){
    alert("Plan registrado correctamente!.");
}