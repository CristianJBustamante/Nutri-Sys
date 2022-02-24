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
    location.href='/home'
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

//BUSCAR ID ULTIMO PLAN
let idultimoplan
fetch("/ultimoplan")
          .then(response => response.json())
          .then(data => ultimoplan(data))
          .catch(error => console.log(error))
  const ultimoplan = (data) => {
    if (data.length>0) {
      idultimoplan=data[0].plan_id
      console.log(idultimoplan)
    }else{
      idultimoplan=1
      console.log(idultimoplan)

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
  let vigente = 0
  

    swal({
    title: "Atención",
    text: "Se registrará el Plan Alimentario para el Paciente "+ pac_nrohc + ", ¿Desea que sea el Plan Vigente?",
    icon: "warning",
    buttons: {
      cancel: "No",
      defeat: "Si",
    },
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      vigente=1
      //No vigentes
      const v = {
        plan_id: idultimoplan+1
      }
      try {
        fetch("/planesnovigentes/"+pac_nrohc,{
          method:"PUT",
          body: JSON.stringify(v),
          headers: {
            "Content-type": "application/json"
          }
        }).then(res=>res.json())
          .then(data=>console.log(data))        
    
      } catch (error) {
          swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
          console.log(error)
        }

      //Insertar Cabecera
      const plan = {
        plan_id: idultimoplan+1,
        plan_nrohc: pac_nrohc,
        plan_legajoprofesional: milegajo,
        plan_vigente: vigente
      }
      console.log(plan)
      try {
        fetch("/nuevoplanalimentario",{
          method:"POST",
          body: JSON.stringify(plan),
          headers: {
            "Content-type": "application/json"
          }
        }).then(res=>res.json())
          .then(data=>console.log(data))        
    
      } catch (error) {
          swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
          console.log(error)
        }
      //Insertar Detalle
      for (let i = 1; i<36; i++){
        let titulo=''
        let descripcion=''
        var comidaDatos = document.getElementById('comida'+i);
        if(comidaDatos.firstChild.innerText != undefined){
          titulo = comidaDatos.firstChild.innerText;
        } 
        if(comidaDatos.lastChild.innerText != undefined){
          descripcion = comidaDatos.lastChild.innerText;
        }
        const detplan = {
          dplan_id: idultimoplan+1,
          dplan_detalle: 'comida'+i,
          dplan_titulo: titulo,
          dplan_descripcion: descripcion
        }  
        try {
          fetch("/nuevodetplanalimentario",{
            method:"POST",
            body: JSON.stringify(detplan),
            headers: {
              "Content-type": "application/json"
            }
          }).then(res=>res.json())
            .then(data=>console.log(data))        
      
        } catch (error) {
            swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
            console.log(error)
          }
      }
      swal("Plan Registrado","Se registró el Plan Vigente del Paciente "+pac_nrohc,"success")
                .then((value) => {
                        location.href ="/pacientes/buscarplanes/hc="+pac_nrohc
                      })

    }else{
      //Insertar Cabecera
      const plan = {
        plan_id: idultimoplan+1,
        plan_nrohc: pac_nrohc,
        plan_legajoprofesional: milegajo,
        plan_vigente: vigente
      }
      try {
        fetch("/nuevoplanalimentario",{
          method:"POST",
          body: JSON.stringify(plan),
          headers: {
            "Content-type": "application/json"
          }
        }).then(res=>res.json())
          .then(data=>console.log(data))        
    
      } catch (error) {
          swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
          console.log(error)
        }
      //Insertar Detalle
      for (let i = 1; i<36; i++){
        let titulo=''
        let descripcion=''
        var comidaDatos = document.getElementById('comida'+i);
        if(comidaDatos.firstChild.innerText != undefined){
          titulo = comidaDatos.firstChild.innerText;
        } 
        if(comidaDatos.lastChild.innerText != undefined){
          descripcion = comidaDatos.lastChild.innerText;
        }
        const detplan = {
          dplan_id: idultimoplan+1,
          dplan_detalle: 'comida'+i,
          dplan_titulo: titulo,
          dplan_descripcion: descripcion
        }  
        try {
          fetch("/nuevodetplanalimentario",{
            method:"POST",
            body: JSON.stringify(detplan),
            headers: {
              "Content-type": "application/json"
            }
          }).then(res=>res.json())
            .then(data=>console.log(data))        
      
        } catch (error) {
            swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
            console.log(error)
          }
      }
      swal("Plan Registrado","Se registró el Plan No Vigente del Paciente "+pac_nrohc,"success")
                .then((value) => {
                        location.href ="/pacientes/buscarplanes/hc="+pac_nrohc
                      })
    }
  })
  
}


