const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();
var passport = require('passport')
var AuthMiddleware = require("../middleware/auth")

import { getAnamnesisXHC, registrarAnamnesis, registrarfichainicial, actualizarAnamnesis, actualizarFichaInicial, nuevohabito, actualizarHabitos, registrarHabitoPaciente, registrarDetalleHabito, actualizarHabitoPaciente, actualizarDetalleHabito, getHabitoXHC, getFichaInicialXHC, getHabitos} from "../controllers/consultas.controller";

//----------------------------------ACCESO A PÁGINAS--------------------------------------------

//-------FICHA INICIAL-----------
//Registrar Ficha Inicial
router.get('/consulta/registrarFichaInicial/hc=:hc_nrohc',AuthMiddleware.isLogged , (req,res) => {
  res.render('pacientes/consultainicial/Fichas_fichaInicialPaciente.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user
  });
  });

router.get('/consulta/actualizarFichaInicial/hc=:anms_nrohc',AuthMiddleware.isLogged , (req,res) => {
  res.render('pacientes/consultainicial/Fichas_fichaInicialPaciente.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user
  });
  });

//-------ANAMNESIS---------------
//Registrar Anamnesis
    router.get('/consulta/registrarAnamnesis/hc=:anms_nrohc',AuthMiddleware.isLogged , (req,res) => {
    res.render('pacientes/consultainicial/Fichas_anamnesisAlimentaria.html',{
      isAuthenticated : req.isAuthenticated(),
      user : req.user
  });
  });

  //Consultar Anamnesis x HC
  //router.get('/pacientes/consultaAnamnesisXHC/hc=:pac_nrohc', (req,res) => {
  //  res.render('pacientes/fichaInicialPaciente.html');
//});

//Editar Anamnesis
router.get('/consulta/actualizarAnamnesis/hc=:anms_nrohc', AuthMiddleware.isLogged ,(req,res) => {
res.render('pacientes/consultainicial/Fichas_anamnesisAlimentaria.html',{
  isAuthenticated : req.isAuthenticated(),
  user : req.user
});
});


//---------Habitos No Saludables------------
//Registrar Habitos
    router.get('/consulta/registrarHabitos/hc=:anms_nrohc', (req,res) => {
    res.render('pacientes/consultainicial/Fichas_habitosNoSaludables.html');
});

//Editar Habitos
router.get('/consulta/actualizarHabitos/hc=:habpac_nrohc', (req,res) => {
  res.render('pacientes/consultainicial/Fichas_habitosNoSaludables.html');
});
  

//--------------------------------------ACCESO A DATOS----------------------------------------------
  //-------------FICHA INICIAL
  router.post('/registrarfichainicial', registrarfichainicial)
  router.put('/actualizarFichaInicial/:hc_nrohc', actualizarFichaInicial)

  //-------------ANAMNESIS
  router.post('/registraranamnesis', registrarAnamnesis)
  router.put('/actualizarAnamnesis/:anms_nrohc', actualizarAnamnesis)

  //--------------HABITOS
  router.post('/habitos', nuevohabito)
  router.get("/habitos",getHabitos)

  router.post('/cabecerahabitos', registrarHabitoPaciente)
  router.post('/detallehabitos', registrarDetalleHabito)
  router.get("/habitospaciente/:habpac_nrohc",getHabitoXHC)

  router.put('/actualizarHabitos/:habpac_nrohc', actualizarHabitos)
  router.put('/actualizarHabitos/:habpac_nrohc', actualizarHabitoPaciente)
  router.put('/actualizarHabitos/:habpac_nrohc', actualizarDetalleHabito)


 //Consultas
 router.get('/anamnesis/:anms_nrohc', getAnamnesisXHC)
 router.get('/fichainicial/:hc_nrohc', getFichaInicialXHC)


module.exports = router;

