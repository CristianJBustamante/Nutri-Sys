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
  redirigirporpermiso('/pacientes/buscarpaciente',[],admin) 
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
    document.getElementById('organizador').style="display:none"
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

function buscarEmpleado(){
    let emp_legajo = document.getElementById("emp_legajo").value;
    let emp_nrodoc = document.getElementById("emp_nrodoc").value;
    let emp_apellido = document.getElementById("emp_apellido").value;
    let url = 'http://localhost:3000/empleado/'
    if (emp_legajo=='' & emp_nrodoc=='' & emp_apellido=='')  {
      url=url;
    }
    if (emp_legajo!='' & emp_nrodoc=='' & emp_apellido=='')  {
      url=url+'leg='+emp_legajo;
    }
    if (emp_legajo=='' & emp_nrodoc!='' & emp_apellido=='')  {
      url=url+'doc='+emp_nrodoc;
    }
    if (emp_legajo=='' & emp_nrodoc=='' & emp_apellido!='')  {
      url=url+'ap='+emp_apellido;
    }
    if (emp_legajo!='' & emp_nrodoc!='' & emp_apellido!='')  {
      url=url+'leg='+emp_legajo+'/ap='+emp_apellido+'/doc='+emp_nrodoc;
    }
    if (emp_legajo!='' & emp_nrodoc!='' & emp_apellido=='')  {
      url=url+'leg='+emp_legajo+'/doc='+emp_nrodoc;
    }
    if (emp_legajo!='' & emp_nrodoc=='' & emp_apellido!='')  {
      url=url+'leg='+emp_legajo+'/ap='+emp_apellido;
    }
    if (emp_legajo=='' & emp_nrodoc!='' & emp_apellido!='')  {
      url=url+'/ap='+emp_apellido+'/doc='+emp_nrodoc;
    }
      fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

      const mostrarData = (data) => {
        if (data.length==0){
          swal("Atención","No se encontraron Empleados","warning")
          limpiar()
        }
        
        console.log(data)
        
        let body =''
        for (let i = 0; i<data.length; i++){
          body += `<tr onclick="seleccionarEmpleado(${data[i].emp_legajo})"><td class="td__width--L" scope="row">${data[i].emp_legajo}</td><td class="td__width--A" >${data[i].emp_apellido}</td><td class="td__width--N" >${data[i].emp_nombre}</td><td class="td__width--D" >${data[i].emp_nrodoc}</td><td class="td__width--C" >${data[i].usu_correo}</td></tr>`
        }

        document.getElementById('data').innerHTML = body
      }
}


function crearEmpleado(){
    location.href ="/usuarios/nuevousuario/"
}

function seleccionarEmpleado(emp_legajo) {
    location.href ="/usuarios/modificarusuario/leg="+emp_legajo
}

function limpiar() {
  document.getElementById("emp_legajo").value="";
  document.getElementById("emp_nrodoc").value="";
  document.getElementById("emp_apellido").value="";
}


