export const consultasquerys = {
//-------------------------------------------------CONSULTAS---------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------    
    //Consultas------------------------------------------------------------------------------------------------
    getconsultaxturno: "SELECT * FROM consulta c left join turno t on t.turno_id=c.cons_idturno "+
                        "LEFT JOIN habitos_paciente h on h.habpac_idconsulta=c.cons_id "+
                        "where cons_idturno=@cons_idturno order by cons_id desc",
    getconsultaxnrohc: "select * from turno inner join consulta on consulta.cons_idturno=turno.turno_id "+
                        "where turno.turno_nrohc=@turno_nrohc order by cons_id desc",    
                        
    getconsultaxid: "select cons_id,cons_idturno,cons_observaciones,"+
        "case when cons_edad is null then year(turno_fecha)-year(pac_fechanacimiento) else cons_edad end as cons_edad,"+
        "case when cons_peso is null then hc_pesoactual else cons_peso end as cons_peso,"+
        "case when cons_talla is null then hc_talla else cons_talla end as cons_talla,"+
        "case when cons_IMC is null then hc_BMI else cons_IMC end as cons_IMC,"+
        "case when cons_CCM is null then hc_CC1 else cons_CCM end as cons_CCM,"+
        "case when cons_CCU is null then hc_CC2 else cons_CCU end as cons_CCU,"+
        "case when cons_CCP is null then hc_CC3 else cons_CCP end as cons_CCP,"+
        "case when cons_GC is null then hc_GC else cons_GC end as cons_GC,"+
        "case when cons_GV is null then hc_GV else cons_GV end as cons_GV,"+
        "case when cons_M is null then hc_MM else cons_M end as cons_M,"+
        "case when cons_PBI is null then hc_PBI else cons_PBI end as cons_PBI "+
        "from consulta inner join turno on turno_id=cons_idturno "+
        "inner join historia_clinica on turno_nrohc=hc_nrohc "+
        "inner join paciente on pac_nrohc=hc_nrohc "+
        "where cons_id=@cons_id",
    //Altas----------------------------------------------------------------------------------------------------
    registrarconsulta: "INSERT INTO consulta(cons_idturno,cons_observaciones) "+
                        "VALUES (@cons_idturno,@cons_observaciones)",

    registrarconsulta2: "INSERT INTO consulta(cons_idturno,cons_observaciones,cons_edad,cons_peso,cons_talla,"+
                        "cons_IMC,cons_CCM,cons_CCU,cons_CCP,cons_GC,cons_GV,cons_M,cons_PBI) "+
                        "VALUES (@cons_idturno,@cons_observaciones,@cons_edad,@cons_peso,"+
                        "@cons_talla,@cons_IMC,@cons_CCM,@cons_CCU,"+
                        "@cons_CCP,@cons_GC,@cons_GV,@cons_M,@cons_PBI)",
    //Bajas----------------------------------------------------------------------------------------------------
    
    //Modificaciones-------------------------------------------------------------------------------------------


//-------------------------------------------------FICHA INICIAL------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
    //Consultas-------------------------------------------------------------------------------------------------
    getFichaInicial: "SELECT *,convert(varchar,hc_fechaprimerconsulta,23) as fecharegistro,"+
                        "convert(varchar,hc_fechalaboratorios,23) as fechalab "+
                        "from historia_clinica where hc_nrohc=@hc_nrohc",
    //Altas----------------------------------------------------------------------------------------------------
    registrarFichaInicial: "INSERT INTO historia_clinica(hc_nrohc,hc_fechaprimerconsulta,hc_diagnostico,"+
                                                        "hc_antecedentes,hc_medicacion,hc_ocupacion,"+
                                                        "hc_actividadfisica,hc_fechalaboratorios,"+
                                                        "hc_laboratorios,hc_antecedentesnutricion,hc_edaddieta,"+
                                                        "hc_dieta,hc_pesoactual,hc_BMI,hc_PD,hc_Pmin,"+
                                                        "hc_Pmincuando,hc_GC,hc_MM,hc_CC1,hc_CC2,hc_CC3,"+
                                                        "hc_formula,hc_talla,hc_PH,hc_PBMI,hc_Pmax,"+
                                                        "hc_Pmaxcuando,hc_GV,hc_PBI,hc_ajuste,hc_medajuste) "+
                            "VALUES (@hc_nrohc,@hc_fechaprimerconsulta,@hc_diagnostico,@hc_antecedentes,"+
                                    "@hc_medicacion,@hc_ocupacion,@hc_actividadfisica,@hc_fechalaboratorios,"+
                                    "@hc_laboratorios,@hc_antecedentesnutricion,@hc_edaddieta,@hc_dieta,"+
                                    "@hc_pesoactual,@hc_BMI,@hc_PD,@hc_Pmin,@hc_Pmincuando,@hc_GC,@hc_MM,"+
                                    "@hc_CC1,@hc_CC2,@hc_CC3,@hc_formula,@hc_talla,@hc_PH,@hc_PBMI,@hc_Pmax,"+
                                    "@hc_Pmaxcuando,@hc_GV,@hc_PBI,@hc_ajuste,@hc_medajuste)",
    //Bajas----------------------------------------------------------------------------------------------------
    //Modificaciones-------------------------------------------------------------------------------------------
    actualizarFichaInicial: "UPDATE historia_clinica "+
                            "SET hc_fechaprimerconsulta = getdate(),hc_diagnostico = @hc_diagnostico,"+
                                "hc_antecedentes = @hc_antecedentes,hc_medicacion = @hc_medicacion,"+
                                "hc_ocupacion = @hc_ocupacion,hc_actividadfisica = @hc_actividadfisica,"+
                                "hc_fechalaboratorios = @hc_fechalaboratorios,hc_laboratorios=@hc_laboratorios,"+
                                "hc_antecedentesnutricion = @hc_antecedentesnutricion,"+
                                "hc_edaddieta = @hc_edaddieta,hc_dieta=@hc_dieta,hc_pesoactual=@hc_pesoactual,"+
                                "hc_BMI=@hc_BMI,hc_PD=@hc_PD,hc_Pmin=@hc_Pmin,hc_Pmincuando=@hc_Pmincuando,"+
                                "hc_GC = @hc_GC,hc_MM = @hc_MM,hc_CC1 = @hc_CC1,hc_CC2=@hc_CC2,hc_CC3=@hc_CC3,"+
                                "hc_formula = @hc_formula,hc_talla = @hc_talla,hc_PH=@hc_PH,hc_PBMI=@hc_PBMI,"+
                                "hc_Pmax = @hc_Pmax,hc_Pmaxcuando=@hc_Pmaxcuando,hc_GV=@hc_GV,hc_PBI=@hc_PBI,"+
                                "hc_ajuste = @hc_ajuste,hc_medajuste = @hc_medajuste WHERE hc_nrohc=@hc_nrohc",
      
                                
//----------------------------------------------------ANAMNESIS-------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
    //Consultas-------------------------------------------------------------------------------------------------
    getItemsAnamnesis: "select item_id,tipoitem_descripcion,item_descripcion "+
                       "from item_anamnesis inner join tipoitem_anamnesis on item_tipo=tipoitem_id "+
                       "order by item_tipo",

    getAnamnesisXHC: "select * from anamnesis_paciente where anms_nrohc=@anms_nrohc",
    
    //Altas-----------------------------------------------------------------------------------------------------
    registrarAnamnesis: "INSERT INTO [dbo].[anamnesis_paciente] (anms_nrohc,anms_fecharegistro,"+
                            "anms_vacunacongrasa,anms_vacunasingrasa,anms_polloconpiel,anms_pollosinpiel,"+
                            "anms_pescadorio,anms_pescadomar,anms_cerdo,anms_higado,anms_rinon,"+
                            "anms_otrasviceras,anms_fiambres,anms_embutidos,anms_salchichas,anms_chorizo,"+
                            "anms_morcilla,"+
                            "anms_lecheentera,anms_lechedescremada,anms_yogurtentero,anms_yogurtdescremada,"+
                            "anms_quesoduro,anms_quesosemiblando,anms_quesountable,anms_otrosquesos,anms_flan,"+
                            "anms_licuados,anms_salsablanca,anms_prepconleche,"+                            
                            "anms_huevohervido,anms_huevofrito,anms_prephuevo,"+                            
                            "anms_vegetalesfrescos,anms_vegetalesenlatados,anms_frutas,anms_cereales,"+
                            "anms_pastas,anms_vegfeculentos,anms_legumbres,"+                            
                            "anms_panblanco,anms_pannegro,anms_galletassaladas,anms_galletasagua,"+
                            "anms_galletasdulces,anms_galletasintegrales,anms_facturas,anms_tortas,anms_otrasmasas,"+                            
                            "anms_azucar,anms_mermelada,anms_gelatina,anms_miel,anms_dulces,anms_jugos,"+
                            "anms_golosinas,anms_gaseosas,anms_edulcorante,anms_otrasazucares,"+                            
                            "anms_aceitegirasol,anms_aceitemaiz,anms_aceiteoliva,anms_otrosaceites,"+
                            "anms_aceitecrudo,anms_aceitefritura,anms_manteca,anms_margarina,anms_mayonesa,"+
                            "anms_otrasgrasas,"+                            
                            "anms_salcomun,anms_saldieta,anms_sales,"+                            
                            "anms_bebidas,anms_cantvino,anms_cantcerveza,anms_cantbebblancas,"+                            
                            "anms_desayuno,anms_mediamanana,anms_almuerzo,anms_merienda,anms_mediatarde,anms_cena) "+
                        "VALUES(@anms_nrohc,getdate(),@anms_vacunacongrasa,@anms_vacunasingrasa,"+
                                "@anms_polloconpiel,@anms_pollosinpiel,@anms_pescadorio,@anms_pescadomar,"+
                                "@anms_cerdo,@anms_higado,@anms_rinon,@anms_otrasviceras,@anms_fiambres,"+
                                "@anms_embutidos,@anms_salchichas,@anms_chorizo,@anms_morcilla,"+
                                "@anms_lecheentera,@anms_lechedescremada,@anms_yogurtentero,"+
                                "@anms_yogurtdescremada,@anms_quesoduro,@anms_quesosemiblando,"+
                                "@anms_quesountable,@anms_otrosquesos,@anms_flan,@anms_licuados,"+
                                "@anms_salsablanca,@anms_prepconleche"+
                                ",@anms_huevohervido,@anms_huevofrito,@anms_prephuevo,"+
                                "@anms_vegetalesfrescos,@anms_vegetalesenlatados,@anms_frutas,@anms_cereales,"+
                                "@anms_pastas,@anms_vegfeculentos,@anms_legumbres,"+
                                "@anms_panblanco,@anms_pannegro,@anms_galletassaladas,@anms_galletasagua,"+
                                "@anms_galletasdulces,@anms_galletasintegrales,@anms_facturas,@anms_tortas,@anms_otrasmasas,"+
                                "@anms_azucar,@anms_mermelada,@anms_gelatina,@anms_miel,@anms_dulces,@anms_jugos,"+
                                "@anms_golosinas,@anms_gaseosas,@anms_edulcorante,@anms_otrasazucares,"+
                                "@anms_aceitegirasol,@anms_aceitemaiz,@anms_aceiteoliva,@anms_otrosaceites,@anms_aceitecrudo,"+
                                "@anms_aceitefritura,@anms_manteca,@anms_margarina,@anms_mayonesa,@anms_otrasgrasas,"+
                                "@anms_salcomun,@anms_saldieta,@anms_sales,"+
                                "@anms_bebidas,@anms_cantvino,@anms_cantcerveza,@anms_cantbebblancas,"+
                                "@anms_desayuno,@anms_mediamanana,@anms_almuerzo,@anms_merienda,@anms_mediatarde,@anms_cena)",
   
    
    //Bajas-----------------------------------------------------------------------------------------------------
    //Modificaciones--------------------------------------------------------------------------------------------
    actualizarAnamnesis: "UPDATE anamnesis_paciente "+
                            "SET anms_fecharegistro = getdate(),anms_vacunacongrasa = @anms_vacunacongrasa,"+
                                "anms_vacunasingrasa = @anms_vacunasingrasa,anms_polloconpiel = @anms_polloconpiel,"+
                                "anms_pollosinpiel = @anms_pollosinpiel,anms_pescadorio = @anms_pescadorio,"+
                                "anms_pescadomar = @anms_pescadomar,anms_cerdo = @anms_cerdo,anms_higado = @anms_higado,"+
                                "anms_rinon = @anms_rinon,anms_otrasviceras = @anms_otrasviceras,anms_fiambres = @anms_fiambres,"+
                                "anms_embutidos = @anms_embutidos,anms_salchichas = @anms_salchichas,"+
                                "anms_chorizo = @anms_chorizo,anms_morcilla = @anms_morcilla,"+
                                "anms_lecheentera = @anms_lecheentera,anms_lechedescremada = @anms_lechedescremada,"+
                                "anms_yogurtentero = @anms_yogurtentero,anms_yogurtdescremada = @anms_yogurtdescremada,"+
                                "anms_quesoduro = @anms_quesoduro,anms_quesosemiblando = @anms_quesosemiblando,"+
                                "anms_quesountable = @anms_quesountable,anms_otrosquesos = @anms_otrosquesos,"+
                                "anms_flan = @anms_flan,anms_licuados = @anms_licuados ,anms_salsablanca = @anms_salsablanca,"+
                                "anms_prepconleche = @anms_prepconleche,"+
                                "anms_huevohervido = @anms_huevohervido,anms_huevofrito = @anms_huevofrito,"+
                                "anms_prephuevo = @anms_prephuevo,"+
                                "anms_vegetalesfrescos = @anms_vegetalesfrescos,"+
                                "anms_vegetalesenlatados = @anms_vegetalesenlatados,anms_frutas = @anms_frutas,"+
                                "anms_cereales = @anms_cereales,anms_pastas = @anms_pastas,"+
                                "anms_vegfeculentos = @anms_vegfeculentos,anms_legumbres = @anms_legumbres,"+
                                "anms_panblanco = @anms_panblanco,anms_pannegro = @anms_pannegro,"+
                                "anms_galletassaladas = @anms_galletassaladas,anms_galletasagua = @anms_galletasagua,"+
                                "anms_galletasdulces = @anms_galletasdulces,anms_galletasintegrales = @anms_galletasintegrales,"+
                                "anms_facturas = @anms_facturas,anms_tortas = @anms_tortas,anms_otrasmasas = @anms_otrasmasas,"+
                                "anms_azucar = @anms_azucar,anms_mermelada = @anms_mermelada,anms_gelatina = @anms_gelatina,"+
                                "anms_miel = @anms_miel,anms_dulces = @anms_dulces,anms_jugos = @anms_jugos,"+
                                "anms_golosinas = @anms_golosinas,anms_gaseosas = @anms_gaseosas,"+
                                "anms_edulcorante = @anms_edulcorante,anms_otrasazucares = @anms_otrasazucares,"+
                                "anms_aceitegirasol = @anms_aceitegirasol,anms_aceitemaiz = @anms_aceitemaiz,"+
                                "anms_aceiteoliva = @anms_aceiteoliva,anms_otrosaceites = @anms_otrosaceites,"+
                                "anms_aceitecrudo = @anms_aceitecrudo,anms_aceitefritura = @anms_aceitefritura,"+
                                "anms_manteca = @anms_manteca,anms_margarina = @anms_margarina,anms_mayonesa = @anms_mayonesa,"+
                                "anms_otrasgrasas = @anms_otrasgrasas,"+
                                "anms_salcomun = @anms_salcomun,anms_saldieta = @anms_saldieta,anms_sales = @anms_sales,"+
                                "anms_bebidas = @anms_bebidas,anms_cantvino = @anms_cantvino,anms_cantcerveza=@anms_cantcerveza,"+
                                "anms_cantbebblancas = @anms_cantbebblancas,"+
                                "anms_desayuno = @anms_desayuno,anms_mediamanana = @anms_mediamanana,"+
                                "anms_almuerzo = @anms_almuerzo,anms_merienda = @anms_merienda,"+
                                "anms_mediatarde = @anms_mediatarde,anms_cena = @anms_cena "+
                            "WHERE anms_nrohc = @anms_nrohc",   
    
                             
//----------------------------------------------------HABITOS---------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
    //Consultas-------------------------------------------------------------------------------------------------
    getHabitos: "SELECT * FROM habito",

    getHabitosXHC: "select top 1 * from habitos_paciente where habpac_nrohc=1000"+
                    " order by habpac_fecharegistro desc",

    getultimoidhabito: "SELECT max(hab_id) as id_hab from habito",

    getultimoidhabpac: "SELECT max(habpac_id) as habpac_id from habitos_paciente",

    getultimoshabitos: "select hab_id,hab_descripcion "+
                        "from habitos_paciente hp inner join detalle_habitos dh on hp.habpac_id=dh.dhabpac_id "+
                        "inner join habito h on h.hab_id=dhabpac_idhabito "+
                        "where habpac_nrohc=@habpac_nrohc and dhabpac_id=(select max(habpac_id) from habitos_paciente "+
                                                                "where habpac_nrohc=@habpac_nrohc)"
                                                                +"order by hab_descripcion",
    getultimoshabitosconsulta: "select hab_id,hab_descripcion "+
    "from habitos_paciente hp inner join detalle_habitos dh on hp.habpac_id=dh.dhabpac_id "+
    "inner join habito h on h.hab_id=dhabpac_idhabito "+
    "where hp.habpac_nrohc=@pac_nrohc and hp.habpac_idconsulta= @cons_idturno and dh.dhabpac_id=(select max(hab.habpac_id) "+
    "from habitos_paciente hab "+
                                                "where hab.habpac_nrohc=@pac_nrohc) "+
                                                "order by hab_descripcion",                                                            
    //MiProgreso
    getultimoshabitospaciente: "select hab_id,hab_descripcion "+
    "from habitos_paciente hp inner join detalle_habitos dh on hp.habpac_id=dh.dhabpac_id "+
    "inner join habito h on h.hab_id=dhabpac_idhabito "+
    "where habpac_nrohc=@habpac_nrohc and dhabpac_id=(select max(habpac_id) from habitos_paciente "+
                                            "where habpac_nrohc=@habpac_nrohc)"
                                            +"order by hab_descripcion",   
    //                                                             

    getultimoshabitostrabajados: "select hab_id,hab_descripcion "+
                                    "from habitos_paciente hp inner join detalle_habitos dh on hp.habpac_id=dh.dhabpac_id "+
                                    "inner join habito h on h.hab_id=dhabpac_idhabito "+
                                    "where dh.dhabpac_trabajando=1 and habpac_nrohc=@habpac_nrohc and dhabpac_id=(select max(habpac_id) from habitos_paciente "+
                                                                           "where habpac_nrohc=@habpac_nrohc)",                                                            

    getprimeroshabitos: "select hab_id,hab_descripcion "+
                        "from habitos_paciente hp inner join detalle_habitos dh on hp.habpac_id=dh.dhabpac_id "+
                        "inner join habito h on h.hab_id=dhabpac_idhabito "+
                        "where habpac_nrohc=@habpac_nrohc and dhabpac_id=(select min(habpac_id) from habitos_paciente "+
                                                                          "where habpac_nrohc=@habpac_nrohc)"
                                                                          + " order by hab_descripcion",

    
    
    getnoultimoshabitos: "select hab_id, hab_descripcion from habito "+
                          "where hab_id not in ("+
                                                "select hab_id from habitos_paciente hp "+
                                                "inner join detalle_habitos dh on hp.habpac_id=dh.dhabpac_id"+
                                                " inner join habito h on h.hab_id=dhabpac_idhabito "+
                                                "where habpac_nrohc=@habpac_nrohc and "+
                                                    "dhabpac_id=(select max(habpac_id) from habitos_paciente "+
                                                                 "where habpac_nrohc=@habpac_nrohc))"
                                                                 +"order by hab_descripcion",

    getnoultimoshabitostrabajados: "select hab_id, hab_descripcion from habito "+
                                    "where hab_id not in ("+
                                                "select hab_id from habitos_paciente hp "+
                                                "inner join detalle_habitos dh on hp.habpac_id=dh.dhabpac_id"+
                                                " inner join habito h on h.hab_id=dhabpac_idhabito "+
                                                "where dh.dhabpac_trabajando=1 and habpac_nrohc=@habpac_nrohc and "+
                                                    "dhabpac_id=(select max(habpac_id) from habitos_paciente "+
                                                                 "where habpac_nrohc=@habpac_nrohc))",
    
    gethabitopactado:"select convert(varchar,hp.habpac_fechatope,23) as fechapacto,hp.habpac_observaciones, dh.dhabpac_observaciones from habitos_paciente hp"+
    " join detalle_habitos dh on (hp.habpac_id = dh.dhabpac_id) where hp.habpac_nrohc =@habpac_nrohc and habpac_idconsulta = @cons_idturno and dh.dhabpac_trabajando = 1",

    gethabitopactadopaciente:"select convert(varchar,hp.habpac_fechatope,23) as fechapacto,hp.habpac_observaciones, dh.dhabpac_observaciones from habitos_paciente hp"+
    " join detalle_habitos dh on (hp.habpac_id = dh.dhabpac_id) where hp.habpac_nrohc =@habpac_nrohc and dh.dhabpac_trabajando = 1",

    //Altas-----------------------------------------------------------------------------------------------------
    registrarHabitos: "INSERT INTO habito (hab_descripcion) VALUES (@hab_descripcion)",

    registrarHabitoPaciente: "INSERT INTO habitos_paciente (habpac_nrohc, habpac_fecharegistro,"+
                                            "habpac_observaciones, habpac_idconsulta) "+
                                "VALUES (@habpac_nrohc, getDate(), @habpac_observaciones,@habpac_idconsulta)",

    registrarDetalleHabito: "INSERT INTO detalle_habitos (dhabpac_id, dhabpac_idhabito, dhabpac_realiza, "+
                                                            "dhabpac_observaciones) "+
                                "VALUES (@dhabpac_id, @dhabpac_idhabito, 1, @dhabpac_observaciones)",

    //Bajas-----------------------------------------------------------------------------------------------------
    eliminarDetalleHabito: "delete from detalle_habitos where dhabpac_id=@habpac_id",

    //Modificaciones--------------------------------------------------------------------------------------------
    actualizarHabitos: "UPDATE habito SET hab_descripcion = @hab_descripcion WHERE habpac_nrohc = @habpac_nrohc",

    actualizarHabitoPaciente:"UPDATE habitos_paciente SET habpac_fecharegistro = @getDate(),"+
    "habpac_observaciones = @habpac_observaciones, habpac_idconsulta = @habpac_idconsulta WHERE "+
    "habpac_nrohc = @habpac_nrohc AND habpac_id= @habpac_id",

    registrarhabitopactado: "UPDATE detalle_habitos SET dhabpac_trabajando=1 WHERE dhabpac_id = @dhabpac_id and dhabpac_idhabito=@dhabpac_habito",

    registrarcabecerahpac:"UPDATE habitos_paciente SET habpac_fechatope = @habpac_fechatope,"+
    "habpac_observaciones = @habpac_observaciones WHERE habpac_id = @habpac_id",
    

}