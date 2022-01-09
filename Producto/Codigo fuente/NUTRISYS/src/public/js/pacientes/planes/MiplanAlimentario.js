swal({
    text:"Ingresando...",
    icon: "https://thumbs.gfycat.com/NecessaryEvilGuillemot-max-1mb.gif",
    buttons: false,      
    closeOnClickOutside: false,
    timer: 1000,
    //icon: "success"
  }).then((value) => {})


const url = new String(window.location)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,url.length)
var s = (document.getElementById("user").href)
let mihc = s.substr(s.indexOf("hc=")+3,s.length)
if (pac_nrohc!=mihc) {  
    location.href = '/miPlanAlimentario/hc='+mihc

}
fetch("/planvigentepaciente/"+pac_nrohc)
    .then(response => response.json())
    .then(data => mostrarplan(data))
    .catch(error => console.log(error))

//Cargar cabecera
const mostrarplan = (data) => {
    if (data.length==0) {
        swal("Plan No Encontrado","No tiene un Plan Alimentario Vigente Registrado","warning")
                .then((value) => {
                        location.href ="/home"})
    }
  for (let i = 0; i<data.length; i++){
    var capa = document.getElementById(data[i].dplan_detalle);
    var tituloComida = document.createElement("h3");
    var descripcionComida = document.createElement("h3");
    tituloComida.innerHTML = data[i].dplan_titulo
    descripcionComida.innerHTML = data[i].dplan_descripcion
    descripcionComida.style.display = "none";
    capa.innerHTML = "";
    capa.appendChild(tituloComida);
    capa.appendChild(descripcionComida);
  }
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

