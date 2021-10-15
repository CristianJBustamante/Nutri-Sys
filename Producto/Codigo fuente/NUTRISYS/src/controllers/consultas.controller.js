import {getConnection,sql,consultasquerys} from "../database";
//----------------------------------------------REGISTRAR----------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------

//CONSULTAGENERAL
export const registrarconsulta = async (req,res) => {
    let { cons_idturno,cons_observaciones } = req.body;
        
    if (cons_idturno==null) {
            return res.status(400).json({msg: 'Error, Faltan Datos de Completar'})
        }         
    try {
        const pool = await getConnection();
        await pool.request()
            .input('cons_idturno',sql.Int,cons_idturno)
            .input('cons_observaciones',sql.NVarChar,cons_observaciones)
            .query(consultasquerys.registrarconsulta)
        res.json({cons_idturno,cons_observaciones})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}

export const registrarconsulta2 = async (req,res) => {
    let { cons_idturno,cons_observaciones,cons_edad,cons_peso,cons_talla,
            cons_IMC,cons_CCM,cons_CCU,cons_CCP,cons_GC,cons_GV,cons_M,cons_PBI } = req.body;

    if (cons_idturno==null) {
            return res.status(400).json({msg: 'Error, Faltan Datos de Completar'})
        }  
    
    try {
        const pool = await getConnection();
        await pool.request()
            .input('cons_idturno',sql.Int,cons_idturno)
            .input('cons_observaciones',sql.NVarChar,cons_observaciones)
            .input('cons_edad',sql.Int,cons_edad)
            .input('cons_peso',sql.Float,cons_peso)
            .input('cons_talla',sql.Float,cons_talla)
            .input('cons_IMC',sql.Float,cons_IMC)
            .input('cons_CCM',sql.Float,cons_CCM)
            .input('cons_CCU',sql.Float,cons_CCU)
            .input('cons_CCP',sql.Float,cons_CCP)
            .input('cons_GC',sql.Float,cons_GC)
            .input('cons_GV',sql.Float,cons_GV)
            .input('cons_M',sql.Float,cons_M)
            .input('cons_PBI',sql.Float,cons_PBI)
            .query(consultasquerys.registrarconsulta2)
        res.json({cons_idturno,cons_observaciones,cons_edad,cons_peso,cons_talla,
                    cons_IMC,cons_CCM,cons_CCU,cons_CCP,cons_GC,cons_GV,cons_M,cons_PBI})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}

//CONSULTA INICIAL
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
            .input('hc_ajuste',sql.NVarChar,hc_ajuste)
            .input('hc_medajuste',sql.Float,hc_medajuste)
            .query(consultasquerys.registrarFichaInicial)
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


//CONSULTAR ID CONSULTA POR TURNO
export const getconsultaxturno = async(req,res) => {
    try {
        const {cons_idturno} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('cons_idturno', cons_idturno).query(consultasquerys.getconsultaxturno)
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//----------------------------------------------CONSULTA INICIAL---------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//CONSULTAR FICHAINICIAL POR HC
export const getFichaInicialXHC = async(req,res) => {
    try {
        const {hc_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('hc_nrohc', hc_nrohc).query(consultasquerys.getFichaInicial)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 



export const actualizarFichaInicial = async(req,res) => {
    let {hc_ocupacion,hc_actividadfisica,
        hc_diagnostico,hc_antecedentes,hc_medicacion,hc_fechalaboratorios,
        hc_laboratorios,hc_antecedentesnutricion,hc_edaddieta,hc_dieta,
        hc_pesoactual,hc_BMI,hc_PD,hc_Pmin,hc_Pmincuando,hc_GC,hc_MM,hc_CC1,hc_CC2,hc_CC3,
        hc_formula,hc_talla,hc_PH,hc_PBMI,hc_Pmax,hc_Pmaxcuando,hc_GV,hc_PBI,hc_ajuste,hc_medajuste } = req.body;
    const {hc_nrohc} = req.params;
    try {
        const pool = await getConnection();
        await pool.request()
        .input('hc_nrohc',sql.Int,hc_nrohc)
        .input('hc_ocupacion',sql.NVarChar,hc_ocupacion)
        .input('hc_actividadfisica',sql.NVarChar,hc_actividadfisica)
        .input('hc_diagnostico',sql.NVarChar,hc_diagnostico)
        .input('hc_antecedentes',sql.NVarChar,hc_antecedentes)
        .input('hc_medicacion',sql.NVarChar,hc_medicacion)
        .input('hc_fechalaboratorios',sql.DateTime,hc_fechalaboratorios)
        .input('hc_laboratorios',sql.NVarChar,hc_laboratorios)
        .input('hc_antecedentesnutricion',sql.NVarChar,hc_antecedentesnutricion)
        .input('hc_edaddieta',sql.Numeric,hc_edaddieta)
        .input('hc_dieta',sql.NVarChar,hc_dieta)
        .input('hc_pesoactual',sql.Numeric,hc_pesoactual)
        .input('hc_BMI',sql.Numeric,hc_BMI)
        .input('hc_PD',sql.Numeric,hc_PD)
        .input('hc_Pmin',sql.Numeric,hc_Pmin)
        .input('hc_Pmincuando',sql.NVarChar,hc_Pmincuando)
        .input('hc_GC',sql.Numeric,hc_GC)
        .input('hc_MM',sql.Numeric,hc_MM)
        .input('hc_CC1',sql.Numeric,hc_CC1)
        .input('hc_CC2',sql.Numeric,hc_CC2)
        .input('hc_CC3',sql.Numeric,hc_CC3)
        .input('hc_formula',sql.Numeric,hc_formula)
        .input('hc_talla',sql.Numeric,hc_talla)
        .input('hc_PH',sql.Numeric,hc_PH)
        .input('hc_PBMI',sql.Numeric,hc_PBMI)
        .input('hc_Pmax',sql.Numeric,hc_Pmax)
        .input('hc_Pmaxcuando',sql.NVarChar,hc_Pmaxcuando)
        .input('hc_GV',sql.Numeric,hc_GV)
        .input('hc_PBI',sql.Numeric,hc_PBI)
        .input('hc_ajuste',sql.NVarChar,hc_ajuste)
        .input('hc_medajuste',sql.Numeric,hc_medajuste)

        .query(consultasquerys.actualizarFichaInicial)
        res.json({hc_ocupacion,hc_actividadfisica,
            hc_diagnostico,hc_antecedentes,hc_medicacion,hc_fechalaboratorios,
            hc_laboratorios,hc_antecedentesnutricion,hc_edaddieta,hc_dieta,
            hc_pesoactual,hc_BMI,hc_PD,hc_Pmin,hc_Pmincuando,hc_GC,hc_MM,hc_CC1,hc_CC2,hc_CC3,
            hc_formula,hc_talla,hc_PH,hc_PBMI,hc_Pmax,hc_Pmaxcuando,hc_GV,hc_PBI,hc_ajuste,hc_medajuste})
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
            .input('anms_edulcorante', sql.NVarChar,anms_edulcorante)
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
            
            .query(consultasquerys.registrarAnamnesis)
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
        const {anms_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('anms_nrohc', anms_nrohc).query(consultasquerys.getAnamnesisXHC)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//CONSULTAR ITEMS ANAMNESIS
export const getItemsAnamnesis = async (req,res) => {  
    try {
        const pool = await getConnection();
        const result = await pool.request().query(consultasquerys.getItemsAnamnesis);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//ACTUALIZAR ANAMNESIS POR HC
export const actualizarAnamnesis = async(req,res) => {
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
    const {anms_nrohc} = req.params;
    try {
        const pool = await getConnection();
        await pool.request()
        .input('anms_nrohc',sql.Int,anms_nrohc)
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
        .input('anms_edulcorante', sql.NVarChar,anms_edulcorante)
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
        .query(consultasquerys.actualizarAnamnesis)
        res.json({  anms_vacunacongrasa,anms_vacunasingrasa,anms_polloconpiel,anms_pollosinpiel,
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


//----------------------------------------------HABITOS-------------------------------------------------------------
//GET HABITOS
export const getHabitos = async(req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request()
            .query(consultasquerys.getHabitos)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 
//GET ULTIMO ID HABITO
export const getultimoidhabito = async(req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request()
            .query(consultasquerys.getultimoidhabito)
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//INSERTAR NUEVO HABITO 
export const nuevohabito = async (req,res) => {
    let {hab_descripcion} = req.body;
    console.log(hab_descripcion)
    
    if (hab_descripcion==null) {
            return res.status(400).json({msg: 'Error, Faltan Datos de Completar'})
        }

    try {
        const pool = await getConnection();
        await pool.request()
            .input('hab_descripcion',sql.NVarChar,hab_descripcion)
            .query(consultasquerys.registrarHabitos)
        res.json({  hab_descripcion})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}

//INSERTAR CABECERA HABITOS PACIENTE
export const registrarHabitoPaciente = async (req,res) => {
    const { habpac_nrohc } = req.body;
    let { habpac_observaciones, habpac_idconsulta } = req.body;

    try {
        const pool = await getConnection();
        await pool.request()
            .input('habpac_nrohc',sql.Numeric,habpac_nrohc)
            .input('habpac_observaciones', sql.NVarChar,habpac_observaciones)
            .input('habpac_idconsulta', sql.Numeric,habpac_idconsulta)
            
            .query(consultasquerys.registrarHabitoPaciente)
        res.json({  habpac_nrohc, habpac_observaciones, habpac_idconsulta})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}
//INSERTAR DETALLE HABITO PACIENTE
export const registrarDetalleHabito = async (req,res) => {
    const { dhabpac_id, dhabpac_idhabito } = req.body;
    let { dhabpac_observaciones } = req.body;

    try {
        const pool = await getConnection();
        await pool.request()
            .input('dhabpac_id',sql.Numeric,dhabpac_id)
            .input('dhabpac_idhabito',sql.Numeric,dhabpac_idhabito)
            .input('dhabpac_observaciones', sql.NVarChar,dhabpac_observaciones)
            .query(consultasquerys.registrarDetalleHabito)
        res.json({  dhabpac_id, dhabpac_idhabito, dhabpac_observaciones})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}
//CONSULTAR ULTIMO HABITO POR HC
export const getHabitoXHC = async(req,res) => {
    try {
        const {habpac_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('habpac_nrohc', habpac_nrohc).query(consultasquerys.getHabitosXHC)
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//CONSULTAR ULTIMOS HABITOS
export const getultimoshabitos = async(req,res) => {
    try {
        const {habpac_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('habpac_nrohc', habpac_nrohc).query(consultasquerys.getultimoshabitos)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//CONSULTAR PRIMEROS HABITOS
export const getprimeroshabitos = async(req,res) => {
    try {
        const {habpac_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('habpac_nrohc', habpac_nrohc).query(consultasquerys.getprimeroshabitos)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 


//ACTUALIZAR HABITOS POR HC
export const actualizarHabitos = async(req,res) => {
    let {hab_descripcion } = req.body;
    const {hab_id} = req.params;
    try {
        const pool = await getConnection();
        await pool.request()
        .input('hab_id',sql.Int,hab_id)
        .input('hab_descripcion', sql.NVarChar,hab_descripcion)
        .query(consultasquerys.actualizarHabitos)
        res.json({  hab_descripcion})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const actualizarHabitoPaciente = async(req,res) => {
    let {habpac_fecharegistro, habpac_observaciones  } = req.body;
    const {hab_id} = req.params;
    try {
        const pool = await getConnection();
        await pool.request()
        .input('hab_id',sql.Int,hab_id)
        .input('habpac_fecharegistro', sql.Date,habpac_fecharegistro)
        .input('habpac_observaciones', sql.NVarChar,habpac_observaciones)
        .input('habpac_idconsulta', sql.Numeric,habpac_idconsulta)

        .query(consultasquerys.actualizarHabitoPaciente)
        res.json({  hab_descripcion})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const actualizarDetalleHabito = async(req,res) => {
    let {dhabpac_realiza, habpac_observaciones  } = req.body;
    const {hab_id} = req.params;
    try {
        const pool = await getConnection();
        await pool.request()
        .input('hab_id',sql.Int,hab_id)
        .input('dhabpac_realiza', sql.Bit,dhabpac_realiza)
        .input('habpac_observaciones', sql.NVarChar,habpac_observaciones)

        .query(consultasquerys.actualizarDetalleHabito)
        res.json({  hab_descripcion})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}