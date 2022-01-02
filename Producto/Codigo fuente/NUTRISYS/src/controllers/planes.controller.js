import {getConnection,sql,planesquerys} from "../database";

//INSERTAR CABCERA PLAN
export const registrarplan = async (req,res) => {
    let { plan_id,plan_nrohc,plan_legajoprofesional,plan_vigente } = req.body;
    
    if (plan_id==null || plan_nrohc==null || plan_legajoprofesional==null || plan_vigente==null) {
            return res.status(400).json({msg: 'Error, Faltan Datos de Completar'})
        }

    try {
        const pool = await getConnection();
        await pool.request()
            .input('plan_id',sql.Int,plan_id)
            .input('plan_nrohc',sql.Int,plan_nrohc)
            .input('plan_legajoprofesional',sql.Int,plan_legajoprofesional)
            .input('plan_vigente',sql.Bit,plan_vigente)
            .query(planesquerys.registrarplan)
        res.json({ plan_id,plan_nrohc,plan_legajoprofesional,plan_vigente})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}

//INSERTAR DETALLE PLAN
export const registrardetplan = async (req,res) => {
    let { dplan_id,dplan_detalle,dplan_titulo,dplan_descripcion } = req.body;
    
    if (dplan_id==null || dplan_detalle==null || dplan_titulo==null || dplan_descripcion==null) {
            return res.status(400).json({msg: 'Error, Faltan Datos de Completar'})
        }

    try {
        const pool = await getConnection();
        await pool.request()
            .input('dplan_id',sql.Int,dplan_id)
            .input('dplan_detalle',sql.NVarChar,dplan_detalle)
            .input('dplan_titulo',sql.NVarChar,dplan_titulo)
            .input('dplan_descripcion',sql.NVarChar,dplan_descripcion)
            .query(planesquerys.registrardetplan)
        res.json({ dplan_id,dplan_detalle,dplan_titulo,dplan_descripcion})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}

//BUSCAR ULTIMO PLAN
export const getultimoplan = async(req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request()
            .query(planesquerys.buscarultimoplan)
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//MODIFICAR PLANES A NO VIGENTES
export const novigentes = async (req,res) => {
    let { plan_id } = req.body;
    const {plan_nrohc} = req.params;

    try {
        const pool = await getConnection();
        await pool.request()
            .input('plan_id',sql.Int,plan_id)
            .input('plan_nrohc',sql.Int,plan_nrohc)
            .query(planesquerys.novigentes)
        res.json({ plan_id,plan_nrohc})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}

//BUSCAR PLANES X PACIENTE 
export const buscarplanes = async(req,res) => {
    const {plan_nrohc} = req.params;
    try {
        const pool = await getConnection()
        const result = await pool.request()
            .input('plan_nrohc',sql.Int,plan_nrohc)
            .query(planesquerys.buscarplanes)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 