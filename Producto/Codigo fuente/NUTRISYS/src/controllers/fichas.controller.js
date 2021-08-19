import {getConnection,sql,queries} from "../database";


//INSERTAR NUEVO ANAMNESIS
export const registrarAnamnesis = async (req,res) => {
    const { anms_id,anms_nrohc,anms_fecharegistro } = req.body;
    let {anms_vacunacongrasa,anms_vacunasingrasa,anms_polloconpiel,anms_pollosinpiel,anms_pescadorio,anms_pescadomar,
            anms_cerdo,anms_higado,anms_rinon,anms_otrasviceras,anms_fiambres,anms_embutidos,anms_salchichas,
            anms_chorizo,anms_morcilla,anms_lecheentera,anms_lechedescremada,anms_yogurtentero,anms_yogurtdescremada,
            anms_quesoduro,anms_quesosemiblando,anms_quesountable,anms_flan,anms_licuados,anms_salsablanca,
            anms_prepconleche,anms_huevohervido,anms_huevofrito,anms_prephuevo,anms_vegetalesfrescos,
            anms_vegetalesenlatados,anms_frutas,anms_cereales,anms_pastas,anms_vegfeculentos,anms_legumbres,
            anms_panblanco,anms_pannegro,anms_galletassaladas,anms_galletasagua,anms_galletasdulces,
            anms_galletasintegrales,anms_facturas,anms_tortas,anms_otrasmasas,anms_azucar,anms_mermelada,anms_gelatina,
            anms_miel,anms_dulces,anms_jugos,anms_golosinas,anms_gaseosas,anms_edulcorante,anms_otrasazucares,
            anms_aceitegirasol,anms_aceitemaiz,anms_aceiteoliva,anms_otrosaceites,anms_aceitecrudo,anms_aceitefritura,
            anms_manteca,anms_margarina,anms_mayonesa,anms_otrasgrasas,anms_salcomun,anms_saldieta,anms_sales,
            anms_bebidas,anms_cantvino,anms_cantcerveza,anms_cantbebblancas,anms_desayuno,anms_mediamanana,anms_almuerzo,
            anms_merienda,anms_cena } = req.body;

    
    //if (anms_id==null || anms_nrohc==null || anms_fechaRegistro==null || pac_mutual==null ||
      //  danms_id==null || danms_idItem==null || danms_consumido==null || item_id==null ) {
        //    return res.status(400).json({msg: 'Error, Faltan Datos de Completar'})
     //   }
    
    //if (anms_observaciones==null){anms_observaciones=''}
   // if (danms_cantidad==null){danms_cantidad=''}
    //if (danms_observaciones==null){danms_observaciones=''}

    try {
        const pool = await getConnection();
        await pool.request()
            .input('anms_id',sql.Numeric,anms_id)
            .input('anms_nrohc',sql.Numeric,anms_nrohc)
            .input('anms_fecharegistro',sql.DateTime,anms_fecharegistro)
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
            .input('anms_cena', sql.NVarChar,anms_cena)
            
            .query(queries.registrarAnamnesis)
        res.json({  anms_id,anms_nrohc,anms_fecharegistro,
            anms_vacunacongrasa,anms_vacunasingrasa,anms_polloconpiel,anms_pollosinpiel,
            anms_pescadorio,anms_pescadomar,anms_cerdo,anms_higado,anms_rinon,anms_otrasviceras,
            anms_fiambres,anms_embutidos,anms_salchichas,anms_chorizo,anms_morcilla,
            anms_lecheentera,anms_lechedescremada,anms_yogurtentero,anms_yogurtdescremada,
            anms_quesoduro,anms_quesosemiblando,anms_quesountable,anms_flan,anms_licuados,anms_salsablanca,anms_prepconleche,
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
            anms_desayuno,anms_mediamanana,anms_almuerzo,anms_merienda,anms_cena})
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