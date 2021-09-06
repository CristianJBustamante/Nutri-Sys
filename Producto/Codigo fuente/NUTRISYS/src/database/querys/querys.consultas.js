export const consultasquerys = {
//-------------------------------------------------CONSULTA INICIAL------------------------------------------------------

//FICHA INICIAL
    getFichaInicial: "SELECT * from historia_clinica where hc_nrohc=@hc_nrohc",
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
                            
    getAnamnesisXHC: "select * from anamnesis_paciente join detalle_anamnesis on(anms_id= danms_id) "+
                                                      "join item_anamnesis on (danms_iditem = item_id)",
//HABITOS

//ANTROPOMETRÍA

//-----------------------------------------------------------------------------------------------------------------------


}