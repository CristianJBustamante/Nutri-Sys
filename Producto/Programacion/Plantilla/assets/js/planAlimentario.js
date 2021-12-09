
let cerrar = document.querySelectorAll(".cerrar")[0];
let abrir = document.querySelectorAll(".cta");
let modal = document.querySelectorAll(".modales")[0];
let modalC = document.querySelectorAll(".modales-container")[0];

abrir.forEach(item =>{
    item.addEventListener("click", function(e){
        e.preventDefault();
        console.log("OK");
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modales-close");
})
})

cerrar.addEventListener("click",function(e){
    modal.classList.toggle("modales-close");
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    }, 900);
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