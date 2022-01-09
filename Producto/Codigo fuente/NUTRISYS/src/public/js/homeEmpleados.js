//--------------------------------------------PERMISOS-----------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
var s = (document.getElementById("user").href)
let milegajo = s.substr(s.indexOf("leg=")+4,s.length)
var admin
var profesional
var recepcionista
console.log(milegajo)
var url
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
}, 500)

swal({
    text:"Ingresando...",
    icon: "https://thumbs.gfycat.com/NecessaryEvilGuillemot-max-1mb.gif",
    buttons: false,      
    closeOnClickOutside: false,
    timer: 1000,
    //icon: "success"
  }).then((value) => {})
})


function buscarperfiles() {
  url='http://localhost:3000/permiso/'+milegajo+'/1'
  fetch(url)
          .then(response => response.json())
          .then(data => permisoadmin(data))
          .catch(error => console.log(error))
  const permisoadmin = (data) => {
        admin=data}

  url='http://localhost:3000/permiso/'+milegajo+'/2'
  fetch(url)
          .then(response => response.json())
          .then(data => permisoprofesional(data))
          .catch(error => console.log(error))  
  const permisoprofesional = (data) => {
        profesional=data}

  url='http://localhost:3000/permiso/'+milegajo+'/3'
  fetch(url)
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

buscarSaludo();

function buscarSaludo(){
    var today = new Date();
    var time = today.getHours();
    var saludo = document.getElementById("saludo_bienvenida");

    if(time < 6 || time >= 20){
        saludo.innerHTML = "Buenas noches"; 
    }
    else{
        if(time > 6 && time < 12 ){
            saludo.innerHTML = "Buenos días";
        }
        else{
            saludo.innerHTML = "Buenas tardes";
        }
    }
    
}

