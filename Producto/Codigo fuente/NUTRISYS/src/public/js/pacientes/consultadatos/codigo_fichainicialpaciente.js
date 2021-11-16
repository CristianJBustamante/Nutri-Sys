const url = new String(window.location)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,url.length)
let query = 'http://localhost:3000/paciente/'+pac_nrohc
fetch(query)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data) 
    let solapas=''
    solapas += `<a class="nav__solapa--seleccionado"  href="../consultapacientefichainicial/hc=${data.pac_nrohc}">Ficha Inicial</a>
                <a class="nav__solapa" href="../consultapaciente/hc=${data.pac_nrohc}">Resumen </a>
                <a class="nav__solapa" href="../consultapacientehabitos/hc=${data.pac_nrohc}">Hábitos</a>
                <a class="nav__solapa" href="../consultapacientefichas/hc=${data.pac_nrohc}">Evoluciones</a>
                <a class="nav__solapa" href="">Planes</a>
                <a class="nav__solapa" href="">Documentos</a>
                <a class="nav__solapa" href="">Estudios</a>
                <a class="nav__solapa--resto"></a>`
    let cabecera =''
    document.getElementById('solapas').innerHTML = solapas
    cabecera += `<h2>Paciente: ${data.pac_apellido}, ${data.pac_nombre}</h2><h2>HC: ${data.pac_nrohc}</h2><h2>DOC.: ${data.pac_nrodoc}</h2><h2>FN: ${data.pac_fechanac}</h2>`        
    document.getElementById('pac_datos').innerHTML = cabecera
    let resumen = ''
    resumen += `<h3>Nacionalidad:</h3><h3>Argentina</h3><h3>Domicilio:</h3><h3>${data.pac_direccion}</h3><h3>Localidad / Provincia:</h3><h3>Córdoba / Córdoba</h3><h3>Profesión:</h3><h3>${data.hc_ocupacion}</h3><h3>Celular:</h3><h3>${data.pac_telefono1}</h3><h3>Correo:</h3><h3>${data.pac_correo}</h3>`
    document.getElementById('pac_datospersonales').innerHTML = resumen
    }

//cargar datos ficha inicial
let queryficha = 'http://localhost:3000/fichainicial/'+pac_nrohc
fetch(queryficha)
        .then(response => response.json())
        .then(datos => mostrarFicha(datos))
        .catch(error => console.log(error))
const mostrarFicha = (datos) => {
    datos=datos[0]
    document.getElementById("fechaactual").value = datos.fecharegistro
    document.getElementById("hc_diagnostico").value = datos.hc_diagnostico
    document.getElementById("hc_antecedentes").value = datos.hc_antecedentes
    document.getElementById("hc_fechalaboratorios").value = datos.fechalab
    document.getElementById("hc_laboratorios").value = datos.hc_laboratorios
    document.getElementById("hc_laboratorios").value = datos.hc_laboratorios
    document.getElementById("hc_medicacion").value = datos.hc_medicacion
    document.getElementById("hc_actividadfisica").value = datos.hc_actividadfisica
    document.getElementById("hc_ocupacion").value = datos.hc_ocupacion
    document.getElementById("hc_antecedentesnutricion").value = datos.hc_antecedentesnutricion
    document.getElementById("hc_edaddieta").value = datos.hc_edaddieta
    document.getElementById("hc_dieta").value = datos.hc_dieta
    document.getElementById("hc_talla").value = datos.hc_talla
    document.getElementById("hc_BMI").value = datos.hc_BMI
    document.getElementById("hc_PH").value = datos.hc_PH
    document.getElementById("hc_PD").value = datos.hc_PD
    document.getElementById("hc_PBMI").value = datos.hc_PBMI
    document.getElementById("hc_Pmin").value = datos.hc_Pmin
    document.getElementById("hc_Pmincuando").value = datos.hc_Pmincuando
    document.getElementById("hc_Pmax").value = datos.hc_Pmax
    document.getElementById("hc_Pmaxcuando").value = datos.hc_Pmaxcuando
    document.getElementById("hc_GC").value = datos.hc_GC
    document.getElementById("hc_GV").value = datos.hc_GV
    document.getElementById("hc_MM").value = datos.hc_MM
    document.getElementById("hc_PBI").value = datos.hc_PBI
    document.getElementById("hc_CC1").value = datos.hc_CC1
    document.getElementById("hc_CC2").value = datos.hc_CC2
    document.getElementById("hc_CC3").value = datos.hc_CC3
    document.getElementById("hc_formula").value = datos.hc_formula
    document.getElementById("hc_ajuste").value = datos.hc_ajuste
    document.getElementById("hc_medajuste").value = datos.hc_medajuste
    document.getElementById("hc_pesoactual").value = datos.hc_pesoactual
}

