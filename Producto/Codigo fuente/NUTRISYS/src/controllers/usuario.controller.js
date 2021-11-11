import {getConnection,sql,usuquerys} from "../database";
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const moment = require('moment');

//GET USUARIO POR USUARIO Y CLAVE
export const getUsuario = async(req,res) => {
    try {
        const {usu_usuario} = req.params
        const {usu_clave} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('usu_usuario', usu_usuario)
            .input('usu_clave', usu_clave)
            .query(usuquerys.getUsuario)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//TRAER TODOS LOS USUARIOS
export const getallusers = async(req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request()
            .query(usuquerys.getusuarios)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//INSERTAR NUEVO USUARIO
export const nuevousuario = async (req,res) => {
    let {usu_usuario,usu_clave,usu_idperfil,usu_correo} = req.body;
    console.log(usu_usuario,usu_clave,usu_idperfil)
    usu_clave = bcrypt.hashSync(usu_clave,10)
    
    if (usu_usuario==null || usu_clave==null || usu_idperfil==null || usu_correo==null) {
            return res.status(400).json({msg: 'Error, Faltan Datos de Completar'})
        }

    try {
        const pool = await getConnection();
        await pool.request()
            .input('usu_usuario',sql.NVarChar,usu_usuario)
            .input('usu_clave',sql.NVarChar,usu_clave)
            .input('usu_idperfil',sql.Int,usu_idperfil)
            .input('usu_correo',sql.NVarChar,usu_correo)
            .query(usuquerys.nuevousuario)
        res.json({  usu_usuario,usu_clave,usu_idperfil,usu_correo})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}

//TRAER USER POR USUARIO
export const getDatosUsuario = async(req,res) => {
    try {
        const {usu_usuario} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('usu_usuario', usu_usuario)
            .query(usuquerys.getdatosusuario)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//logout
export function logout(req, res, next) {
    req.logout();
    res.redirect('/usuarios/login')
}

//CONSULTAS E INSERTS PARA NUEVO EMPLEADO/USUARIO

//TRAER LEGAJO EMPLEADO
export const getultimolegajo = async(req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request()
            .query(usuquerys.getultimolegajo)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 
    
//TRAER ULTIMO IDUSUARIO
export const getultimoidusuario = async(req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request()
            .query(usuquerys.getultimoidusuario)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//Altas----------------------------------------------------------------------------------------------------
export const registrarEmpleado = async (req,res) => {
    let { emp_nrodoc, emp_idusuario, emp_apellido, emp_nombre, emp_matricula,
        emp_direccion,emp_telefono1,emp_telefono2} = req.body;
    try {
        const pool = await getConnection();
        await pool.request()
            .input('emp_nrodoc',sql.Numeric,emp_nrodoc)
            .input('emp_idusuario',sql.NVarChar,emp_idusuario)
            .input('emp_apellido', sql.NVarChar,emp_apellido)
            .input('emp_nombre', sql.NVarChar,emp_nombre)
            .input('emp_matricula', sql.Numeric,emp_matricula)   
            .input('emp_direccion', sql.NVarChar,emp_direccion)
            .input('emp_telefono1', sql.Numeric,emp_telefono1)   
            .input('emp_telefono2', sql.Numeric,emp_telefono2)   
            .query(usuquerys.registrarEmpleado)
        res.json({ emp_nrodoc, emp_idusuario, emp_apellido, emp_nombre, emp_matricula,
            emp_direccion,emp_telefono1,emp_telefono2})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}

export const registrarUsuarioEmpleado = async (req,res) => {
    let { usu_usuario, usu_clave, usu_correo } = req.body;
    try {
        const pool = await getConnection();
        await pool.request()
            .input('usu_usuario',sql.Int,usu_usuario)
            .input('usu_clave', sql.NVarChar,usu_clave)
            .input('usu_correo', sql.NVarChar,usu_correo)
            .query(usuquerys.registrarUsuarioEmpleado)
        res.json({ usu_usuario, usu_clave, usu_correo})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}

export const registrarUsuPerfil = async (req,res) => {
    const { usu_id, usu_idperfil } = req.body;

    try {
        const pool = await getConnection();
        await pool.request()
            .input('usu_id',sql.Numeric,usu_id)
            .input('usu_idperfil',sql.Numeric,usu_idperfil)
            .query(usuquerys.registrarUsuPerfil)
        res.json({ usu_id, usu_idperfil})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}

//Bajas----------------------------------------------------------------------------------------------------
export const actualizarUsuPerfil = async(req,res) => {
    const {usu_id} = req.params;
    try {
        const pool = await getConnection();
        await pool.request()
        .input('usu_id', usu_id)
        .query(usuquerys.eliminarUsuPerfil)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

//Modificaciones-------------------------------------------------------------------------------------------
export const actualizarEmpleado = async(req,res) => {
    let {emp_nrodoc, emp_idusuario, emp_apellido, emp_nombre, emp_matricula,
        emp_direccion,emp_telefono1,emp_telefono2 } = req.body;
    const {emp_legajo} = req.params;
    try {
        const pool = await getConnection();
        await pool.request()
        .input('emp_legajo',sql.Numeric,emp_legajo)
        .input('emp_nrodoc',sql.Numeric,emp_nrodoc)
        .input('emp_idusuario',sql.NVarChar,emp_idusuario)
        .input('emp_apellido', sql.NVarChar,emp_apellido)
        .input('emp_nombre', sql.NVarChar,emp_nombre)
        .input('emp_matricula', sql.Numeric,emp_matricula)   
        .input('emp_direccion', sql.NVarChar,emp_direccion)
        .input('emp_telefono1', sql.Numeric,emp_telefono1)   
        .input('emp_telefono2', sql.Numeric,emp_telefono2) 
        .query(usuquerys.actualizarEmpleado)
        res.json({ emp_nrodoc, emp_idusuario, emp_apellido, emp_nombre, emp_matricula,
            emp_direccion,emp_telefono1,emp_telefono2 })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const actualizarUsuario = async(req,res) => {
    let { usu_clave, usu_correo } = req.body;
    const {usu_usuario} = req.params;
    try {
        const pool = await getConnection();
        await pool.request()
        .input('usu_usuario', sql.NVarChar,usu_usuario)
        .input('usu_clave', sql.NVarChar,usu_clave)
        .input('usu_correo', sql.NVarChar,usu_correo)
        .query(usuquerys.actualizarUsuario)
        res.json({usu_usuario, usu_clave, usu_correo })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

//CONSULTAS
//Empleado X Legajo
export const getEmpleado = async(req,res) => {
    try {
        const {emp_legajo} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('emp_legajo', emp_legajo).query(usuquerys.getEmpleado)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//Empleado X Legajo
export const getEmpleadoXL = async(req,res) => {
    try {
        const {emp_legajo} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('emp_legajo', emp_legajo).query(usuquerys.getEmpleadoXL)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//Empleado X DNI
export const getEmpleadoXD = async(req,res) => {
    try {
        const {emp_nrodoc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('emp_nrodoc', emp_nrodoc).query(usuquerys.getEmpleadoXD)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//Empleado X HC, APELLIDO Y DNI
export const getEmpleadoXLAD = async(req,res) => {
    try {
        const {emp_legajo} = req.params
        const {emp_apellido} = req.params
        const {emp_nrodoc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('emp_legajo', emp_legajo)
            .input('emp_apellido', emp_apellido)
            .input('emp_nrodoc', emp_nrodoc)
            .query(usuquerys.getEmpleadoXLAD)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//Empleado X LEG Y APELLIDO
export const getEmpleadoLA = async(req,res) => {
    try {
        const {emp_legajo} = req.params
        const {emp_apellido} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('emp_legajo', emp_legajo)
            .input('emp_apellido', emp_apellido)
            .query(usuquerys.getEmpleadoLA)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//Empleado APELLIDO
export const getEmpleadoXA = async(req,res) => {
    try {
        const {emp_apellido} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('emp_apellido', emp_apellido)
            .query(usuquerys.getEmpleadoXA)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//Empleado X LEG Y DNI
export const getEmpleadoLD = async(req,res) => {
    try {
        const {emp_legajo} = req.params
        const {emp_nrodoc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('emp_legajo', emp_legajo)
            .input('emp_nrodoc', emp_nrodoc)
            .query(usuquerys.getEmpleadoLD)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//Empleado X DNI Y APELLIDO
export const getEmpleadoAD = async(req,res) => {
    try {
        const {emp_apellido} = req.params
        const {emp_nrodoc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('emp_apellido', emp_apellido)
            .input('emp_nrodoc', emp_nrodoc)
            .query(usuquerys.getEmpleadoAD)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//Perfiles
export const getPerfiles = async(req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request()
            .query(usuquerys.getPerfiles)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//Perfiles X Usuario SELECT
export const getPerfilesSelec = async(req,res) => {
    try {
        const {usu_id} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('usu_id', usu_id).query(usuquerys.getPerfilesSelec)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//Perfiles X Usuario NO SELECT
export const getPerfilesNOSelec = async(req,res) => {
    try {
        const {usu_id} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('usu_id', usu_id).query(usuquerys.getPerfilesNOSelec)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 