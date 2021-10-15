const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();
var passport = require('passport')
var AuthMiddleware = require("../middleware/auth")
//import {} from "../controllers/paciente.controller";

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

module.exports = router;