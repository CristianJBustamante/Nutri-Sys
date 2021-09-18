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
    


