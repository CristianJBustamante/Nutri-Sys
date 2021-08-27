import {getConnection,sql,queries} from "../database";

//----------------------------------------------DATOS INICIALES-------------------------------------------------------
export const registrarfichainicial = async (req,res) => {
    const { hc_nrohc,hc_fechaprimerconsulta,hc_ocupacion,hc_actividadfisica } = req.body;
    let {hc_diagnostico,hc_antecedentes,hc_medicacion,hc_fechalaboratorios,
        hc_laboratorios,hc_antecedentesnutricion,hc_edaddieta,hc_dieta,
        hc_pesoactual,hc_BMI,hc_PD,hc_Pmin,hc_Pmincuando,hc_GC,hc_MM,hc_CC1,hc_CC2,hc_CC3,
        hc_formula,hc_talla,hc_PH,hc_PBMI,hc_Pmax,hc_Pmaxcuando,hc_GV,hc_PBI,hc_ajuste,hc_medajuste
    } = req.body;
    
    if (hc_nrohc==null || hc_fechaprimerconsulta==null || hc_ocupacion==null || hc_actividadfisica==null ) {
            return res.status(400).json({msg: 'Error, Faltan Datos de Completar'})
        }
    
    
    
    try {
        const pool = await getConnection();
        await pool.request()
            .input('hc_nrohc',sql.Int,hc_nrohc)
            .input('hc_fechaprimerconsulta',sql.DateTime,hc_fechaprimerconsulta)
            .input('hc_ocupacion',sql.NVarChar,hc_ocupacion)
            .input('hc_actividadfisica',sql.NVarChar,hc_actividadfisica)
            .input('hc_diagnostico',sql.NVarChar,hc_diagnostico)
            .input('hc_antecedentes',sql.NVarChar,hc_antecedentes)
            .input('hc_medicacion',sql.NVarChar,hc_medicacion)
            .input('hc_fechalaboratorios',sql.DateTime,hc_fechalaboratorios)
            .input('hc_laboratorios',sql.NVarChar,hc_laboratorios)
            .input('hc_antecedentesnutricion',sql.NVarChar,hc_antecedentesnutricion)
            .input('hc_edaddieta',sql.Int,hc_edaddieta)
            .input('hc_dieta',sql.NVarChar,hc_dieta)
            .input('hc_pesoactual',sql.Float,hc_pesoactual)
            .input('hc_BMI',sql.Float,hc_BMI)
            .input('hc_PD',sql.Float,hc_PD)
            .input('hc_Pmin',sql.Float,hc_Pmin)
            .input('hc_Pmincuando',sql.NVarChar,hc_Pmincuando)
            .input('hc_GC',sql.Float,hc_GC)
            .input('hc_MM',sql.Float,hc_MM)
            .input('hc_CC1',sql.Float,hc_CC1)
            .input('hc_CC2',sql.Float,hc_CC2)
            .input('hc_CC3',sql.Float,hc_CC3)
            .input('hc_formula',sql.Float,hc_formula)
            .input('hc_talla',sql.Float,hc_talla)
            .input('hc_PH',sql.Float,hc_PH)
            .input('hc_PBMI',sql.Float,hc_PBMI)
            .input('hc_Pmax',sql.Float,hc_Pmax)
            .input('hc_Pmaxcuando',sql.NVarChar,hc_Pmaxcuando)
            .input('hc_GV',sql.Float,hc_GV)
            .input('hc_PBI',sql.Float,hc_PBI)
            .input('hc_ajuste',sql.Float,hc_ajuste)
            .input('hc_medajuste',sql.Float,hc_medajuste)
            .query(queries.registrarFichaInicial)
        res.json({  hc_nrohc,hc_fechaprimerconsulta,hc_ocupacion,hc_actividadfisica,
            hc_diagnostico,hc_antecedentes,hc_medicacion,hc_fechalaboratorios,hc_laboratorios
            ,hc_antecedentesnutricion,hc_edaddieta,hc_dieta,
            hc_pesoactual,hc_BMI,hc_PD,hc_Pmin,hc_Pmincuando,hc_GC,hc_MM,hc_CC1,hc_CC2,hc_CC3
        ,hc_formula,hc_talla,hc_PH,hc_PBMI,hc_Pmax,hc_Pmaxcuando,hc_GV,hc_PBI,hc_ajuste,hc_medajuste})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}





//----------------------------------------------ANAMNESIS-------------------------------------------------------------
//INSERTAR NUEVO ANAMNESIS
export const registrarAnamnesis = async (req,res) => {
    const { anms_nrohc } = req.body;
    let {anms_vacunacongrasa,anms_vacunasingrasa,anms_polloconpiel,anms_pollosinpiel,anms_pescadorio,anms_pescadomar,
            anms_cerdo,anms_higado,anms_rinon,anms_otrasviceras,anms_fiambres,anms_embutidos,anms_salchichas,
            anms_chorizo,anms_morcilla,anms_lecheentera,anms_lechedescremada,anms_yogurtentero,anms_yogurtdescremada,
            anms_quesoduro,anms_quesosemiblando,anms_quesountable,anms_otrosquesos,anms_flan,anms_licuados,anms_salsablanca,
            anms_prepconleche,anms_huevohervido,anms_huevofrito,anms_prephuevo,anms_vegetalesfrescos,
            anms_vegetalesenlatados,anms_frutas,anms_cereales,anms_pastas,anms_vegfeculentos,anms_legumbres,
            anms_panblanco,anms_pannegro,anms_galletassaladas,anms_galletasagua,anms_galletasdulces,
            anms_galletasintegrales,anms_facturas,anms_tortas,anms_otrasmasas,anms_azucar,anms_mermelada,anms_gelatina,
            anms_miel,anms_dulces,anms_jugos,anms_golosinas,anms_gaseosas,anms_edulcorante,anms_otrasazucares,
            anms_aceitegirasol,anms_aceitemaiz,anms_aceiteoliva,anms_otrosaceites,anms_aceitecrudo,anms_aceitefritura,
            anms_manteca,anms_margarina,anms_mayonesa,anms_otrasgrasas,anms_salcomun,anms_saldieta,anms_sales,
            anms_bebidas,anms_cantvino,anms_cantcerveza,anms_cantbebblancas,anms_desayuno,anms_mediamanana,anms_almuerzo,
            anms_merienda,anms_mediatarde,anms_cena } = req.body;

    try {
        const pool = await getConnection();
        await pool.request()
            .input('anms_nrohc',sql.Numeric,anms_nrohc)
            .input('anms_vacunacongrasa', sql.Bit,anms_vacunacongrasa)
            .input('anms_vacunasingrasa', sql.Bit,anms_vacunasingrasa)
            .input('anms_polloconpiel', sql.Bit,anms_polloconpiel)
            .input('anms_pollosinpiel', sql.Bit,anms_pollosinpiel)
            .input('anms_pescadorio', sql.Bit,anms_pescadorio)
            .input('anms_pescadomar', sql.Bit,anms_pescadomar)
            .input('anms_cerdo', sql.Bit,anms_cerdo)
            .input('anms_higado', sql.Bit,anms_higado)
            .input('anms_rinon', sql.Bit,anms_rinon)
            .input('anms_otrasviceras', sql.NVarChar,anms_otrasviceras)
            .input('anms_fiambres', sql.Bit,anms_fiambres)
            .input('anms_embutidos', sql.Bit,anms_embutidos)
            .input('anms_salchichas', sql.Bit,anms_salchichas)
            .input('anms_chorizo', sql.Bit,anms_chorizo)
            .input('anms_morcilla', sql.Bit,anms_morcilla)
            .input('anms_lecheentera', sql.Bit,anms_lecheentera)
            .input('anms_lechedescremada', sql.Bit,anms_lechedescremada)
            .input('anms_yogurtentero', sql.Bit,anms_yogurtentero)
            .input('anms_yogurtdescremada', sql.Bit,anms_yogurtdescremada)
            .input('anms_quesoduro', sql.Bit,anms_quesoduro)
            .input('anms_quesosemiblando', sql.Bit,anms_quesosemiblando)
            .input('anms_quesountable', sql.Bit,anms_quesountable)
            .input('anms_otrosquesos', sql.NVarChar,anms_otrosquesos)
            .input('anms_flan', sql.Bit,anms_flan)
            .input('anms_licuados', sql.Bit,anms_licuados)
            .input('anms_salsablanca', sql.Bit,anms_salsablanca)
            .input('anms_prepconleche', sql.NVarChar,anms_prepconleche)
            .input('anms_huevohervido', sql.Bit,anms_huevohervido)
            .input('anms_huevofrito', sql.Bit,anms_huevofrito)
            .input('anms_prephuevo', sql.NVarChar,anms_prephuevo)
            .input('anms_vegetalesfrescos', sql.NVarChar,anms_vegetalesfrescos)
            .input('anms_vegetalesenlatados', sql.NVarChar,anms_vegetalesenlatados)
            .input('anms_frutas', sql.NVarChar,anms_frutas)
            .input('anms_cereales', sql.NVarChar,anms_cereales)
            .input('anms_pastas', sql.NVarChar,anms_pastas)
            .input('anms_vegfeculentos', sql.NVarChar,anms_vegfeculentos)
            .input('anms_legumbres', sql.NVarChar,anms_legumbres)
            .input('anms_panblanco', sql.Bit,anms_panblanco)
            .input('anms_pannegro', sql.Bit,anms_pannegro)
            .input('anms_galletassaladas', sql.Bit,anms_galletassaladas)
            .input('anms_galletasagua', sql.Bit,anms_galletasagua)
            .input('anms_galletasdulces', sql.Bit,anms_galletasdulces)
            .input('anms_galletasintegrales', sql.Bit,anms_galletasintegrales)
            .input('anms_facturas', sql.Bit,anms_facturas)
            .input('anms_tortas', sql.Bit,anms_tortas)
            .input('anms_otrasmasas', sql.NVarChar,anms_otrasmasas)
            .input('anms_azucar', sql.Bit,anms_azucar)
            .input('anms_mermelada', sql.Bit,anms_mermelada)
            .input('anms_gelatina', sql.Bit,anms_gelatina)
            .input('anms_miel', sql.Bit,anms_miel)
            .input('anms_dulces', sql.Bit,anms_dulces)
            .input('anms_jugos', sql.Bit,anms_jugos)
            .input('anms_golosinas', sql.Bit,anms_golosinas)
            .input('anms_gaseosas', sql.Bit,anms_gaseosas)
            .input('anms_edulcorante', sql.Bit,anms_edulcorante)
            .input('anms_otrasazucares', sql.NVarChar,anms_otrasazucares)
            .input('anms_aceitegirasol', sql.Bit,anms_aceitegirasol)
            .input('anms_aceitemaiz', sql.Bit,anms_aceitemaiz)
            .input('anms_aceiteoliva', sql.Bit,anms_aceiteoliva)
            .input('anms_otrosaceites', sql.NVarChar,anms_otrosaceites)
            .input('anms_aceitecrudo', sql.Bit,anms_aceitecrudo)
            .input('anms_aceitefritura', sql.Bit,anms_aceitefritura)
            .input('anms_manteca', sql.Bit,anms_manteca)
            .input('anms_margarina', sql.Bit,anms_margarina)
            .input('anms_mayonesa', sql.Bit,anms_mayonesa)
            .input('anms_otrasgrasas', sql.NVarChar,anms_otrasgrasas)
            .input('anms_salcomun', sql.Bit,anms_salcomun)
            .input('anms_saldieta', sql.Bit,anms_saldieta)
            .input('anms_sales', sql.NVarChar,anms_sales)
            .input('anms_bebidas', sql.NVarChar,anms_bebidas)
            .input('anms_cantvino', sql.NVarChar,anms_cantvino)
            .input('anms_cantcerveza', sql.NVarChar,anms_cantcerveza)
            .input('anms_cantbebblancas', sql.NVarChar,anms_cantbebblancas)
            .input('anms_desayuno', sql.NVarChar,anms_desayuno)
            .input('anms_mediamanana', sql.NVarChar,anms_mediamanana)
            .input('anms_almuerzo', sql.NVarChar,anms_almuerzo)
            .input('anms_merienda', sql.NVarChar,anms_merienda)
            .input('anms_mediatarde', sql.NVarChar,anms_mediatarde)
            .input('anms_cena', sql.NVarChar,anms_cena)
            
            .query(queries.registrarAnamnesis)
        res.json({  anms_nrohc,
            anms_vacunacongrasa,anms_vacunasingrasa,anms_polloconpiel,anms_pollosinpiel,
            anms_pescadorio,anms_pescadomar,anms_cerdo,anms_higado,anms_rinon,anms_otrasviceras,
            anms_fiambres,anms_embutidos,anms_salchichas,anms_chorizo,anms_morcilla,
            anms_lecheentera,anms_lechedescremada,anms_yogurtentero,anms_yogurtdescremada,
            anms_quesoduro,anms_quesosemiblando,anms_quesountable,anms_otrosquesos,anms_flan,anms_licuados,anms_salsablanca,anms_prepconleche,
            anms_huevohervido,anms_huevofrito,anms_prephuevo,
            anms_vegetalesfrescos,anms_vegetalesenlatados,anms_frutas,anms_cereales,anms_pastas,anms_vegfeculentos,anms_legumbres,
            anms_panblanco,anms_pannegro,anms_galletassaladas,anms_galletasagua,anms_galletasdulces,
            anms_galletasintegrales,anms_facturas,anms_tortas,anms_otrasmasas,
            anms_azucar,anms_mermelada,anms_gelatina,anms_miel,anms_dulces,anms_jugos,anms_golosinas,anms_gaseosas,
            anms_edulcorante,anms_otrasazucares,
            anms_aceitegirasol,anms_aceitemaiz,anms_aceiteoliva,anms_otrosaceites,anms_aceitecrudo,anms_aceitefritura,
            anms_manteca,anms_margarina,anms_mayonesa,anms_otrasgrasas,
            anms_salcomun,anms_saldieta,anms_sales,
            anms_bebidas,anms_cantvino,anms_cantcerveza,anms_cantbebblancas,
            anms_desayuno,anms_mediamanana,anms_almuerzo,anms_merienda,anms_mediatarde,anms_cena})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}

//CONSULTAR ANAMNESIS POR HC
export const getAnamnesisXHC = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc', pac_nrohc).query(queries.getAnamnesisXHC)
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//CONSULTAR ITEMS ANAMNESIS
export const getItemsAnamnesis = async (req,res) => {  
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getItemsAnamnesis);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};