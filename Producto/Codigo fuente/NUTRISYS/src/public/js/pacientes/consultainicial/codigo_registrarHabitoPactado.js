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

if (modo=='consulta/registrarHabitosPactado/hc='+pac_nrohc+"/trn="+cons_idturno){
    nuevo=1;
}else{
    nuevo=0;
}
console.log(nuevo)
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
//BUSCAR ID CONSULTA
let qcons = 'http://localhost:3000/consulta/'+cons_idturno
fetch(qcons)
    .then(response => response.json())
    .then(data => buscarconsulta(data))
    .catch(error => console.log(error))
const buscarconsulta = (data) => {
    console.log(data)
    legajo = data.turno_legajoempleado
    console.log(legajo)

     hab_idconsulta = data.cons_id 
     if (habpac_id==0) {
        habpac_id = data.habpac_id
     }
     console.log(hab_idconsulta,habpac_id)
     if (nuevo==0 && habpac_id == null) {
         //location.href ="/consulta/registrarhabitos/hc="+pac_nrohc+"/trn="+cons_idturno
     }
     /* if (nuevo==1 && habpac_id != null) {
        location.href ="/consulta/actualizarhabitos/hc="+pac_nrohc+"/trn="+cons_idturno
    } */ 
}
//------------------------------------------------------------------------------------------------------------------------------
//BUSCAR ID HABITO PARA REGISTRAR
if (nuevo==1) {
    let query = 'http://localhost:3000/idultimohabpac'
fetch(query)
    .then(response => response.json())
    .then(pachab => registrardetalle(pachab))
    .catch(error => console.log(error))
const registrardetalle = (pachab) => {
console.log(pachab)
habpac_id = pachab.habpac_id
console.log(habpac_id)
}}

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//FUNCIONES
function validarFecha(){
  var userinput = document.getElementById("fechapacto").value;
  var dob = new Date(userinput);
    if(userinput==null || userinput=='' || dob.getTime() < Date.now()) {
      alert("Coloque una fecha correcta");  
      document.getElementById("fechapacto").value='';
      return false; 
    } 
}
//------------------------------------------------------------------------------------------------------------------------------
//REGISTRAR/ACTUALIZAR
function registrarhabitos() {
    var sel = document.getElementById("bootstrap-duallistbox-selected-list_duallistbox_demo1[]"); 
    if (sel.length>0){
        //REGISTRAR NUEVOS HABITOS
        if (nuevo==1) { 
            //Cabecera
            const pacto = {
                habpac_fechatope: document.getElementById('fechapacto').value,
                habpac_observaciones: document.getElementById('cons_observaciones').value
            }
            console.log(pacto)
            try {
                fetch("/cabecerahabpactado/"+habpac_id,{
                method:"PUT",
                body: JSON.stringify(pacto),
                headers: {
                    "Content-type": "application/json"
                }
                }).then(res=>res.json())
                .then(data=>console.log(data))        
                
            } catch (error) {
                swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
                    console.log(error)
            }
            
            
            //Detalle Habitos
            for (var i = 0; i < sel.length; i++) {
                
                 try {
                     fetch("http://localhost:3000/registrarhabitopactado/"+habpac_id+"/"+sel[i].value,{
                         method:"PUT"
                     })  .then(res=>res.json())
                         .then(data=>console.log(data))
                } catch (error) {
                    swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
                    console.log(error)
                } 
            }
             swal("Consulta Registrada","Consulta del Paciente "+pac_nrohc+" Registrada con Éxito!","success")
                  .then((value) => {
                     location.href ="/turnos/leg="+legajo}) 
        }
    }
}

//------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------
//AGREGAR ITEM A GRILLA
function agregaritem(hab,idhab){
    const $select = document.querySelector("#duallist");
    const option = document.createElement('option');
    option.selected = "selected"
    option.value = idhab
    option.text = hab;
    $select.appendChild(option);       
    var demo1 = $('select[name="duallistbox_demo1[]"]').bootstrapDualListbox({infoTextFiltered: '<span class="label label-purple label-lg">Filtered</span>'});
    demo1.bootstrapDualListbox('refresh')
}

//------------------------------------------------------------------------------------------------------------------------------
//PASAR PESTAÑAS
function fichainicial() {
    swal({
        title: "Atención",
        text: "Si retorna a Ficha inicial, no se guardarán los datos seleccionados",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            location.href ="/consulta/actualizarfichainicial/hc="+pac_nrohc+"/trn="+cons_idturno
        } 
      }); 
}
function anamnesis() {
    swal({
        title: "Atención",
        text: "Si avanza a Anamnesis, no se guardarán los datos seleccionados",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            location.href ="/consulta/actualizaranamnesis/hc="+pac_nrohc+"/trn="+cons_idturno
        } 
      });
    
}
function habitos() {
    swal({
        title: "Atención",
        text: "Si avanza a Habitos, no se guardarán los datos seleccionados",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            location.href ="/consulta/actualizarhabitos/hc="+pac_nrohc+"/trn="+cons_idturno
        } 
      });
    
}