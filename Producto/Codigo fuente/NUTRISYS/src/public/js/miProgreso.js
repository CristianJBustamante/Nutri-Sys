
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
console.log(pac_nrohc)

let nuevo = 0;
let cabecera=''
let cabecera2=''

if (nuevo==0) {
  let queryh = 'http://localhost:3000/ultimoshabitos/'+ pac_nrohc
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

  let queryh = 'http://localhost:3000/habitopactado/'+ pac_nrohc
      fetch(queryh)
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