evaluarProgreso();

/**** Grafico de Progreso ****/

const controller = document.querySelector('input[type=range]');
const radialProgress = document.querySelector('.RadialProgress');

const setProgress = (progress) => {
  const value = `${progress}%`;
  radialProgress.style.setProperty('--progress', value)
  radialProgress.innerHTML = value
  radialProgress.setAttribute('aria-valuenow', value)
}

setProgress(controller.value)
controller.oninput = () => {
  setProgress(controller.value)
}


function evaluarProgreso(){
  var progreso = document.getElementById('barra__progreso');
  progreso.value = "60";
  progreso.disabled = true;

}

const url = new String(window.location)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,url.length)
var s = (document.getElementById("user").href)
let mihc = s.substr(s.indexOf("hc=")+3,s.length)
if (pac_nrohc!=mihc) {  
    location.href = '/miprogreso/hc='+mihc
}
console.log(pac_nrohc)
console.log(mihc)

let nuevo = 0;
let cabecera=''
let cabecera2=''

if (nuevo==0) {
  let queryh = 'http://localhost:3000/ultimoshabitospaciente/'+ pac_nrohc
      fetch(queryh)
        .then(response => response.json())
        .then(hab => cargarhabitos(hab))
        .catch(error => console.log(error))
      const cargarhabitos = (hab) => {
    console.log(pac_nrohc)
      for (let i = 0; i<hab.length; i++){
        cabecera += `<tbody><tr><td>-${hab[i].hab_descripcion}</td></tr></tbody><br>`
        document.getElementById('habitos').innerHTML = cabecera
        }
        console.log(hab)

  let queryhp = 'http://localhost:3000/habitopactadopaciente/'+ pac_nrohc
      fetch(queryhp)
        .then(response => response.json())
        .then(hab => cargarhabitos(hab))
        .catch(error => console.log(error))
      const cargarhabitos = (hab) => {
        for (let i = 0; i<hab.length; i++){
          cabecera2 += `<tbody><tr><td>${hab[i].dhabpac_observaciones}<br></td></tr></tbody>`
          document.getElementById('habitoP').innerHTML = cabecera2
          }
  }}
}

//Nagegabilidad//
function consultarMiPlan() {
  location.href ="/miPlanAlimentario/hc="+pac_nrohc
}

function consultarMisTurnos() {
  location.href ="/misturnos/hc="+pac_nrohc
}

document.querySelector(".addParam").addEventListener("click",addParam);
document.querySelector(".showResults").addEventListener("click",showResults);

var parametros = [];
var valores = [];

function addParam(){
    let html = document.querySelector(".container").innerHTML;
    let newHTML = '<div><input type="text" class="parametro" placeholder="parametro"><input type="number" class="valor" placeholder="valor"></div>'; 
    document.querySelector(".container").innerHTML = html + newHTML;
} 


function showResults(){
    for (var i = 0; i < document.querySelectorAll('.parametro2').length ; i++) {
      parametros.push(document.querySelectorAll('.parametro2')[i].value);
      valores.push(parseInt(document.querySelectorAll(".valor2")[i].value));
    }
    var data = [{
      x: parametros,
      y: valores,
      type: "linear"
    }];
    Plotly.newPlot("grafico",data);
}
/* --------------------------------------------*/
document.querySelector(".addParam2").addEventListener("click",addParam2);
document.querySelector(".showResults2").addEventListener("click",showResults2);

var parametros = [];
var valores = [];

function addParam2(){
    let html = document.querySelector(".container2").innerHTML;
    let newHTML = '<div><input type="text" class="parametro2" placeholder="parametro2"><input type="number" class="valor2" placeholder="valor2"></div>'; 
    document.querySelector(".container2").innerHTML = html + newHTML;
} 


function showResults2(){
    for (var i = 0; i < document.querySelectorAll('.parametro2').length ; i++) {
      parametros.push(document.querySelectorAll('.parametro2')[i].value);
      valores.push(parseInt(document.querySelectorAll(".valor2")[i].value));
    }
    var data = [{
      x: parametros,
      y: valores,
      type: "linear"
    }];
    Plotly.newPlot("grafico2",data);
}