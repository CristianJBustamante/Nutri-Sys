const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();
var passport = require('passport')
var AuthMiddleware = require("../middleware/auth")
import {actualizarestadoturno, actualizarhoraturno, borrarturno, getagendaxlegajo, getprofesionales, getturnosxlegajo, getturnoxidturno, nuevoTurno} from "../controllers/turnos.controller";

//ACCESO A PAGINAS
//MIS TURNOS
router.get('/turnos/leg=:pac_nrohc',AuthMiddleware.isLogged, (req,res) => {
    res.render('pacientes/turnos/MisTurnos.html',{
      isAuthenticated : req.isAuthenticated(),
      user : req.user
  });
});

//RECEP TURNOS
router.get('/turnos',AuthMiddleware.isLogged, (req,res) => {
    res.render('pacientes/turnos/RecepcionDeTurnos.html',{
      isAuthenticated : req.isAuthenticated(),
      user : req.user
  });
});

//RECEP MIS TURNOS PACIENTE
router.get('/turnospaciente/leg=:pac_nrohc/',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/turnos/MisTurnosPaciente.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user
});
});

//ACCESO A DATOS
router.get("/turnosempleado/:turno_legajoempleado",getturnosxlegajo)
router.get("/turno/:turno_id",getturnoxidturno)
router.get("/profesionales",getprofesionales)
router.get("/agendaempleado/:agen_legajoempleado",getagendaxlegajo)
router.put("/actualizarturno/:turno_id",actualizarestadoturno)
router.post("/registrarturno",nuevoTurno)
router.put("/actualizarhoraturno/:turno_id",actualizarhoraturno)
router.delete("/borrarturno/:turno_id",borrarturno)


module.exports = router;