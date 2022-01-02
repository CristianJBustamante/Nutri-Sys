const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();
var passport = require('passport')
var AuthMiddleware = require("../middleware/auth");
const { registrarplan, registrardetplan, getultimoplan, novigentes, buscarplanes } = require('../controllers/planes.controller');

//ACCESO A PÁGINAS
  //Registrar plan
  router.get('/pacientes/nuevoplanalimentario/hc=:pac_nrohc',AuthMiddleware.isLogged, (req,res) => {
    res.render('pacientes/planes/PlanAlimentario.html',{
      isAuthenticated : req.isAuthenticated(),
      user : req.user,
  });
});

//consulta hc paciente - Buscar Planes
router.get('/pacientes/buscarplanes/hc=:pac_nrohc',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/planes/BusquedaPlanAlimenticio.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user
});
});

//consulta hc paciente - Planes
router.get('/pacientes/consultageneral/cns=:cons_id/hc=:pac_nrohc',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/planes/consultasPaciente.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user
});
});


//ACCESO A DATOS
router.post('/nuevoplanalimentario', registrarplan)
router.post('/nuevodetplanalimentario', registrardetplan)
router.put('/planesnovigentes/:plan_nrohc', novigentes)


router.get("/ultimoplan",getultimoplan)
router.get("/buscarplanes/:plan_nrohc",buscarplanes)


module.exports = router;