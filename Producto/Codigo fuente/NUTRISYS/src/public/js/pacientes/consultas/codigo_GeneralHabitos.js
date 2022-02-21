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

//-------------------------------------------NAVEGABILIDAD----------------------------------------------------------


//-------------------------------------------FIN NAVEGABILIDAD----------------------------------------------------------


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

if (modo.toLowerCase()==='consulta/registrarconsultahabitos/hc='+pac_nrohc+"/trn="+cons_idturno){
    nuevo=1;
    console.log(nuevo)
}else{
    nuevo=0;
    console.log(nuevo)
}
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
    document.getElementById('pac_datos').innerHTML = cabecera
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
        location.href ="/consulta/registrarconsultahabitos/hc="+pac_nrohc+"/trn="+cons_idturno
     }
    //   if (nuevo==1 && habpac_id != null) {
    //     location.href ="/consulta/modificarconsultahabitos/hc="+pac_nrohc+"/trn="+cons_idturno
    // } 
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
habpac_id = pachab.habpac_id +1
console.log(habpac_id)
}}

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//FUNCIONES

//------------------------------------------------------------------------------------------------------------------------------
//REGISTRAR/ACTUALIZAR
function registrarhabitos() {
    var sel = document.getElementById("bootstrap-duallistbox-selected-list_duallistbox_demo1[]"); 
    if (sel.length>0){
        //REGISTRAR NUEVOS HABITOS
        if (nuevo==1) {
            //Cabecera Habitos
            const post = {
                habpac_nrohc: pac_nrohc,
                habpac_observaciones: '',
                habpac_idconsulta: hab_idconsulta
            }
            console.log(post)
             try {
                console.log(JSON.stringify(post));
                fetch("http://localhost:3000/cabecerahabitos",{
                method:"POST",
                body: JSON.stringify(post),
                headers: {
                "Content-type": "application/json"
                }
                })  .then(res=>res.json())
                    .then(data=>console.log(data))
            } catch (error) {
                swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
                console.log(error)
                } 
            
            //Detalle Habitos
            for (var i = 0; i < sel.length; i++) {
                const post = {
                    dhabpac_id: habpac_id,
                    dhabpac_idhabito: sel[i].value,
                    dhabpac_observaciones: sel[i].text 
                }
                console.log(post)

                 try {
                    console.log(JSON.stringify(post));
                    fetch("http://localhost:3000/detallehabitos",{
                        method:"POST",
                        body: JSON.stringify(post),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })  .then(res=>res.json())
                        .then(data=>console.log(data))
                } catch (error) {
                    swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
                    console.log(error)
                } 
            }
            location.href ="/consulta/registrarconsultahabitospactados/hc="+pac_nrohc+"/"+"trn="+cons_idturno
        }else{
        //ACTUALIZAR HABITOS
        try {
            fetch("http://localhost:3000/borrardetallehabito/"+habpac_id,{
            method:"DELETE"
            })  .then(res=>res.json())
        } catch (error) {
            swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
            console.log(error)
            } 
            for (var i = 0; i < sel.length; i++) {
                const post = {
                    dhabpac_id: habpac_id,
                    dhabpac_idhabito: sel[i].value,
                    dhabpac_observaciones: sel[i].text 
                }
                console.log(post)

                 try {
                    console.log(JSON.stringify(post));
                    fetch("http://localhost:3000/detallehabitos",{
                        method:"POST",
                        body: JSON.stringify(post),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })  .then(res=>res.json())
                        .then(data=>console.log(data))
                } catch (error) {
                    swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
                    console.log(error)
                } 
            }
            location.href ="/consulta/registrarconsultahabitospactados/hc="+pac_nrohc+"/"+"trn="+cons_idturno
        }  
    }else{
        swal("Atención","Debe seleccionar al menos un hábito de la grilla.","warning" )
    }
}

//------------------------------------------------------------------------------------------------------------------------------
//REGISTRAR NUEVO HABITO
function nuevoHabito(){
    document.getElementById('nuevoHabito').hidden = false;
    document.getElementById('Aceptar').hidden = false;
    document.getElementById('Cancelar').hidden = false;
}
function añadirHabito(id){
    console.log(id)
    if (id == 'Aceptar')
    {
        console.log(id)

        if (document.getElementById('nuevoHabito').value=='') {
            swal("Atención","Debe ingresar un nuevo Habito.","warning" )
        }else{
            let quhab = 'http://localhost:3000/ultimohabito'
            fetch(quhab)
                .then(response => response.json())
                .then(data => ultimohabito(data))
                .catch(error => console.log(error))
            const ultimohabito = (data) => {
            console.log(data)
            id_hab=data.id_hab+1
            let habito = document.getElementById('nuevoHabito').value
            console.log(habito)
            const nuevohabito = {
                hab_descripcion: habito
            }
            try {
                console.log(JSON.stringify(nuevohabito));
                fetch("http://localhost:3000/habitos",{
                method:"POST",
                body: JSON.stringify(nuevohabito),
                headers: {
                    "Content-type": "application/json"
                }
                }).then(res=>res.json())
                .then(data=>console.log(data))        
            } catch (error) {
                swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
            }
            document.getElementById('nuevoHabito').value = '';
            document.getElementById('nuevoHabito').hidden = true;
            document.getElementById('Aceptar').hidden = true;
            document.getElementById('Cancelar').hidden = true;
            console.log(habito)
            agregaritem(habito,id_hab)
        }}
    }else   {
        document.getElementById('nuevoHabito').value = '';
        document.getElementById('nuevoHabito').hidden = true;
        document.getElementById('Aceptar').hidden = true;
        document.getElementById('Cancelar').hidden = true;
    }  
}

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
function consultaGeneral() {
    swal({
        title: "Atención",
        text: "Si avanza a Consulta General, no se guardarán los datos seleccionados",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            location.href ="/consulta/modificaconsulta/hc="+pac_nrohc+"/trn="+cons_idturno
        } 
      }); 
  }
  function habitosPactados() {
    swal({
        title: "Atención",
        text: "Si avanza a Habitos Pactados, no se guardarán los datos seleccionados",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            location.href ="/consulta/registrarconsultahabitospactados/hc="+pac_nrohc+"/trn="+cons_idturno
        } 
      }); 
  }
function pacto() {
    if (nuevo==1) {
        swal("Atención","Debe Completar el Registro de Hábitos para determinar los que serán trabajados","error")
        return false
    }else{
        location.href ="/consulta/registrarHabitosPactado/hc="+pac_nrohc+"/trn="+cons_idturno
    }
    
}