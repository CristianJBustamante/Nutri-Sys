import {getConnection,sql,queries} from "../database";

export const getMutuales = async (req,res) => {
    
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getMutuales);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getMutualXID = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('mut_id', mut_id).query(queries.getMutualXID)
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 