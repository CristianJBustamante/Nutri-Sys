const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();

import { getAnamnesisXHC, registrarAnamnesis, registrarfichainicial, actualizarAnamnesis, actualizarFichaInicial, registrarHabitos, actualizarHabitos, registrarHabitoPaciente, registrarDetalleHabito, actualizarHabitoPaciente, actualizarDetalleHabito, getHabitosXHC} from "../controllers/consultas.controller";

//----------------------------------ACCESO A PÁGINAS--------------------------------------------

//-------FICHA INICIAL-----------
//Registrar Ficha Inicial
router.get('/consulta/registrarFichaInicial/hc=:hc_nrohc', (req,res) => {
  res.render('pacientes/consultainicial/Fichas_fichaInicialPaciente.html');
});

router.get('/consulta/actualizarFichaInicial/hc=:anms_nrohc', (req,res) => {
  res.render('pacientes/consultainicial/Fichas_fichaInicialPaciente.html');
  });

//-------ANAMNESIS---------------
//Registrar Anamnesis
    router.get('/consulta/registrarAnamnesis/hc=:anms_nrohc', (req,res) => {
    res.render('pacientes/consultainicial/Fichas_anamnesisAlimentaria.html');
});

  //Consultar Anamnesis x HC
  //router.get('/pacientes/consultaAnamnesisXHC/hc=:pac_nrohc', (req,res) => {
  //  res.render('pacientes/fichaInicialPaciente.html');
//});

//Editar Anamnesis
router.get('/consulta/actualizarAnamnesis/hc=:anms_nrohc', (req,res) => {
res.render('pacientes/consultainicial/Fichas_anamnesisAlimentaria.html');
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
  //Alta, Baja, Modif
  router.post('/registrarfichainicial', registrarfichainicial)
  router.put('/actualizarFichaInicial/:hc_nrohc', actualizarFichaInicial)
  router.post('/registraranamnesis', registrarAnamnesis)
  router.put('/actualizarAnamnesis/:anms_nrohc', actualizarAnamnesis)
  router.post('/registrarHabitos', registrarHabitos)
  router.post('/registrarHabitos', registrarHabitoPaciente)
  router.post('/registrarHabitos', registrarDetalleHabito)

  router.put('/actualizarHabitos/:habpac_nrohc', actualizarHabitos)
  router.put('/actualizarHabitos/:habpac_nrohc', actualizarHabitoPaciente)
  router.put('/actualizarHabitos/:habpac_nrohc', actualizarDetalleHabito)


 //Consultas
 router.get('/fichas', getAnamnesisXHC)


module.exports = router;