//Cargar datos de Anamnesis
let querya = 'http://localhost:3000/anamnesis/'+pac_nrohc
    fetch(querya)
        .then(response => response.json())
        .then(data => mostraranamnesis(data))
        .catch(error => console.log(error))
    const mostraranamnesis = (data) => {
        console.log(data)
        if (data.length>0) {
            data = data[0]
            
        
        //CARNE
        document.getElementById("anms_vacunacongrasa").checked = data.anms_vacunacongrasa;
        document.getElementById("anms_vacunasingrasa").checked = data.anms_vacunasingrasa;
        document.getElementById("anms_polloconpiel").checked = data.anms_polloconpiel;
        document.getElementById("anms_pollosinpiel").checked = data.anms_pollosinpiel;
        document.getElementById("anms_pescadorio").checked = data.anms_pescadorio;
        document.getElementById("anms_pescadomar").checked = data.anms_pescadomar;
        document.getElementById("anms_cerdo").checked = data.anms_cerdo;
        document.getElementById("anms_higado").checked = data.anms_higado;
        document.getElementById("anms_rinon").checked = data.anms_rinon;
        document.getElementById("anms_otrasviceras").value = data.anms_otrasviceras;
        document.getElementById("anms_fiambres").checked = data.anms_fiambres;
        document.getElementById("anms_embutidos").checked= data.anms_embutidos;
        document.getElementById("anms_salchichas").checked=data.anms_salchichas;
        document.getElementById("anms_chorizo").checked=data.anms_chorizo;
        document.getElementById("anms_morcilla").checked= data.anms_morcilla;
        if (data.anms_vacunacongrasa | data.anms_vacunasingrasa | data.anms_polloconpiel | 
            data.anms_pollosinpiel | data.anms_pescadorio | data.anms_pescadomar | data.anms_cerdo |
            data.anms_higado | anms_rinon | data.anms_otrasvicera!='' | data.anms_fiambres | data.anms_embutidos |
            data.anms_salchichas | data.anms_chorizo | data.anms_morcilla ) {
                document.getElementById("carne").checked = true;
                hideSeccion('carne__cuestionario')
        }
        if (data.anms_vacunacongrasa | data.anms_vacunasingrasa) {
            document.getElementById("check-1").checked = true;
            comprobarCampos("check-1")
        }
        if (data.anms_polloconpiel | data.anms_pollosinpiel) {
            document.getElementById("check-2").checked = true;
            comprobarCampos("check-2")
        }
        if (data.anms_pescadorio | data.anms_pescadomar) {
            document.getElementById("check-3").checked = true;
            comprobarCampos("check-3")
        }
        if (data.anms_higado | data.anms_rinon) {
            document.getElementById("check-4").checked = true;
            comprobarCampos("check-4")
        }
        //LACTEOS
        document.getElementById("anms_lecheentera").checked= data.anms_lecheentera;
        document.getElementById("anms_lechedescremada").checked=data.anms_lechedescremada;
        document.getElementById("anms_yogurtentero").checked= data.anms_yogurtentero;
        document.getElementById("anms_yogurtdescremada").checked= data.anms_yogurtdescremada;
        document.getElementById("anms_quesoduro").checked = data.anms_quesoduro;
        document.getElementById("anms_quesosemiblando").checked = data.anms_quesosemiblando;
        document.getElementById("anms_quesountable").checked = data.anms_quesountable;
        document.getElementById("anms_otrosquesos").value = data.anms_otrosquesos;
        document.getElementById("anms_flan").checked= data.anms_flan;
        document.getElementById("anms_licuados").checked=data.anms_licuados;
        document.getElementById("anms_salsablanca").checked= data.anms_salsablanca;
        document.getElementById("anms_prepconleche").value=data.anms_prepconleche;
        if (data.anms_lecheentera | data.anms_lechedescremada | data.anms_yogurtentero | 
            data.anms_yogurtdescremada | data.anms_quesoduro | data.anms_quesosemiblando | data.anms_quesountable |
            data.anms_otrosquesos!='                                                  ' | data.anms_flan | data.anms_licuados | data.anms_salsablanca | 
            data.anms_prepconleche!='') {
                document.getElementById("lacteos").checked = true;
                hideSeccion('lacteos__cuestionario')
        }
        if (data.anms_lechedescremada | data.anms_lecheentera) {
            document.getElementById("check-5").checked = true;
            comprobarCampos("check-5")
        }
        if (data.anms_yogurtdescremada | data.anms_yogurtentero) {
            document.getElementById("check-6").checked = true;
            comprobarCampos("check-6")
        }
        if (data.anms_quesoduro | data.anms_quesosemiblando | data.anms_quesountable) {
            document.getElementById("check-7").checked = true;
            comprobarCampos("check-7")
        }
        //HUEVOS
        document.getElementById("anms_huevohervido").checked= data.anms_huevohervido;
        document.getElementById("anms_huevofrito").checked=data.anms_huevofrito;
        document.getElementById("anms_prephuevo").value=data.anms_prephuevo;
        if (data.anms_huevofrito | data.anms_huevohervido | data.anms_prephuevo!='') {
            document.getElementById("huevos").checked = true;
            hideSeccion('huevos__cuestionario')
        }
        //VEGETALES
        document.getElementById("anms_vegetalesfrescos").value=data.anms_vegetalesfrescos;
        document.getElementById("anms_vegetalesenlatados").value=data.anms_vegetalesenlatados;
        document.getElementById("anms_frutas").value=data.anms_frutas;
        document.getElementById("anms_cereales").value=data.anms_cereales;
        document.getElementById("anms_pastas").value=data.anms_pastas;
        document.getElementById("anms_vegfeculentos").value=data.anms_vegfeculentos;
        document.getElementById("anms_legumbres").value=data.anms_legumbres;
        if (data.anms_vegetalesfrescos!='' | data.anms_vegetalesenlatados!='' | data.anms_frutas!='' | 
        data.anms_cereales!='' | data.anms_pastas!='' | data.anms_vegfeculentos!='' | data.anms_legumbres!='') {
            document.getElementById("vegetales").checked = true;
            hideSeccion('vegetales__cuestionario')
        }
        //PANIFICACION
        document.getElementById("anms_panblanco").checked=data.anms_panblanco;
        document.getElementById("anms_pannegro").checked=data.anms_pannegro;
        document.getElementById("anms_galletassaladas").checked=data.anms_galletassaladas;
        document.getElementById("anms_galletasagua").checked=data.anms_galletasagua;
        document.getElementById("anms_galletasdulces").checked=data.anms_galletasdulces;
        document.getElementById("anms_galletasintegrales").checked=data.anms_galletasintegrales;
        document.getElementById("anms_facturas").checked=data.anms_facturas;
        document.getElementById("anms_tortas").checked=data.anms_tortas;
        document.getElementById("anms_otrasmasas").value=data.anms_otrasmasas;
        if (data.anms_panblanco | data.anms_pannegro | data.anms_galletassaladas | data.anms_galletasagua |
            data.anms_galletasdulces | data.anms_galletasintegrales | data.anms_facturas | data.anms_tortas |
            data.anms_otrasmasas!='') {
                document.getElementById("panificacion").checked = true;
                hideSeccion('panificacion__cuestionario')
        }
        if (data.anms_panblanco | data.anms_pannegro) {
            document.getElementById("check-8").checked = true;
            comprobarCampos("check-8")
        }
        if (data.anms_galletassaladas | data.anms_galletasintegrales | data.anms_galletasdulces |
            data.anms_galletasagua) {
            document.getElementById("check-9").checked = true;
            comprobarCampos("check-9")
        }
        if (data.anms_facturas | data.anms_tortas) {
            document.getElementById("check-10").checked = true;
            comprobarCampos("check-10")
        }
        //AZUCARES
        document.getElementById("anms_azucar").checked=data.anms_azucar;
        document.getElementById("anms_mermelada").checked=data.anms_mermelada;
        document.getElementById("anms_gelatina").checked=data.anms_gelatina;
        document.getElementById("anms_miel").checked=data.anms_miel;
        document.getElementById("anms_dulces").checked=data.anms_dulces;
        document.getElementById("anms_jugos").checked= data.anms_jugos;
        document.getElementById("anms_golosinas").checked=data.anms_golosinas;
        document.getElementById("anms_gaseosas").checked=data.anms_gaseosas;
        document.getElementById("anms_edulcorante").value=data.anms_edulcorante;
        document.getElementById("anms_otrasazucares").value=data.anms_otrasazucares;
        if (data.anms_azucar | data.anms_mermelada | data.anms_gelatina | data.anms_miel | data.anms_dulces |
            data.anms_jugos | data.anms_golosinas | data.anms_gaseosas | data.anms_edulcorante!='' | 
            data.anms_otrasazucares!='') {
                document.getElementById("azucares").checked = true;
                hideSeccion('azucar__cuestionario')
        }
        if (data.anms_edulcorante!='') {
            document.getElementById("check-11").checked = true;
            comprobarCampos("check-11")
        }
        //ACEITES
        document.getElementById("anms_aceitegirasol").checked=data.anms_aceitegirasol;
        document.getElementById("anms_aceitemaiz").checked=data.anms_aceitemaiz;
        document.getElementById("anms_aceiteoliva").checked=data.anms_aceiteoliva;
        document.getElementById("anms_otrosaceites").value=data.anms_otrosaceites;
        document.getElementById("anms_aceitecrudo").checked=data.anms_aceitecrudo;
        document.getElementById("anms_aceitefritura").checked=data.anms_aceitefritura;
        if (data.anms_aceitegirasol | data.anms_aceitemaiz | data.anms_aceiteoliva | 
            data.anms_otrosaceites!='' | data.anms_aceitecrudo | data.anms_aceitefritura) {
                document.getElementById("aceites").checked = true;
                hideSeccion('aceite__cuestionario')
        }
        //GRASAS
        document.getElementById("anms_manteca").checked=data.anms_manteca;
        document.getElementById("anms_margarina").checked=data.anms_margarina;
        document.getElementById("anms_mayonesa").checked=data.anms_mayonesa;
        document.getElementById("anms_otrasgrasas").value=data.anms_otrasgrasas;
        if (data.anms_manteca | data.anms_margarina | data.anms_mayonesa | data.anms_otrasgrasas!='') {
            document.getElementById("grasas").checked = true;
            hideSeccion('grasas__cuestionario')
        }
        //SALES
        document.getElementById("anms_salcomun").checked=data.anms_salcomun;
        document.getElementById("anms_saldieta").checked=data.anms_saldieta;
        document.getElementById("anms_sales").value=data.anms_sales;
        if (data.anms_salcomun | data.anms_saldieta | data.anms_sales!='') {
            document.getElementById("sales").checked = true;
            hideSeccion('sal__cuestionario')
        }
        //BEBIDAS INFUSIONES
        document.getElementById("anms_bebidas").value=data.anms_bebidas;
        if (data.anms_bebidas!='') {
            document.getElementById("bebidas").checked = true;
            hideSeccion('bebidas__cuestionario')
        }
        //ALCOHOL
        document.getElementById("anms_cantvino").value=data.anms_cantvino;
        document.getElementById("anms_cantcerveza").value=data.anms_cantcerveza;
        document.getElementById("anms_cantbebblancas").value=data.anms_cantbebblancas;
        if (data.anms_cantvino!='' | data.anms_cantcerveza!='' | data.anms_cantbebblancas!='') {
            document.getElementById("alcohol").checked = true;
            hideSeccion('alcohol__cuestionario')
        }
        if (data.anms_cantvino!='') {
            document.getElementById("check-12").checked = true;
            comprobarCampos("check-12")
        }
        if (data.anms_cantcerveza!='') {
            document.getElementById("check-13").checked = true;
            comprobarCampos("check-13")
        }
        if (data.anms_cantbebblancas!='') {
            document.getElementById("check-14").checked = true;
            comprobarCampos("check-14")
        }
        //COMIDAS
        document.getElementById("anms_desayuno").value=data.anms_desayuno;
        document.getElementById("anms_mediamanana").value=data.anms_mediamanana;
        document.getElementById("anms_almuerzo").value=data.anms_almuerzo;
        document.getElementById("anms_merienda").value=data.anms_merienda;
        document.getElementById("anms_mediatarde").value=data.anms_mediatarde;
        document.getElementById("anms_cena").value=data.anms_cena;
        if (data.anms_desayuno!='' | data.anms_mediamanana!='' | data.anms_almuerzo!='' |
            data.anms_merienda!='' | data.anms_mediatarde!='' | data.anms_cena!='') {
                document.getElementById("comidas").checked = true;
                hideSeccion('comidas__cuestionario')
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
             checkboxs.item(i).checked=false;
             //checkboxs.item(i).disabled=true;
            }
            else
            {
             divs.item(i).setAttribute("class","democlass" + " " + atributes);
             //checkboxs.item(i).disabled=false;
            }

        }
        
     }
}

    function hideSeccion(id){
        let carne = document.getElementById(id);
        if (carne.style.display === "none") {
            carne.style.display = "grid";
          } else {
            carne.style.display = "none";
            }
        
            try{
                let titulo = document.getElementsByName(id);
                if (carne.style.display === "none") {
                    titulo[0].style.backgroundColor = "var(--grisOscuro)";
                } 
                else {
                titulo[0].style.backgroundColor = "var(--primario)";
                }
            }
            catch{
        
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