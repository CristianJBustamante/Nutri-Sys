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