//Get nrohc
const url = new String(window.location)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,url.length)

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
    }


    function validarDatos(){
        var incompleto = false;
        var correccion = "Datos incompletos: " + "\n";
    
        if(document.getElementById("check-1").checked == true)
        {
            if((document.getElementById("anms_vacunacongrasa").checked == false) && (document.getElementById("anms_vacunasingrasa").checked == false)
            ){
                correccion = correccion + "*Vacuna" + "\n"
                incompleto = true;
            }
        }
    
        if(document.getElementById("check-2").checked == true)
        {
            if((document.getElementById("anms_polloconpiel").checked == false) && (document.getElementById("anms_pollosinpiel").checked == false)
            ){
                correccion = correccion + "*Pollo" + "\n"
                incompleto = true;
            }
        }
        if(document.getElementById("check-3").checked == true)
        {
            if((document.getElementById("anms_pescadorio").checked == false) && (document.getElementById("anms_pescadomar").checked == false)
             ) {
                correccion = correccion + "*Pescado" + "\n"
                incompleto = true;
            }
        }
        if(document.getElementById("check-4").checked == true)
        {
            if((document.getElementById("anms_higado").checked == false) && (document.getElementById("anms_rinon").checked == false) && (document.getElementById("anms_otrasviceras").value == "")
            ){
                correccion = correccion + "*Visceras" + "\n"
                incompleto = true;
            }
        }
        if(document.getElementById("check-5").checked == true)
        {
            if((document.getElementById("anms_lecheentera").checked == false) && (document.getElementById("anms_lechedescremada").checked == false)
            ){
                correccion = correccion + "*Leche" + "\n"
                incompleto = true;
            }
        }
        if(document.getElementById("check-6").checked == true)
        {
            if((document.getElementById("anms_yogurtentero").checked == false) && (document.getElementById("anms_yogurtdescremada").checked == false)
            ){
                correccion = correccion + "*Yogurt" + "\n"
                incompleto = true;
            }
        }
        if(document.getElementById("check-7").checked == true)
        {
            if((document.getElementById("anms_quesoduro").checked == false) && (document.getElementById("anms_quesosemiblando").checked == false) && (document.getElementById("anms_quesountable").checked == false))
            {
                correccion = correccion + "*Queso" + "\n"
                incompleto = true;
            }
        }
        if(document.getElementById("check-8").checked == true )
        {
            if((document.getElementById("anms_panblanco").checked == false) && (document.getElementById("anms_pannegro").checked == false)
            ){
                correccion = correccion + "*Pan" + "\n"
                incompleto = true;
            }
        }
        if(document.getElementById("check-9").checked == true )
        {
            if((document.getElementById("anms_galletassaladas").checked == false) && (document.getElementById("anms_galletasagua").checked == false) && (document.getElementById("anms_galletasdulces").checked == false) && (document.getElementById("anms_galletasintegrales").checked == false)
            ){
                correccion = correccion + "*Galletas" + "\n"
                incompleto = true;
            }
        }
        if(document.getElementById("check-10").checked == true)
        {
            if((document.getElementById("anms_facturas").checked == false) && (document.getElementById("anms_tortas").checked == false) && (document.getElementById("anms_otrasmasas").value == ""))
            {
                correccion = correccion + "*Masas" + "\n"
                incompleto = true;
            }
        }

        if(document.getElementById("check-11").checked == true)
        {
            if((document.getElementById("anms_edulcorante").value == ""))
            {
                correccion = correccion + "*Edulcorante" + "\n"
                incompleto = true;
            }
        }

        if(document.getElementById("check-12").checked == true)
        {
            if(document.getElementById("anms_cantvino").value == "")
            {
                correccion = correccion + "*Vino" + "\n"
                incompleto = true;
            }
        }
        if(document.getElementById("check-13").checked == true)
        {
            if(document.getElementById("anms_cantcerveza").value == "")
            {
                correccion = correccion + "*Cerveza" + "\n"
                incompleto = true;
            }
        }
        if(document.getElementById("check-14").checked == true)
        {
            if(document.getElementById("anms_cantbebblancas").value == "")
            {
                correccion = correccion + "*Bebida Blanca" + "\n"
                incompleto = true;
            }
        }
        if(incompleto == true){
            alert(correccion);
            return false;
        }
    }

