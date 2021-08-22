
    hideSeccion("carne__cuestionario");
    hideSeccion("lacteos__cuestionario");
    hideSeccion("huevos__cuestionario");
    hideSeccion("vegetales__cuestionario");
    hideSeccion("panificacion__cuestionario");
    hideSeccion("azucar__cuestionario");
    hideSeccion("aceite__cuestionario");
    hideSeccion("grasas__cuestionario");
    hideSeccion("sal__cuestionario");
    hideSeccion("bebidas__cuestionario");
    hideSeccion("alcohol__cuestionario");
    hideSeccion("comidas__cuestionario");


window.addEventListener('load',onload);

function comprobarCampos(id)
{
    var divs = document.getElementsByClassName("camposAVerificar");
    var checkboxs = document.getElementsByClassName("checkAVerificar")
    var elementos;

    switch (id){
        case "check-1":
            elementos = [1,2];
            break;
        case "check-2":
            elementos = [3,4];
            break;
        case "check-3":
            elementos = [5,6];
            break;
        case "check-4":
            elementos = [7,8];
            break;
        case "check-5":
            elementos = [9,10];
            break;
        case "check-6":
            elementos = [11,12];
            break;
        case "check-7":
            elementos = [13, 14, 15];
            break;
        case "check-8":
            elementos = [16, 17];
            break;
        case "check-9":
            elementos = [18,19,20,21];
            break;
        case "check-10":
            elementos = [22,23];
            break;
        case "check-11":
            elementos = [24];
            break;
        case "check-12":
            elementos = [25];
            break;
        case "check-13":
            elementos = [26];
            break;
        case "check-14":
            elementos = [27];
            break;
    }

    for (var i = 0; i < divs.length; i++) {
        if(elementos.includes(i+1))
        {

            var atributes = divs.item(i).getAttribute("class");
            if(atributes.substr(0,9) == "democlass"){
             divs.item(i).setAttribute("class", atributes.substr(10,atributes.length));
             checkboxs.item(i).disabled=true;
            }
            else
            {
             divs.item(i).setAttribute("class","democlass" + " " + atributes);
             checkboxs.item(i).disabled=false;
            }

        }
        
     }
}

function hideSeccion(id){
    var carne = document.getElementById(id);
    if (carne.style.display === "none") {
        carne.style.display = "grid";
      } else {
        carne.style.display = "none";
      }
}