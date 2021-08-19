function crearAnamnesis(){
    if (validarDatos() == false) {
        return false;
    } 
    else {
    //var anms_nrohc = document.getElementById("anms_nrohc").value;
    var anms_fechaRegistro =    Date.now();
    var anms_vacunacongrasa =   document.getElementById("anms_vacunacongrasa").value;
    var anms_vacunasingrasa =   document.getElementById("anms_vacunasingrasa").value;
    var anms_polloconpiel =     document.getElementById("anms_polloconpiel").value;
    var anms_pollosinpiel =     document.getElementById("anms_pollosinpiel").value;
    var anms_pescadorio =       document.getElementById("anms_pescadorio").value;
    var anms_pescadomar =       document.getElementById("anms_pescadomar").value;
    var anms_cerdo =            document.getElementById("anms_cerdo").value;
    var anms_higado =           document.getElementById("anms_higado").value;
    var anms_rinon =            document.getElementById("anms_rinon").value;
    var anms_otrasviceras =     document.getElementById("anms_otrasviceras").value;
    var anms_fiambres =         document.getElementById("anms_fiambres").value;
    var anms_embutidos =        document.getElementById("anms_embutidos").value;
    var anms_salchichas =       document.getElementById("anms_salchichas").value;
    var anms_chorizo =          document.getElementById("anms_chorizo").value;
    var anms_morcilla =         document.getElementById("anms_morcilla").value;
    var anms_lecheentera =      document.getElementById("anms_lecheentera").value;
    var anms_lechedescremada =  document.getElementById("anms_lechedescremada").value;
    var anms_yogurtentero =     document.getElementById("anms_yogurtentero").value;
    var anms_yogurtdescremada = document.getElementById("anms_yogurtdescremada").value;
    var anms_quesoduro =        document.getElementById("anms_quesoduro").value;
    var anms_quesosemiblando =  document.getElementById("anms_quesosemiblando").value;
    var anms_quesountable =     document.getElementById("anms_quesountable").value;
    var anms_flan =             document.getElementById("anms_flan").value;
    var anms_licuados =         document.getElementById("anms_licuados").value;
    var anms_salsablanca =      document.getElementById("anms_salsablanca").value;
    var anms_prepconleche =     document.getElementById("anms_prepconleche").value;
    var anms_huevohervido =     document.getElementById("anms_huevohervido").value;
    var anms_huevofrito =       document.getElementById("anms_huevofrito").value;
    var anms_prephuevo =        document.getElementById("anms_prephuevo").value;
    var anms_vegetalesfrescos = document.getElementById("anms_vegetalesfrescos").value;
    var anms_vegetalesenlatados =  document.getElementById("anms_vegetalesenlatados").value;
    var anms_frutas =           document.getElementById("anms_frutas").value;
    var anms_cereales =         document.getElementById("anms_cereales").value;
    var anms_pastas =           document.getElementById("anms_pastas").value;
    var anms_vegfeculentos =    document.getElementById("anms_vegfeculentos").value;
    var anms_legumbres =        document.getElementById("anms_legumbres").value;
    var anms_panblanco =        document.getElementById("anms_panblanco").value;
    var anms_pannegro =         document.getElementById("anms_pannegro").value;
    var anms_galletassaladas =  document.getElementById("anms_galletassaladas").value;
    var anms_galletasagua =     document.getElementById("anms_galletasagua").value;
    var anms_galletasdulces =   document.getElementById("anms_galletasdulces").value;
    var anms_galletasintegrales =  document.getElementById("anms_galletasintegrales").value;
    var anms_facturas =         document.getElementById("anms_facturas").value;
    var anms_tortas =           document.getElementById("anms_tortas").value;
    var anms_otrasmasas =       document.getElementById("anms_otrasmasas").value;
    var anms_azucar =           document.getElementById("anms_azucar").value;
    var anms_mermelada =        document.getElementById("anms_mermelada").value;
    var anms_gelatina =         document.getElementById("anms_gelatina").value;
    var anms_miel =             document.getElementById("anms_miel").value;
    var anms_dulces =           document.getElementById("anms_dulces").value;
    var anms_jugos =            document.getElementById("anms_jugos").value;
    var anms_golosinas =        document.getElementById("anms_golosinas").value;
    var anms_gaseosas =         document.getElementById("anms_gaseosas").value;
    var anms_edulcorante =      document.getElementById("anms_edulcorante").value;
    var anms_otrasazucares =    document.getElementById("anms_otrasazucares").value;
    var anms_aceitegirasol =    document.getElementById("anms_aceitegirasol").value;
    var anms_aceitemaiz =       document.getElementById("anms_aceitemaiz").value;
    var anms_aceiteoliva =      document.getElementById("anms_aceiteoliva").value;
    var anms_otrosaceites =     document.getElementById("anms_otrosaceites").value;
    var anms_aceitecrudo =      document.getElementById("anms_aceitecrudo").value;
    var anms_aceitefritura =    document.getElementById("anms_aceitefritura").value;
    var anms_manteca =          document.getElementById("anms_manteca").value;
    var anms_margarina =        document.getElementById("anms_margarina").value;
    var anms_mayonesa =         document.getElementById("anms_mayonesa").value;
    var anms_otrasgrasas =      document.getElementById("anms_otrasgrasas").value;
    var anms_salcomun =         document.getElementById("anms_salcomun").value;
    var anms_saldieta =         document.getElementById("anms_saldieta").value;
    var anms_sales =            document.getElementById("anms_sales").value;
    var anms_bebidas =          document.getElementById("anms_bebidas").value;
    var anms_cantvino =         document.getElementById("anms_cantvino").value;
    var anms_cantcerveza =      document.getElementById("anms_cantcerveza").value;
    var anms_cantcerveza =      document.getElementById("anms_cantcerveza").value;
    var anms_desayuno =         document.getElementById("anms_desayuno").value;
    var anms_mediamanana =      document.getElementById("anms_mediamanana").value;
    var anms_almuerzo =         document.getElementById("anms_almuerzo").value;
    var anms_merienda =         document.getElementById("anms_merienda").value;
    var anms_cena =             document.getElementById("anms_cena").value;

    var anms_vacuna =           document.getElementById("anms_cena").value;
    var anms_pollo =            document.getElementById("anms_cena").value;
    var anms_pescado =          document.getElementById("anms_cena").value;
    var anms_visceras =         document.getElementById("anms_cena").value;
    var anms_leche =            document.getElementById("anms_cena").value;
    var anms_yogurt =           document.getElementById("anms_cena").value;
    var anms_queso =            document.getElementById("anms_cena").value;
    var anms_pan =              document.getElementById("anms_cena").value;
    var anms_galletitas =       document.getElementById("anms_cena").value;
    var anms_masas =            document.getElementById("anms_cena").value;
    var anms_vino =             document.getElementById("anms_cena").value;
    var anms_cerveza =          document.getElementById("anms_cena").value;
    var anms_bebidablanca =     document.getElementById("anms_cena").value;


    const post = {
        //anms_id:             anms_id,
        anms_nrohc:             anms_nrohc,
        anms_fechaRegistro:     anms_fechaRegistro,
        anms_vacunacongrasa:    anms_vacunacongrasa,
        anms_vacunasingrasa:    anms_vacunasingrasa,
        anms_polloconpiel:      anms_polloconpiel,
        anms_pollosinpiel:      anms_pollosinpiel,
        anms_pescadorio:        anms_pescadorio,
        anms_pescadomar:        anms_pescadomar,
        anms_cerdo:             anms_cerdo,
        anms_higado:            anms_higado,
        anms_rinon:             anms_rinon,
        anms_otrasviceras:      anms_otrasviceras,
        anms_fiambres:          anms_fiambres,
        anms_embutidos:         anms_embutidos,
        anms_salchichas:        anms_salchichas,
        anms_chorizo:           anms_chorizo,
        anms_morcilla:          anms_morcilla,
        anms_lecheentera:       anms_lecheentera,
        anms_lechedescremada:   anms_lechedescremada,
        anms_yogurtentero:      anms_yogurtentero,
        anms_yogurtdescremada:  anms_yogurtdescremada,
        anms_quesoduro:         anms_quesoduro,
        anms_quesosemiblando:   anms_quesosemiblando,
        anms_quesountable:      anms_quesountable,
        anms_flan:              anms_flan,
        anms_licuados:          anms_licuados,
        anms_salsablanca:       anms_salsablanca,
        anms_prepconleche:      anms_prepconleche,
        anms_huevohervido:      anms_huevohervido,
        anms_huevofrito:        anms_huevofrito,
        anms_prephuevo:         anms_prephuevo,
        anms_vegetalesfrescos:  anms_vegetalesfrescos,
        anms_vegetalesenlatados:    anms_vegetalesenlatados,
        anms_frutas:            anms_frutas,
        anms_cereales:          anms_cereales,
        anms_pastas:            anms_pastas,
        anms_vegfeculentos:     anms_vegfeculentos,
        anms_legumbres:         anms_legumbres,
        anms_panblanco:         anms_panblanco,
        anms_pannegro:          anms_pannegro,
        anms_galletassaladas:   anms_galletassaladas,
        anms_galletasagua:      anms_galletasagua,
        anms_galletasdulces:    anms_galletasdulces,
        anms_galletasintegrales:    anms_galletasintegrales,
        anms_facturas:          anms_facturas,
        anms_tortas:            anms_tortas,
        anms_otrasmasas:        anms_otrasmasas,
        anms_azucar:            anms_azucar,
        anms_mermelada:         anms_mermelada,
        anms_gelatina:          anms_gelatina,
        anms_miel:              anms_miel,
        anms_dulces:            anms_dulces,
        anms_jugos:             anms_jugos,
        anms_golosinas:         anms_golosinas,
        anms_gaseosas:          anms_gaseosas,
        anms_edulcorante:       anms_edulcorante,
        anms_otrasazucares:     anms_otrasazucares,
        anms_aceitegirasol:     anms_aceitegirasol,
        anms_aceitemaiz:        anms_aceitemaiz,
        anms_aceiteoliva:       anms_aceiteoliva,
        anms_otrosaceites:      anms_otrosaceites,
        anms_aceitecrudo:       anms_aceitecrudo,
        anms_aceitefritura:     anms_aceitefritura,
        anms_manteca:           anms_manteca,
        anms_margarina:         anms_margarina,
        anms_mayonesa:          anms_mayonesa,
        anms_otrasgrasas:       anms_otrasgrasas,
        anms_salcomun:          anms_salcomun,
        anms_saldieta:          anms_saldieta,
        anms_sales:             anms_sales,
        anms_bebidas:           anms_bebidas,
        anms_cantvino:          anms_cantvino,
        anms_cantcerveza:       anms_cantcerveza,
        anms_cantbebblancas:    anms_cantbebblancas,
        anms_desayuno:          anms_desayuno,
        anms_mediamanana:       anms_mediamanana,
        anms_almuerzo:          anms_almuerzo,
        anms_merienda:          anms_merienda,
        anms_cena:              anms_cena,

        anms_vacuna:            anms_vacuna,
        anms_pollo:             anms_pollo,
        anms_pescado:           anms_pescado,
        anms_visceras:          anms_visceras,
        anms_leche:             anms_leche,
        anms_yogurt:            anms_yogurt,
        anms_queso:             anms_queso,
        anms_pan:               anms_pan,
        anms_galletitas:        anms_galletitas,
        anms_masas:             anms_masas,
        anms_vino:              anms_vino,
        anms_cerveza:           anms_cerveza,
        anms_bebidablanca:      anms_bebidablanca,

    }
    try {
        console.log(JSON.stringify(post));
        fetch("http://localhost:3000/registrarAnamnesis",{
        method:'POST',
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json"
        }
        }).then(res=>res.json())
        .then(data=>console.log(data))
        swal("Anamnesis Registrado con Éxito",{
            icon: "success"})
        location.href ="./buscarpaciente"
    } catch (error) {
        swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
    }
    }
}