function crearAnamnesis(){
    if (validarDatos() == false) {
        return false;
    } 
    else {
    var anms_nrohc = pac_nrohc;
    var anms_vacunacongrasa =   document.getElementById("anms_vacunacongrasa").checked;
    var anms_vacunasingrasa =   document.getElementById("anms_vacunasingrasa").checked;
    var anms_polloconpiel =     document.getElementById("anms_polloconpiel").checked;
    var anms_pollosinpiel =     document.getElementById("anms_pollosinpiel").checked;
    var anms_pescadorio =       document.getElementById("anms_pescadorio").checked;
    var anms_pescadomar =       document.getElementById("anms_pescadomar").checked;
    var anms_cerdo =            document.getElementById("anms_cerdo").checked;
    var anms_higado =           document.getElementById("anms_higado").checked;
    var anms_rinon =            document.getElementById("anms_rinon").checked;
    var anms_otrasviceras =     document.getElementById("anms_otrasviceras").value;
    var anms_fiambres =         document.getElementById("anms_fiambres").checked;
    var anms_embutidos =        document.getElementById("anms_embutidos").checked;
    var anms_salchichas =       document.getElementById("anms_salchichas").checked;
    var anms_chorizo =          document.getElementById("anms_chorizo").checked;
    var anms_morcilla =         document.getElementById("anms_morcilla").checked;
    var anms_lecheentera =      document.getElementById("anms_lecheentera").checked;
    var anms_lechedescremada =  document.getElementById("anms_lechedescremada").checked;
    var anms_yogurtentero =     document.getElementById("anms_yogurtentero").checked;
    var anms_yogurtdescremada = document.getElementById("anms_yogurtdescremada").checked;
    var anms_quesoduro =        document.getElementById("anms_quesoduro").checked;
    var anms_quesosemiblando =  document.getElementById("anms_quesosemiblando").checked;
    var anms_quesountable =     document.getElementById("anms_quesountable").checked;
    var anms_otrosquesos =     document.getElementById("anms_otrosquesos").value;
    var anms_flan =             document.getElementById("anms_flan").checked;
    var anms_licuados =         document.getElementById("anms_licuados").checked;
    var anms_salsablanca =      document.getElementById("anms_salsablanca").checked;
    var anms_prepconleche =     document.getElementById("anms_prepconleche").value;
    var anms_huevohervido =     document.getElementById("anms_huevohervido").checked;
    var anms_huevofrito =       document.getElementById("anms_huevofrito").checked;
    var anms_prephuevo =        document.getElementById("anms_prephuevo").value;
    var anms_vegetalesfrescos = document.getElementById("anms_vegetalesfrescos").value;
    var anms_vegetalesenlatados =  document.getElementById("anms_vegetalesenlatados").value;
    var anms_frutas =           document.getElementById("anms_frutas").value;
    var anms_cereales =         document.getElementById("anms_cereales").value;
    var anms_pastas =           document.getElementById("anms_pastas").value;
    var anms_vegfeculentos =    document.getElementById("anms_vegfeculentos").value;
    var anms_legumbres =        document.getElementById("anms_legumbres").value;
    var anms_panblanco =        document.getElementById("anms_panblanco").checked;
    var anms_pannegro =         document.getElementById("anms_pannegro").checked;
    var anms_galletassaladas =  document.getElementById("anms_galletassaladas").checked;
    var anms_galletasagua =     document.getElementById("anms_galletasagua").checked;
    var anms_galletasdulces =   document.getElementById("anms_galletasdulces").checked;
    var anms_galletasintegrales =  document.getElementById("anms_galletasintegrales").checked;
    var anms_facturas =         document.getElementById("anms_facturas").checked;
    var anms_tortas =           document.getElementById("anms_tortas").checked;
    var anms_otrasmasas =       document.getElementById("anms_otrasmasas").value;
    var anms_azucar =           document.getElementById("anms_azucar").checked;
    var anms_mermelada =        document.getElementById("anms_mermelada").checked;
    var anms_gelatina =         document.getElementById("anms_gelatina").checked;
    var anms_miel =             document.getElementById("anms_miel").checked;
    var anms_dulces =           document.getElementById("anms_dulces").checked;
    var anms_jugos =            document.getElementById("anms_jugos").checked;
    var anms_golosinas =        document.getElementById("anms_golosinas").checked;
    var anms_gaseosas =         document.getElementById("anms_gaseosas").checked;
    var anms_edulcorante =      document.getElementById("anms_edulcorante").checked;
    var anms_otrasazucares =    document.getElementById("anms_otrasazucares").value;
    var anms_aceitegirasol =    document.getElementById("anms_aceitegirasol").checked;
    var anms_aceitemaiz =       document.getElementById("anms_aceitemaiz").checked;
    var anms_aceiteoliva =      document.getElementById("anms_aceiteoliva").checked;
    var anms_otrosaceites =     document.getElementById("anms_otrosaceites").value;
    var anms_aceitecrudo =      document.getElementById("anms_aceitecrudo").checked;
    var anms_aceitefritura =    document.getElementById("anms_aceitefritura").checked;
    var anms_manteca =          document.getElementById("anms_manteca").checked;
    var anms_margarina =        document.getElementById("anms_margarina").checked;
    var anms_mayonesa =         document.getElementById("anms_mayonesa").checked;
    var anms_otrasgrasas =      document.getElementById("anms_otrasgrasas").value;
    var anms_salcomun =         document.getElementById("anms_salcomun").checked;
    var anms_saldieta =         document.getElementById("anms_saldieta").checked;
    var anms_sales =            document.getElementById("anms_sales").value;
    var anms_bebidas =          document.getElementById("anms_bebidas").value;
    var anms_cantvino =         document.getElementById("anms_cantvino").value;
    var anms_cantcerveza =      document.getElementById("anms_cantcerveza").value;
    var anms_cantbebblancas =      document.getElementById("anms_cantbebblancas").value;
    var anms_desayuno =         document.getElementById("anms_desayuno").value;
    var anms_mediamanana =      document.getElementById("anms_mediamanana").value;
    var anms_almuerzo =         document.getElementById("anms_almuerzo").value;
    var anms_merienda =         document.getElementById("anms_merienda").value;
    var anms_mediatarde =         document.getElementById("anms_mediatarde").value;
    var anms_cena =             document.getElementById("anms_cena").value;

    const post = {
        anms_nrohc: anms_nrohc,
        anms_vacunacongrasa: anms_vacunacongrasa,
        anms_vacunasingrasa: anms_vacunasingrasa,
        anms_polloconpiel: anms_polloconpiel,
        anms_pollosinpiel: anms_pollosinpiel,
        anms_pescadorio: anms_pescadorio,
        anms_pescadomar: anms_pescadomar,
        anms_cerdo: anms_cerdo,
        anms_higado: anms_higado,
        anms_rinon: anms_rinon,
        anms_otrasviceras: anms_otrasviceras,
        anms_fiambres: anms_fiambres,
        anms_embutidos: anms_embutidos,
        anms_salchichas: anms_salchichas,
        anms_chorizo: anms_chorizo,
        anms_morcilla: anms_morcilla,
        anms_lecheentera: anms_lecheentera,
        anms_lechedescremada: anms_lechedescremada,
        anms_yogurtentero: anms_yogurtentero,
        anms_yogurtdescremada: anms_yogurtdescremada,
        anms_quesoduro: anms_quesoduro,
        anms_quesosemiblando: anms_quesosemiblando,
        anms_quesountable: anms_quesountable,
        anms_otrosquesos: anms_otrosquesos,
        anms_flan: anms_flan,
        anms_licuados: anms_licuados,
        anms_salsablanca: anms_salsablanca,
        anms_prepconleche: anms_prepconleche,
        anms_huevohervido: anms_huevohervido,
        anms_huevofrito: anms_huevofrito,
        anms_prephuevo: anms_prephuevo,
        anms_vegetalesfrescos: anms_vegetalesfrescos,
        anms_vegetalesenlatados: anms_vegetalesenlatados,
        anms_frutas: anms_frutas,
        anms_cereales: anms_cereales,
        anms_pastas: anms_pastas,
        anms_vegfeculentos: anms_vegfeculentos,
        anms_legumbres: anms_legumbres,
        anms_panblanco: anms_panblanco,
        anms_pannegro: anms_pannegro,
        anms_galletassaladas: anms_galletassaladas,
        anms_galletasagua: anms_galletasagua,
        anms_galletasdulces: anms_galletasdulces,
        anms_galletasintegrales: anms_galletasintegrales,
        anms_facturas: anms_facturas,
        anms_tortas: anms_tortas,
        anms_otrasmasas: anms_otrasmasas,
        anms_azucar: anms_azucar,
        anms_mermelada: anms_mermelada,
        anms_gelatina: anms_gelatina,
        anms_miel: anms_miel,
        anms_dulces: anms_dulces,
        anms_jugos: anms_jugos,
        anms_golosinas: anms_golosinas,
        anms_gaseosas: anms_gaseosas,
        anms_edulcorante: anms_edulcorante,
        anms_otrasazucares: anms_otrasazucares,
        anms_aceitegirasol: anms_aceitegirasol,
        anms_aceitemaiz: anms_aceitemaiz,
        anms_aceiteoliva: anms_aceiteoliva,
        anms_otrosaceites: anms_otrosaceites,
        anms_aceitecrudo: anms_aceitecrudo,
        anms_aceitefritura: anms_aceitefritura,
        anms_manteca: anms_manteca,
        anms_margarina: anms_margarina,
        anms_mayonesa: anms_mayonesa,
        anms_otrasgrasas: anms_otrasgrasas,
        anms_salcomun: anms_salcomun,
        anms_saldieta: anms_saldieta,
        anms_sales: anms_sales,
        anms_bebidas: anms_bebidas,
        anms_cantvino: anms_cantvino,
        anms_cantcerveza: anms_cantcerveza,
        anms_cantbebblancas: anms_cantbebblancas,
        anms_desayuno: anms_desayuno,
        anms_mediamanana: anms_mediamanana,
        anms_almuerzo: anms_almuerzo,
        anms_merienda: anms_merienda,
        anms_mediatarde: anms_mediatarde,
        anms_cena: anms_cena
    }
    console.log(post)
    try {
        console.log(JSON.stringify(post));
        fetch("http://localhost:3000/registraranamnesis",{
        method:'POST',
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json"
        }
        }).then(res=>res.json())
        .then(data=>console.log(data))
        swal("Anamnesis Registrada con Éxito",{
            icon: "success"})
    } catch (error) {
        swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
    }
  }
}

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
