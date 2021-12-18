buscarSaludo();

function buscarSaludo(){
    var today = new Date();
    var time = today.getHours();
    var saludo = document.getElementById("saludo_bienvenida");

    if(time < 6 || time >= 20){
        saludo.innerHTML = "Buenas noches"; 
    }
    else{
        if(time > 6 && time < 12 ){
            saludo.innerHTML = "Buenos días";
        }
        else{
            saludo.innerHTML = "Buenas tardes";
        }
    }
    
}