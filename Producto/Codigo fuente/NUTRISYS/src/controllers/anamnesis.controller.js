import {getConnection,sql,queries} from "../database";


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