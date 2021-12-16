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

//--------------------------------------------Navegabilidad--------------------------------------------------------
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
          location.href ="/consulta/registrarconsultahabitos/hc="+pac_nrohc+"/trn="+cons_idturno
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

//--------------------------------------------Fin Navegabilidad--------------------------------------------------------
var metodo=''
//Get nrohc
const url = new String(window.location)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,(url.indexOf("/trn="),url.indexOf("hc=")+3,(url.indexOf("/trn="))-(url.indexOf("hc=")+3)))
let cons_idturno = url.substr(url.indexOf("trn=")+4,url.length)


//Buscar legajo
let qcons = 'http://localhost:3000/turno/'+cons_idturno
console.log(qcons)
fetch(qcons)
    .then(response => response.json())
    .then(data => buscarconsulta(data))
    .catch(error => console.log(error))
const buscarconsulta = (data) => {
    console.log(data)
    legajo = data.turno_legajoempleado
    console.log(legajo)
    }

//Buscar datos personales del nrohc
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
    calcularEdad(data.pac_fechanacimiento)
    }


    function calcularEdad(fnac){
        var userinput = fnac;
        var dob = new Date(userinput);
        //calculate month difference from current date in time
        var month_diff = Date.now() - dob.getTime();
        
        //convert the calculated difference in date format
        var age_dt = new Date(month_diff); 
        
        //extract year from date    
        var year = age_dt.getUTCFullYear();
        
        //now calculate the age of the user
        var age = Math.abs(year - 1970);
        
        //display the calculated age
        return document.getElementById("edad__paciente").value =  age ;

    }
    
    function registrarPaciente(){
        var cons_edad = parseFloat(document.getElementById("edad__paciente").value);
        var cons_peso = parseFloat(document.getElementById("cons_peso").value);
        var cons_talla =  parseFloat(document.getElementById("cons_talla").value);
        var cons_CCM = parseFloat(document.getElementById("cons_CCM").value);
        var cons_CCU = parseFloat(document.getElementById("cons_CCU").value);
        var cons_CCP = parseFloat(document.getElementById("cons_CCP").value);
        var cons_IMC = parseFloat(document.getElementById("cons_IMC").value);
        var cons_GC = parseFloat(document.getElementById("cons_GC").value);
        var cons_GV = parseFloat(document.getElementById("cons_GV").value);
        var cons_M = parseFloat(document.getElementById("cons_M").value);
        var cons_PBI = parseFloat(document.getElementById("cons_PBI").value);
        var cons_observaciones = (document.getElementById("cons_observaciones").value);

        const post2 = {
            turno_idestado: 5}
         try {
            console.log(JSON.stringify(post2));
            fetch("http://localhost:3000/actualizarturno/"+cons_idturno,{
            method:"PUT",
            body: JSON.stringify(post2),
            headers: {
            "Content-type": "application/json"
            }
            })  .then(res=>res.json())
                .then(data=>console.log(data))
        } catch (error) {
            swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
            console.log(error)
            } 

        const post = {
            cons_idturno: cons_idturno,
            cons_observaciones: cons_observaciones,
            cons_edad: cons_edad,
            cons_peso: cons_peso,
            cons_talla: cons_talla,
            cons_CCM: cons_CCM,
            cons_CCU: cons_CCU,
            cons_CCP: cons_CCP,
            cons_IMC: cons_IMC,
            cons_GC: cons_GC,
            cons_GV: cons_GV,
            cons_M: cons_M,
            cons_PBI: cons_PBI,
        }
        try {
            console.log(JSON.stringify(post));
            fetch("http://localhost:3000/nuevaconsulta",{
            method:"POST",
            body: JSON.stringify(post),
            headers: {
                "Content-type": "application/json"
            }
            }).then(res=>res.json())
            .then(data=>console.log(data))
            
                swal("Consulta Registrada","Consulta del Paciente "+pac_nrohc+" Registrada con Éxito!","success")
                    .then((value) => {
                            location.href ="/consulta/registrarconsultahabitos/hc="+pac_nrohc+"/trn="+cons_idturno})
          
    
        } catch (error) {
            swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
            console.log(error)
        }

        
        
         
          
        }
        
        function calcularbmi(){
            var peso = document.getElementById("cons_peso").value;
            var talla = document.getElementById("cons_talla").value;    
            if(peso==null || peso=='' || talla==null || talla=='') {
                document.getElementById("cons_IMC").value = ''
                return false; 
            } 
            else {
                var bmi = peso / (talla*talla)
                }
                return document.getElementById("cons_IMC").value =  bmi;
        
            
        }
    