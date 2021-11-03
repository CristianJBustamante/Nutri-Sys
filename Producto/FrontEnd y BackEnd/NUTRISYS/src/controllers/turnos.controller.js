import {getConnection,sql,turnosquerys} from "../database";
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const moment = require('moment');

//GET TURNOS X LEGAJO
export const getturnosxlegajo = async(req,res) => {
    try {
        const {turno_legajoempleado} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('turno_legajoempleado', turno_legajoempleado)
            .query(turnosquerys.getturnosxlegajo)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//GET PROFESIONALES
export const getprofesionales = async(req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request()
            .query(turnosquerys.getprofesionales)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//GET AGENDA X LEGAJO
export const getagendaxlegajo = async(req,res) => {
    try {
        const {agen_legajoempleado} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('agen_legajoempleado', agen_legajoempleado)
            .query(turnosquerys.getagendaxlegajo)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//MODIFICAR ESTADO TURNO
export const actualizarestadoturno = async(req,res) => {
    let {turno_idestado} = req.body;
    const {turno_id} = req.params;

    try {
        const pool = await getConnection();
        await pool.request()
        .input('turno_id',sql.Int,turno_id)
        .input('turno_idestado',sql.Int,turno_idestado)
        .query(turnosquerys.modificarestadoturno)
        res.json({  turno_id,turno_idestado})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    } 
}