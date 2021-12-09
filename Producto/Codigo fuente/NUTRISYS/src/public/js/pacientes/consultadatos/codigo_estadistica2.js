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
    location.href=ruta
  }
}
//-------------------------------------------FIN PERMISOS----------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------


const url = new String(window.location)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,url.length)
let query = 'http://localhost:3000/paciente/'+pac_nrohc
fetch(query)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

//Cargar cabecera
const mostrarData = (data) => {
    console.log(data) 
    let solapas=''
    solapas=`<a class="nav__solapa"  href="/pacientes/consultapacientefichainicial/hc=${data.pac_nrohc}">Ficha Inicial</a>
    <a class="nav__solapa" href="/pacientes/consultapaciente/hc=${data.pac_nrohc}">Resumen</a>
    <a class="nav__solapa" href="/pacientes/consultapacientehabitos/hc=${data.pac_nrohc}">Hábitos</a>
    <a class="nav__solapa" href="../consultapacienteplan/hc=${data.pac_nrohc}">Evoluciones</a>
    <a class="nav__solapa--seleccionado" href="/pacientes/consultapacientefichas/hc=${data.pac_nrohc}">Gráficos</a>
    <a class="nav__solapa" href="">Documentos</a>
    <a class="nav__solapa" href="">Estudios</a>
    <a class="nav__solapa--resto"></a>`        
    document.getElementById('solapas').innerHTML = solapas  
    let cabecera =''
    cabecera += `<h2>Paciente: ${data.pac_apellido}, ${data.pac_nombre}</h2><h2>HC: ${data.pac_nrohc}</h2><h2>DOC.: ${data.pac_nrodoc}</h2><h2>FN: ${data.pac_fechanac}</h2>`        
    document.getElementById('pac_datos').innerHTML = cabecera
  
    }
    var parametrospeso = [];
    var valorespeso = [];
    var valoresimc = [];

    query = 'http://localhost:3000/pesospaciente/'+pac_nrohc
    fetch(query)
            .then(response => response.json())
            .then(data => mostrarpeso(data))
            .catch(error => console.log(error))
    
    //Cargar cabecera
    const mostrarpeso = (data) => {
        console.log(data) 
        for (let i = 0; i<data.length; i++){
          var fecha = data[i].turno_fecha
          fecha = fecha.substr(0,10)  
          parametrospeso.push(fecha)
          valorespeso.push(data[i].peso)
          valoresimc.push(data[i].imc)
        }


        showResults(
        showResults()
        )
      }


//document.querySelector(".addParam").addEventListener("click",addParam);
//document.querySelector(".showResults").addEventListener("click",showResults);




function addParam(){
    let html = document.querySelector(".container").innerHTML;
    let newHTML = '<div><input type="text" class="parametro" placeholder="parametro"><input type="number" class="valor" placeholder="valor"></div>'; 
    document.querySelector(".container").innerHTML = html + newHTML;
} 


function showResults(){
    for (var i = 0; i < document.querySelectorAll('.parametro').length ; i++) {
      parametrospeso.push(document.querySelectorAll('.parametro')[i].value);
      valorespeso.push(parseInt(document.querySelectorAll(".valor")[i].value));
    }
    var data = [{
      x: parametrospeso,
      y: valorespeso,
      type: "linear"
      
    }];
    Plotly.newPlot("grafico",data);

    data = [{
      x: parametrospeso,
      y: valoresimc,
      type: "linear",
      line: {
        color: 'rgb(219, 64, 82)',
        width: 3
      }    }];
    Plotly.newPlot("graficoIMC",data);
}