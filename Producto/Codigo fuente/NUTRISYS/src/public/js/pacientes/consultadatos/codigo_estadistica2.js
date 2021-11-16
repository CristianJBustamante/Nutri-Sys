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
    <a class="nav__solapa--seleccionado" href="/pacientes/consultapacientefichas/hc=${data.pac_nrohc}">Evoluciones</a>
    <a class="nav__solapa" href="">Planes</a>
    <a class="nav__solapa" href="">Documentos</a>
    <a class="nav__solapa" href="">Estudios</a>
    <a class="nav__solapa--resto"></a>`        
    document.getElementById('solapas').innerHTML = solapas  
    let cabecera =''
    cabecera += `<h2>Paciente: ${data.pac_apellido}, ${data.pac_nombre}</h2><h2>HC: ${data.pac_nrohc}</h2><h2>DOC.: ${data.pac_nrodoc}</h2><h2>FN: ${data.pac_fechanac}</h2>`        
    document.getElementById('pac_datos').innerHTML = cabecera
  
    }
    var parametros = [];
    var valores = [];
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
          parametros.push(fecha)
          valores.push(data[i].peso)
        }


        showResults(
        showResults()
        )
      }


document.querySelector(".addParam").addEventListener("click",addParam);
document.querySelector(".showResults").addEventListener("click",showResults);




function addParam(){
    let html = document.querySelector(".container").innerHTML;
    let newHTML = '<div><input type="text" class="parametro" placeholder="parametro"><input type="number" class="valor" placeholder="valor"></div>'; 
    document.querySelector(".container").innerHTML = html + newHTML;
} 


function showResults(){
    for (var i = 0; i < document.querySelectorAll('.parametro').length ; i++) {
      parametros.push(document.querySelectorAll('.parametro')[i].value);
      valores.push(parseInt(document.querySelectorAll(".valor")[i].value));
    }
    var data = [{
      x: parametros,
      y: valores,
      type: "linear"
      
    }];
    Plotly.newPlot("grafico",data);
}