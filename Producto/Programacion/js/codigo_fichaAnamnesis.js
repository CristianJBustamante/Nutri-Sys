function comprobarCampos()
{
    var checkboxs = document.getElementsByClassName("camposAVerificar");
    
    for (var i = 0; i < checkboxs.length; i++) {
        var atributes = checkboxs.item(i).getAttribute("class");
        console.log(atributes);
        console.log(atributes.substr(0,9));
        console.log(atributes.substr(10,atributes.length));
        if(atributes.substr(0,9) == "democlass"){
            checkboxs.item(i).setAttribute("class", atributes.substr(10,atributes.length));
        }
        else
        {
            checkboxs.item(i).setAttribute("class","democlass" + " " + atributes);
        }
        
     }
}