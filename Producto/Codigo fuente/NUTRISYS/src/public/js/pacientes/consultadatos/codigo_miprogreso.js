swal({
  text:"Ingresando...",
  icon: "https://thumbs.gfycat.com/NecessaryEvilGuillemot-max-1mb.gif",
  buttons: false,      
  closeOnClickOutside: false,
  timer: 1000,
  //icon: "success"
}).then((value) => {})

//VALIDAR HC PACIENTE
const url = new String(window.location)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,url.length)
var s = (document.getElementById("user").href)
let mihc = s.substr(s.indexOf("hc=")+3,s.length)
if (pac_nrohc!=mihc) {  
    location.href = '/miprogreso/hc='+mihc
}

//BUSCAR PROGRESO
let primerpeso
let ultimopeso
let pesoideal
let porcentaje
 
fetch("/datosmiprogreso/"+pac_nrohc)
    .then(response => response.json())
    .then(data => progreso(data))
    .catch(error => console.log(error))

//Cargar progreso
const progreso = (data) => {
  primerpeso = data.primerpeso
  ultimopeso = data.ultimopeso
  pesoideal = data.hc_PD
  porcentaje = (primerpeso-ultimopeso) * 100 /(primerpeso-pesoideal)
  document.getElementById('pInicial').innerHTML = primerpeso + '  KG.'
  document.getElementById('pActual').innerHTML = ultimopeso + '  KG.'
  document.getElementById('pObjetivo').innerHTML = pesoideal + '  KG.'
  
  /**** Grafico de Progreso ****/
  evaluarProgreso();
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
    progreso.value = porcentaje;
    progreso.disabled = true;
  }
}

//HABITOS
let cabecera=''
let cabecera2=''
  let queryh = '/ultimoshabitospaciente/'+ pac_nrohc
      fetch(queryh)
        .then(response => response.json())
        .then(hab => cargarhabitos(hab))
        .catch(error => console.log(error))
      const cargarhabitos = (hab) => {
    console.log(pac_nrohc)
      for (let i = 0; i<hab.length; i++){
        cabecera += `<tbody><tr><td>-${hab[i].dhabpac_observaciones}</td></tr></tbody><br>`
        document.getElementById('habitos').innerHTML = cabecera
        }
        console.log(hab)

  let queryhp = '/habitopactadopaciente/'+ pac_nrohc
      fetch(queryhp)
        .then(response => response.json())
        .then(hab => cargarhabitos(hab))
        .catch(error => console.log(error))
      const cargarhabitos = (hab) => {
        for (let i = 0; i<hab.length; i++){
          cabecera2 += `<tbody><tr><td>${hab[i].hab_descripcion}<br></td></tr></tbody>`
          document.getElementById('habitoP').innerHTML = cabecera2
          }
  }}


//GRAFICOS

var parametrospeso = [];
var valorespeso = [];
var valoresimc = [];
var imcolor

query = 'http://localhost:3000/ultimoimc/'+pac_nrohc
      fetch(query)
              .then(response => response.json())
              .then(data => colorimc(data))
              .catch(error => console.log(error))
      
      //Cargar cabecera
      const colorimc = (data) => {
        console.log(data)
        let imc=parseFloat(data[0].imc)
        console.log(imc)
        //peso bajo
        if (imc<18.49) {
          imcolor='rgb(0, 255, 255)' 
        }
        //peso normal
        if (imc>18.49 && imc<25) {
          imcolor='rgb(178, 223, 89)' 
        }
        //sobrepeso
        if (imc>24.99 && imc<30) {
          imcolor='rgb(238, 238, 70)' 
        }
        //obesidad leve
        if (imc>29.99 && imc<35) {
          imcolor='rgb(255, 165, 0)' 
        }
        //obesidad moderada
        if (imc>34.99 && imc<40) {
          imcolor='rgb(250, 134, 1)' 
        }
        //obesidad severa
        if (imc>40) {
          imcolor='rgb(230, 78, 41)' 
        }
        
      }

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
            color: imcolor,
            width: 3
          }    }];
        Plotly.newPlot("graficoIMC",data);
    }




