export const consultasquerys = {
//-------------------------------------------------CONSULTAS------------------------------------------------------
registrarconsulta: "INSERT INTO consulta(cons_idturno,cons_observaciones) "+
"VALUES (@cons_idturno,@cons_observaciones)",
getconsultaxturno: "SELECT * FROM consulta where cons_idturno=@cons_idturno",

//-------------------------------------------------CONSULTA INICIAL------------------------------------------------------

//FICHA INICIAL
    getFichaInicial: "SELECT *,convert(varchar,hc_fechaprimerconsulta,23) as fecharegistro,"+
                        "convert(varchar,hc_fechalaboratorios,23) as fechalab "+
                        "from historia_clinica where hc_nrohc=@hc_nrohc",
    registrarFichaInicial: "INSERT INTO historia_clinica(hc_nrohc,hc_fechaprimerconsulta,hc_diagnostico,hc_antecedentes,"+
                                                        "hc_medicacion,hc_ocupacion,hc_actividadfisica,hc_fechalaboratorios,"+
                                                        "hc_laboratorios,hc_antecedentesnutricion,hc_edaddieta,hc_dieta,"+
                                                        "hc_pesoactual,hc_BMI,hc_PD,hc_Pmin,hc_Pmincuando,hc_GC,hc_MM,hc_CC1,"+
                                                        "hc_CC2,hc_CC3,hc_formula,hc_talla,hc_PH,hc_PBMI,hc_Pmax,hc_Pmaxcuando,"+
                                                        "hc_GV,hc_PBI,hc_ajuste,hc_medajuste) "+
                            "VALUES (@hc_nrohc,@hc_fechaprimerconsulta,@hc_diagnostico,@hc_antecedentes,@hc_medicacion,"+
                                    "@hc_ocupacion,@hc_actividadfisica,@hc_fechalaboratorios,@hc_laboratorios,"+
                                    "@hc_antecedentesnutricion,@hc_edaddieta,@hc_dieta,@hc_pesoactual,@hc_BMI,@hc_PD,@hc_Pmin,"+
                                    "@hc_Pmincuando,@hc_GC,@hc_MM,@hc_CC1,@hc_CC2,@hc_CC3,@hc_formula,@hc_talla,@hc_PH,@hc_PBMI,"+
                                    "@hc_Pmax,@hc_Pmaxcuando,@hc_GV,@hc_PBI,@hc_ajuste,@hc_medajuste)",

    actualizarFichaInicial: "UPDATE historia_clinica SET hc_fechaprimerconsulta = getdate(),hc_diagnostico = @hc_diagnostico"+
    ",hc_antecedentes = @hc_antecedentes,hc_medicacion = @hc_medicacion,hc_ocupacion = @hc_ocupacion,hc_actividadfisica = @hc_actividadfisica,hc_fechalaboratorios = @hc_fechalaboratorios"+
    ",hc_laboratorios = @hc_laboratorios,hc_antecedentesnutricion = @hc_antecedentesnutricion,hc_edaddieta = @hc_edaddieta,hc_dieta = @hc_dieta"+
    ",hc_pesoactual = @hc_pesoactual,hc_BMI = @hc_BMI,hc_PD = @hc_PD,hc_Pmin = @hc_Pmin,hc_Pmincuando = @hc_Pmincuando,hc_GC = @hc_GC,hc_MM = @hc_MM"+
    ",hc_CC1 = @hc_CC1,hc_CC2 = @hc_CC2,hc_CC3 = @hc_CC3,hc_formula = @hc_formula,hc_talla = @hc_talla,hc_PH = @hc_PH,hc_PBMI = @hc_PBMI,hc_Pmax = @hc_Pmax"+
    ",hc_Pmaxcuando = @hc_Pmaxcuando,hc_GV = @hc_GV,hc_PBI = @hc_PBI,hc_ajuste = @hc_ajuste,hc_medajuste = @hc_medajuste WHERE hc_nrohc=@hc_nrohc",
    
    
//ANAMNESIS
    getItemsAnamnesis: "select item_id,tipoitem_descripcion,item_descripcion "+
                       "from item_anamnesis inner join tipoitem_anamnesis on item_tipo=tipoitem_id "+
                       "order by item_tipo",
    
    registrarAnamnesis: "INSERT INTO [dbo].[anamnesis_paciente] (anms_nrohc,anms_fecharegistro,"+
                            "anms_vacunacongrasa,anms_vacunasingrasa,anms_polloconpiel,anms_pollosinpiel,anms_pescadorio,"+
                            "anms_pescadomar,anms_cerdo,anms_higado,anms_rinon,anms_otrasviceras,anms_fiambres,"+
                            "anms_embutidos,anms_salchichas,anms_chorizo,anms_morcilla,"+
                            "anms_lecheentera,anms_lechedescremada,anms_yogurtentero,anms_yogurtdescremada,anms_quesoduro,"+
                            "anms_quesosemiblando,anms_quesountable,anms_otrosquesos,anms_flan,anms_licuados,"+
                            "anms_salsablanca,anms_prepconleche,"+                            
                            "anms_huevohervido,anms_huevofrito,anms_prephuevo,"+                            
                            "anms_vegetalesfrescos,anms_vegetalesenlatados,anms_frutas,anms_cereales,anms_pastas,"+
                            "anms_vegfeculentos,anms_legumbres,"+                            
                            "anms_panblanco,anms_pannegro,anms_galletassaladas,anms_galletasagua,anms_galletasdulces,"+
                            "anms_galletasintegrales,anms_facturas,anms_tortas,anms_otrasmasas,"+                            
                            "anms_azucar,anms_mermelada,anms_gelatina,anms_miel,anms_dulces,anms_jugos,anms_golosinas,"+
                            "anms_gaseosas,anms_edulcorante,anms_otrasazucares,"+                            
                            "anms_aceitegirasol,anms_aceitemaiz,anms_aceiteoliva,anms_otrosaceites,anms_aceitecrudo,"+
                            "anms_aceitefritura,anms_manteca,anms_margarina,anms_mayonesa,anms_otrasgrasas,"+                            
                            "anms_salcomun,anms_saldieta,anms_sales,"+                            
                            "anms_bebidas,anms_cantvino,anms_cantcerveza,anms_cantbebblancas,"+                            
                            "anms_desayuno,anms_mediamanana,anms_almuerzo,anms_merienda,anms_mediatarde,anms_cena) "+
                        "VALUES(@anms_nrohc,getdate(),@anms_vacunacongrasa,@anms_vacunasingrasa,@anms_polloconpiel,"+
                            "@anms_pollosinpiel,@anms_pescadorio,@anms_pescadomar,@anms_cerdo,@anms_higado,@anms_rinon,"+
                            "@anms_otrasviceras,@anms_fiambres,@anms_embutidos,@anms_salchichas,@anms_chorizo,@anms_morcilla,"+
                            "@anms_lecheentera,@anms_lechedescremada,@anms_yogurtentero,@anms_yogurtdescremada,"+
                            "@anms_quesoduro,@anms_quesosemiblando,@anms_quesountable,@anms_otrosquesos,@anms_flan,"+
                            "@anms_licuados,@anms_salsablanca,@anms_prepconleche"+
                            ",@anms_huevohervido,@anms_huevofrito,@anms_prephuevo,"+
                            "@anms_vegetalesfrescos,@anms_vegetalesenlatados,@anms_frutas,@anms_cereales,@anms_pastas,"+
                            "@anms_vegfeculentos,@anms_legumbres,"+
                            "@anms_panblanco,@anms_pannegro,@anms_galletassaladas,@anms_galletasagua,@anms_galletasdulces,"+
                            "@anms_galletasintegrales,@anms_facturas,@anms_tortas,@anms_otrasmasas,"+
                            "@anms_azucar,@anms_mermelada,@anms_gelatina,@anms_miel,@anms_dulces,@anms_jugos,"+
                            "@anms_golosinas,@anms_gaseosas,@anms_edulcorante,@anms_otrasazucares,"+
                            "@anms_aceitegirasol,@anms_aceitemaiz,@anms_aceiteoliva,@anms_otrosaceites,@anms_aceitecrudo,"+
                            "@anms_aceitefritura,@anms_manteca,@anms_margarina,@anms_mayonesa,@anms_otrasgrasas,"+
                            "@anms_salcomun,@anms_saldieta,@anms_sales,"+
                            "@anms_bebidas,@anms_cantvino,@anms_cantcerveza,@anms_cantbebblancas,"+
                            "@anms_desayuno,@anms_mediamanana,@anms_almuerzo,@anms_merienda,@anms_mediatarde,@anms_cena)",
                            
    getAnamnesisXHC: "select * from anamnesis_paciente where anms_nrohc=@anms_nrohc",


    actualizarAnamnesis: "UPDATE anamnesis_paciente SET anms_fecharegistro = getdate(),anms_vacunacongrasa = @anms_vacunacongrasa,"+
    "anms_vacunasingrasa = @anms_vacunasingrasa,anms_polloconpiel = @anms_polloconpiel,anms_pollosinpiel = @anms_pollosinpiel,anms_pescadorio = @anms_pescadorio,anms_pescadomar = @anms_pescadomar,"+
    "anms_cerdo = @anms_cerdo,anms_higado = @anms_higado,anms_rinon = @anms_rinon,anms_otrasviceras = @anms_otrasviceras,anms_fiambres = @anms_fiambres,anms_embutidos = @anms_embutidos,"+
    "anms_salchichas = @anms_salchichas,anms_chorizo = @anms_chorizo,anms_morcilla = @anms_morcilla,anms_lecheentera = @anms_lecheentera,anms_lechedescremada = @anms_lechedescremada,"+
    "anms_yogurtentero = @anms_yogurtentero,anms_yogurtdescremada = @anms_yogurtdescremada,anms_quesoduro = @anms_quesoduro,anms_quesosemiblando = @anms_quesosemiblando,anms_quesountable = @anms_quesountable,"+
    "anms_otrosquesos = @anms_otrosquesos,anms_flan = @anms_flan,anms_licuados = @anms_licuados ,anms_salsablanca = @anms_salsablanca,anms_prepconleche = @anms_prepconleche,"+
    "anms_huevohervido = @anms_huevohervido,anms_huevofrito = @anms_huevofrito,anms_prephuevo = @anms_prephuevo,anms_vegetalesfrescos = @anms_vegetalesfrescos,anms_vegetalesenlatados = @anms_vegetalesenlatados,"+
    "anms_frutas = @anms_frutas,anms_cereales = @anms_cereales,anms_pastas = @anms_pastas,anms_vegfeculentos = @anms_vegfeculentos,anms_legumbres = @anms_legumbres,anms_panblanco = @anms_panblanco,"+
    "anms_pannegro = @anms_pannegro,anms_galletassaladas = @anms_galletassaladas,anms_galletasagua = @anms_galletasagua,anms_galletasdulces = @anms_galletasdulces,anms_galletasintegrales = @anms_galletasintegrales,"+
    "anms_facturas = @anms_facturas,anms_tortas = @anms_tortas,anms_otrasmasas = @anms_otrasmasas,anms_azucar = @anms_azucar,anms_mermelada = @anms_mermelada,anms_gelatina = @anms_gelatina,"+
    "anms_miel = @anms_miel,anms_dulces = @anms_dulces,anms_jugos = @anms_jugos,anms_golosinas = @anms_golosinas,anms_gaseosas = @anms_gaseosas,anms_edulcorante = @anms_edulcorante,"+
    "anms_otrasazucares = @anms_otrasazucares,anms_aceitegirasol = @anms_aceitegirasol,anms_aceitemaiz = @anms_aceitemaiz,anms_aceiteoliva = @anms_aceiteoliva,anms_otrosaceites = @anms_otrosaceites,"+
    "anms_aceitecrudo = @anms_aceitecrudo,anms_aceitefritura = @anms_aceitefritura,anms_manteca = @anms_manteca,anms_margarina = @anms_margarina,anms_mayonesa = @anms_mayonesa,"+
    "anms_otrasgrasas = @anms_otrasgrasas,anms_salcomun = @anms_salcomun,anms_saldieta = @anms_saldieta,anms_sales = @anms_sales,anms_bebidas = @anms_bebidas,anms_cantvino = @anms_cantvino,"+
    "anms_cantcerveza = @anms_cantcerveza,anms_cantbebblancas = @anms_cantbebblancas,anms_desayuno = @anms_desayuno,anms_mediamanana = @anms_mediamanana,anms_almuerzo = @anms_almuerzo,"+
    "anms_merienda = @anms_merienda,anms_mediatarde = @anms_mediatarde,anms_cena = @anms_cena WHERE anms_nrohc = @anms_nrohc",



//HABITOS
    getHabitos: "SELECT * FROM habito",
    registrarHabitos: "INSERT INTO habito (hab_descripcion) VALUES (@hab_descripcion)",
    registrarHabitoPaciente: "INSERT INTO habitos_paciente (habpac_nrohc, habpac_fecharegistro,"+
    "habpac_observaciones, habpac_idconsulta) VALUES (@habpac_nrohc, getDate(), @habpac_observaciones,"+
    "@habpac_idconsulta)",
    registrarDetalleHabito: "INSERT INTO detalle_habitos (dhabpac_id, dhabpac_idhabito, dhabpac_realiza, dhabpac_observaciones) "+
    "VALUES (@dhabpac_id, @dhabpac_idhabito, 1, @dhabpac_observaciones)",

    getHabitosXHC: "select top 1 * from habitos_paciente where habpac_nrohc=1000"+
                    " order by habpac_fecharegistro desc",

    actualizarHabitos: "UPDATE habito SET hab_descripcion = @hab_descripcion WHERE habpac_nrohc = @habpac_nrohc",
    
    actualizarHabitoPaciente:"UPDATE habitos_paciente SET habpac_fecharegistro = @getDate(),"+
    "habpac_observaciones = @habpac_observaciones, habpac_idconsulta = @habpac_idconsulta WHERE "+
    "habpac_nrohc = @habpac_nrohc AND habpac_id= @habpac_id",

    getultimoidhabito: "SELECT max(hab_id) as id_hab from habito",


    actualizarDetalleHabito: "UPDATE detalle_habitos SET dhabpac_id = @dhabpac_id , dhabpac_linea = @dhabpac_linea, dhabpac_idhabito = @dhabpac_idhabito,"+
    " dhabpac_realiza = @dhabpac_realiza, dhabpac_observaciones = @dhabpac_observaciones WHERE "+
    "dhabpac_id = @dhabpac_id AND dhabpac_linea = @dhabpac_linea AND dhabpac_idhabito = @dhabpac_idhabito"

//ANTROPOMETRÍA

//-----------------------------------------------------------------------------------------------------------------------


}