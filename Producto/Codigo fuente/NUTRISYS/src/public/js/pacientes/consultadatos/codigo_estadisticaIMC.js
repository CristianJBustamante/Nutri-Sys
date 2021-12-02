document.querySelector(".addParamIMC").addEventListener("click",addParamIMC);
document.querySelector(".showResultsIMC").addEventListener("click",showResultsIMC);

var parametros = [];
var valores = [];

function addParamIMC(){
    let html = document.querySelector(".container").innerHTML;
    let newHTML = '<div><input type="text" class="parametroIMC" placeholder="parametroIMC"><input type="number" class="valorIMC" placeholder="valorIMC"></div>'; 
    document.querySelector(".container").innerHTML = html + newHTML;
} 


function showResultsIMC(){
    for (var i = 0; i < document.querySelectorAll('.parametroIMC').length ; i++) {
      parametros.push(document.querySelectorAll('.parametroIMC')[i].value);
      valores.push(parseInt(document.querySelectorAll(".valorIMC")[i].value));
    }
    var data = [{
      x: parametros,
      y: valores,
      type: "linear"
    }];
    Plotly.newPlot("graficoIMC",data);
}