function validarDatos(){
    var incompleto = false;
    var correccion = "Datos incompletos o inválidos: " + "\n";

    if(document.getElementById("vacuna").value != "")
    {
        if(document.getElementById("anms_vacunacongrasa").value == "") AND (document.getElementById("anms_vacunasingrasa").value == "")
        {
            correccion = correccion + "*Vacuna" + "\n"
            incompleto = true;
        }
    }

    if(document.getElementById("pollo").value != "")
    {
        if(document.getElementById("anms_polloconpiel").value == "") AND (document.getElementById("anms_pollosinpiel").value == "")
        {
            correccion = correccion + "*Pollo" + "\n"
            incompleto = true;
        }
    }
    if(document.getElementById("pescado").value != "")
    {
        if(document.getElementById("anms_pescadorio").value == "") AND (document.getElementById("anms_pescadomar").value == "")
        {
            correccion = correccion + "*Pescado" + "\n"
            incompleto = true;
        }
    }
    if(document.getElementById("visceras").value != "")
    {
        if(document.getElementById("amns_higado").value == "") AND (document.getElementById("amns_rinon").value == "") & (document.getElementById("anms_otrasviceras").value == "")
        {
            correccion = correccion + "*Visceras" + "\n"
            incompleto = true;
        }
    }
    if(document.getElementById("leche").value != "")
    {
        if(document.getElementById("anms_lecheentera").value == "") AND (document.getElementById("anms_lechedescremada").value == "")
        {
            correccion = correccion + "*Leche" + "\n"
            incompleto = true;
        }
    }
    if(document.getElementById("yogurt").value != "")
    {
        if(document.getElementById("anms_yogurtentero").value == "") AND (document.getElementById("anms_yogurtdescremada").value == "")
        {
            correccion = correccion + "*Yogurt" + "\n"
            incompleto = true;
        }
    }
    if(document.getElementById("queso").value != "")
    {
        if(document.getElementById("anms_quesoduro").value == "") AND (document.getElementById("anms_quesosemiblando").value == "") & (document.getElementById("anms_quesountable").value == "")
        {
            correccion = correccion + "*Queso" + "\n"
            incompleto = true;
        }
    }
    if(document.getElementById("pan").value != "")
    {
        if(document.getElementById("anms_panblanco").value == "") AND (document.getElementById("anms_pannegro").value == "")
        {
            correccion = correccion + "*Pollo" + "\n"
            incompleto = true;
        }
    }
    if(document.getElementById("galletitas").value != "")
    {
        if(document.getElementById("anms_galletassaladas").value == "") AND (document.getElementById("anms_galletasagua").value == "") & (document.getElementById("anms_galletasdulces").value == "") & (document.getElementById("anms_galletasintegrales").value == "")
        {
            correccion = correccion + "*Galletas" + "\n"
            incompleto = true;
        }
    }
    if(document.getElementById("masas").value != "")
    {
        if(document.getElementById("anms_facturas").value == "") AND (document.getElementById("anms_tortas").value == "") & (document.getElementById("anms_otrasmasas").value == "")
        {
            correccion = correccion + "*Masas" + "\n"
            incompleto = true;
        }
    }
    if(document.getElementById("vino").value != "")
    {
        if(document.getElementById("anms_cantvino").value == "")
        {
            correccion = correccion + "*Vino" + "\n"
            incompleto = true;
        }
    }
    if(document.getElementById("cerveza").value != "")
    {
        if(document.getElementById("anms_cantcerveza").value == "")
        {
            correccion = correccion + "*Cerveza" + "\n"
            incompleto = true;
        }
    }
    if(document.getElementById("bebidablanca").value != "")
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