import {getConnection,sql,queries} from "../database";

export const getPacientes = async (req,res) => {
    
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getPaciente);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const nuevoPaciente = async (req,res) => {
    const { pac_nrodoc,pac_apellido,pac_nombre,
            pac_telefono1,pac_correo,pac_fechanacimiento,pac_mutual } = req.body;
    let {pac_direccion,pac_telefono2} = req.body;

    if (pac_nrodoc==null || pac_apellido==null || pac_nombre==null || pac_mutual==null ||
        pac_telefono1==null || pac_correo==null || pac_fechanacimiento==null ) {
            return res.status(400).json({msg: 'Error, Faltan Datos de Completar'})
        }
    
    if (pac_telefono2==null){pac_telefono2=''}
    if (pac_direccion==null){pac_direccion=''}

    try {
        const pool = await getConnection();
        await pool.request()
            .input('pac_nrodoc',sql.Numeric,pac_nrodoc)
            .input('pac_apellido',sql.NVarChar,pac_apellido)
            .input('pac_nombre',sql.NVarChar,pac_nombre)
            .input('pac_fechanacimiento',sql.DateTime,pac_fechanacimiento)
            .input('pac_direccion',sql.NVarChar,pac_direccion)
            .input('pac_telefono1',sql.NVarChar,pac_telefono1)
            .input('pac_telefono2',sql.NVarChar,pac_telefono2)
            .input('pac_correo',sql.NVarChar,pac_correo)
            .input('pac_mutual',sql.NVarChar,pac_mutual)
            .query(queries.nuevoPaciente)
        res.json({  pac_nrodoc,pac_apellido,pac_nombre,pac_fechanacimiento,
                pac_direccion,pac_telefono1,pac_telefono2,pac_correo,pac_mutual})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}

export const getPacienteXHC = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc', pac_nrohc).query(queries.getPacienteXHC)
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

export const eliminarPaciente = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc',pac_nrohc).query(queries.borrarPaciente)
    res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const actualizarPaciente = async(req,res) => {
    const { pac_tipodoc,pac_nrodoc,pac_apellido,pac_nombre,pac_fechanacimiento,
            pac_telefono1,pac_correo,pac_mutual} = req.body;
    let { pac_direccion,pac_telefono2 } = req.body;
    const {pac_nrohc} = req.params;
    
    if (pac_tipodoc==null || pac_nrodoc==null || pac_apellido==null || pac_nombre==null || 
        pac_fechanacimiento==null || pac_telefono1==null || pac_correo==null || pac_mutual==null) {
        return res.status(400).json({msg:"Error, faltan datos de completar"})   
    }
    if (pac_telefono2==null){pac_telefono2=''}
    if (pac_direccion==null){pac_direccion=''}

    try {
        const pool = await getConnection();
        await pool.request()
        .input('pac_nrohc',sql.Int,pac_nrohc)
        .input('pac_tipodoc',sql.NVarChar,pac_tipodoc)
        .input('pac_nrodoc',sql.Numeric,pac_nrodoc)
        .input('pac_apellido',sql.NVarChar,pac_apellido)
        .input('pac_nombre',sql.NVarChar,pac_nombre)
        .input('pac_fechanacimiento',sql.DateTime,pac_fechanacimiento)
        .input('pac_direccion',sql.NVarChar,pac_direccion)
        .input('pac_telefono1',sql.NVarChar,pac_telefono1)
        .input('pac_telefono2',sql.NVarChar,pac_telefono2)
        .input('pac_correo',sql.NVarChar,pac_correo)
        .input('pac_mutual',sql.NVarChar,pac_mutual)
        .query(queries.actualizarPaciente)
        res.json({pac_tipodoc,pac_nrodoc,pac_apellido,pac_nombre,pac_fechanacimiento,
            pac_direccion,pac_telefono1,pac_telefono2,pac_correo,pac_mutual})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}