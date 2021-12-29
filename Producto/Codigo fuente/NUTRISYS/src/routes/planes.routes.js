const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();
var passport = require('passport')
var AuthMiddleware = require("../middleware/auth")

//ACCESO A PÁGINAS
  //Registrar paciente
  router.get('/pacientes/nuevoplanalimentario/hc=:pac_nrohc',AuthMiddleware.isLogged, (req,res) => {
    res.render('pacientes/planes/PlanAlimentario.html',{
      isAuthenticated : req.isAuthenticated(),
      user : req.user,
      titulo : "Nuevo Paciente"
  });
});

module.exports = router;