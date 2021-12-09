import {getConnection,sql,pacquerys} from "../database";

//----------------------------------------------REGISTRAR----------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//PACIENTE
export const nuevoPaciente = async (req,res) => {
    const { pac_tipodoc,pac_nrodoc,pac_apellido,pac_nombre,pac_sexo,
            pac_telefono1,pac_correo,pac_fechanacimiento,pac_mutual } = req.body;
    let {pac_direccion,pac_telefono2,pac_mutual2,pac_barrio} = req.body;
    
    if (pac_tipodoc==null || pac_nrodoc==null || pac_apellido==null || pac_nombre==null || pac_mutual==null ||
        pac_telefono1==null || pac_correo==null || pac_fechanacimiento==null || pac_sexo==null) {
            return res.status(400).json({msg: 'Error, Faltan Datos de Completar'})
        }
    
    if (pac_telefono2==null){pac_telefono2=''}
    if (pac_direccion==null){pac_direccion=''}
    if (pac_mutual2==null){pac_mutual2=''}
    if (pac_barrio==null){pac_barrio=''}

    try {
        const pool = await getConnection();
        await pool.request()
            .input('pac_tipodoc',sql.NVarChar,pac_tipodoc)
            .input('pac_nrodoc',sql.Numeric,pac_nrodoc)
            .input('pac_apellido',sql.NVarChar,pac_apellido)
            .input('pac_nombre',sql.NVarChar,pac_nombre)
            .input('pac_sexo',sql.NVarChar,pac_sexo)
            .input('pac_fechanacimiento',sql.DateTime,pac_fechanacimiento)
            .input('pac_direccion',sql.NVarChar,pac_direccion)
            .input('pac_barrio',sql.NVarChar,pac_nrodoc)
            .input('pac_telefono1',sql.NVarChar,pac_telefono1)
            .input('pac_telefono2',sql.NVarChar,pac_telefono2)
            .input('pac_correo',sql.NVarChar,pac_correo)
            .input('pac_mutual',sql.NVarChar,pac_mutual)
            .input('pac_mutual2',sql.NVarChar,pac_mutual2)
            .query(pacquerys.nuevoPaciente)
        res.json({  pac_tipodoc,pac_nrodoc,pac_apellido,pac_nombre,pac_sexo,pac_fechanacimiento,
                pac_direccion,pac_barrio,pac_telefono1,pac_telefono2,pac_correo,pac_mutual,pac_mutual2})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}

//----------------------------------------------ACTUALIZAR---------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//PACIENTE
export const actualizarPaciente = async(req,res) => {
    const { pac_tipodoc,pac_nrodoc,pac_apellido,pac_nombre,pac_sexo,
        pac_telefono1,pac_correo,pac_fechanacimiento,pac_mutual } = req.body;
let {pac_direccion,pac_telefono2,pac_mutual2,pac_barrio} = req.body;
    const {pac_nrohc} = req.params;
    
    if (pac_tipodoc==null || pac_nrodoc==null || pac_apellido==null || pac_nombre==null || pac_mutual==null ||
        pac_telefono1==null || pac_correo==null || pac_fechanacimiento==null || pac_sexo==null) {
            return res.status(400).json({msg: 'Error, Faltan Datos de Completar'})
        }
    
    if (pac_telefono2==null){pac_telefono2=''}
    if (pac_direccion==null){pac_direccion=''}
    if (pac_mutual2==null){pac_mutual2=''}
    if (pac_barrio==null){pac_barrio=''}

    try {
        const pool = await getConnection();
        await pool.request()
        .input('pac_nrohc',sql.Int,pac_nrohc)
        .input('pac_tipodoc',sql.NVarChar,pac_tipodoc)
        .input('pac_nrodoc',sql.Numeric,pac_nrodoc)
        .input('pac_apellido',sql.NVarChar,pac_apellido)
        .input('pac_nombre',sql.NVarChar,pac_nombre)
        .input('pac_sexo',sql.NVarChar,pac_sexo)
        .input('pac_fechanacimiento',sql.DateTime,pac_fechanacimiento)
        .input('pac_direccion',sql.NVarChar,pac_direccion)
        .input('pac_barrio',sql.NVarChar,pac_nrodoc)
        .input('pac_telefono1',sql.NVarChar,pac_telefono1)
        .input('pac_telefono2',sql.NVarChar,pac_telefono2)
        .input('pac_correo',sql.NVarChar,pac_correo)
        .input('pac_mutual',sql.NVarChar,pac_mutual)
        .input('pac_mutual2',sql.NVarChar,pac_mutual2)
        .query(pacquerys.actualizarPaciente)
        res.json({  pac_tipodoc,pac_nrodoc,pac_apellido,pac_nombre,pac_sexo,pac_fechanacimiento,
            pac_direccion,pac_barrio,pac_telefono1,pac_telefono2,pac_correo,pac_mutual,pac_mutual2})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    } 
}

//------------------------------------------------ELIMINAR---------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//PACIENTE
export const eliminarPaciente = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc',pac_nrohc).query(pacquerys.borrarPaciente)
    res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}  

//----------------------------------------------CONSULTAR----------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------

//PACIENTES
export const getPacientes = async (req,res) => {  
    try {
        const pool = await getConnection();
        const result = await pool.request().query(pacquerys.getPaciente);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//PACIENTE X HC
export const getPacienteXHC = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc', pac_nrohc).query(pacquerys.getPacienteXHC)
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//PACIENTE PESOS X HC
export const getpesospaciente = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc', pac_nrohc).query(pacquerys.getpesospaciente)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//ULTIMO IMC 
export const getultimoimc = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc', pac_nrohc).query(pacquerys.getultimoimc)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

//PACIENTE X APELLIDO
export const getPacienteXap = async(req,res) => {
    try {
        const {pac_apellido} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_apellido', pac_apellido).query(pacquerys.getPacienteXApellido)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//PACIENTE X HC SIMILAR
export const getPacienteLikeHC = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc', pac_nrohc).query(pacquerys.getPacientelikeHC)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//PACIENTE X DNI
export const getPacienteLikeDoc = async(req,res) => {
    try {
        const {pac_nrodoc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrodoc', pac_nrodoc).query(pacquerys.getPacienteXDoc)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//PACIENTE X HC, APELLIDO Y DNI
export const getPacienteMixto = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const {pac_apellido} = req.params
        const {pac_nrodoc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc', pac_nrohc)
            .input('pac_apellido', pac_apellido)
            .input('pac_nrodoc', pac_nrodoc)
            .query(pacquerys.getPacienteHCAPDoc)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//PACIENTE X HC Y APELLIDO
export const getPacienteHCAP = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const {pac_apellido} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc', pac_nrohc)
            .input('pac_apellido', pac_apellido)
            .query(pacquerys.getPacienteHCAP)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 


//PACIENTE X HC Y DNI
export const getPacienteHCDoc = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const {pac_nrodoc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc', pac_nrohc)
            .input('pac_nrodoc', pac_nrodoc)
            .query(pacquerys.getPacienteHCDoc)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//PACIENTE X DNI Y APELLIDO
export const getPacienteAPDoc = async(req,res) => {
    try {
        const {pac_apellido} = req.params
        const {pac_nrodoc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_apellido', pac_apellido)
            .input('pac_nrodoc', pac_nrodoc)
            .query(pacquerys.getPacienteAPDoc)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

