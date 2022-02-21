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
var metodo=''
var ruta
//Get nrohc
const url = new String(window.location)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,(url.indexOf("/trn="),url.indexOf("hc=")+3,(url.indexOf("/trn="))-(url.indexOf("hc=")+3)))
let cons_idturno = url.substr(url.indexOf("trn=")+4,url.length)
let modo = url.substr(url.indexOf("consulta/"),url.length)

if (modo.toLowerCase()==='consulta/registrarconsulta/hc='+pac_nrohc+'/trn='+cons_idturno){
  nuevo=1;
  metodo='POST'
  ruta="/nuevaconsulta"
}else{
  nuevo=0;
  metodo='PUT'
  ruta="/modificarconsultageneral/"+cons_idturno
}


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

//Buscar consulta si es modifica
fetch("/consultaarreglo/"+cons_idturno)
    .then(response => response.json())
    .then(data => mostrarconsulta(data))
    .catch(error => console.log(error))
    const mostrarconsulta = (data) => {
    if (data.length>0 && nuevo==1) {
      location.href ="/consulta/modificaconsulta/hc="+pac_nrohc+"/trn="+cons_idturno}
    if (data.length>0 && nuevo==0){
    data=data[0]
    console.log(data)
    document.getElementById('edad__paciente').value=data.cons_edad
    document.getElementById('cons_CCM').value=data.cons_CCM
    document.getElementById('cons_CCU').value=data.cons_CCU
    document.getElementById('cons_CCP').value=data.cons_CCP
    document.getElementById('cons_peso').value=data.cons_peso
    document.getElementById('cons_IMC').value=data.cons_IMC
    document.getElementById('cons_talla').value=data.cons_talla
    document.getElementById('cons_GC').value=data.cons_GC
    document.getElementById('cons_M').value=data.cons_M
    document.getElementById('cons_GV').value=data.cons_GV
    document.getElementById('cons_PBI').value=data.cons_PBI
    document.getElementById('cons_observaciones').value=data.cons_observaciones
    }
    if(data.length==0 && nuevo==0){
      location.href ="/consulta/registrarconsulta/hc="+pac_nrohc+"/trn="+cons_idturno
    }
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
    
    function validarDatos(){
      var incompleto = false;
      var correccion = "Datos incompletos o inválidos: " + "\n";
    
      //Valores Limite
      if(document.getElementById("cons_peso").value != '')
      {
        if(document.getElementById("cons_peso").value < 0 || document.getElementById("cons_peso").value > 250)
        {
          correccion = correccion + "*Peso" + "\n"
          document.getElementById("cons_peso").focus()
          incompleto = true;
        }
      }
    
      if(document.getElementById("cons_talla").value != '')
      {
        if(document.getElementById("cons_talla").value <= 0 || document.getElementById("cons_talla").value >= 3)
        {
          correccion = correccion + "*Talla " + "\n"
          document.getElementById("cons_talla").focus()
          incompleto = true;
        }
      }
      if(document.getElementById("cons_M").value != '')
      {
        if(document.getElementById("cons_M").value <= 0 || document.getElementById("cons_M").value > 100)
        {
          correccion = correccion + "*Masa Muscular " + "\n"
          document.getElementById("cons_M").focus()
          incompleto = true;
        }
      }
      if(document.getElementById("cons_PBI").value != '')
      {
        if(document.getElementById("cons_PBI").value < 0 || document.getElementById("cons_PBI").value > 250)
        {
          correccion = correccion + "*Peso con Bioimpedancia " + "\n"
          document.getElementById("cons_PBI").focus()
          incompleto = true;
        }
      }
      if(document.getElementById("cons_CCM").value != '')
      {
        if(document.getElementById("cons_CCM").value <= 0 || document.getElementById("cons_CCM").value >= 250)
        {
          correccion = correccion + "*Cm Marcada " + "\n"
          document.getElementById("cons_CCM").focus()
          incompleto = true;
        }
      }
      if(document.getElementById("cons_CCU").value != '')
      {
        if(document.getElementById("cons_CCU").value <= 0 || document.getElementById("cons_CCU").value >= 250)
        {
          correccion = correccion + "*Cm Umbilical " + "\n"
          document.getElementById("cons_CCU").focus()
          incompleto = true;
        }
      }
      if(document.getElementById("cons_CCP").value != '')
      {
        if(document.getElementById("cons_CCP").value <= 0 || document.getElementById("cons_CCP").value >= 250)
        {
          correccion = correccion + "*Cm Prominente " + "\n"
          document.getElementById("cons_CCP").focus()
          incompleto = true;
        }
      }
      if(document.getElementById("cons_GC").value != '')
      {
        if(document.getElementById("cons_GC").value <= 0 || document.getElementById("cons_GC").value > 100)
        {
          correccion = correccion + "*Grasa Corporal " + "\n"
          document.getElementById("cons_GC").focus()
          incompleto = true;
        }
      }
      if(document.getElementById("cons_GV").value != '')
      {
        if(document.getElementById("cons_GV").value <= 0 || document.getElementById("cons_GV").value > 100)
        {
          correccion = correccion + "*Grasa Viceral " + "\n"
          document.getElementById("cons_GV").focus()
          incompleto = true;
        }
      }
      
      
      if(incompleto == true){
          swal("Atención",correccion,"warning" );
          return false;
      }
      else{
      }
    }

    function registrarPaciente(){
      if (validarDatos() == false) {
        return false;
      } 
      else {
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
            fetch(ruta,{
            method:metodo,
            body: JSON.stringify(post),
            headers: {
                "Content-type": "application/json"
            }
            }).then(res=>res.json())
            .then(data=>console.log(data))
            location.href ="/consulta/registrarconsultahabitos/hc="+pac_nrohc+"/trn="+cons_idturno
        } catch (error) {
            swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
            console.log(error)
        }
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
          location.href ="/consulta/modificarconsultahabitos/hc="+pac_nrohc+"/trn="+cons_idturno
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