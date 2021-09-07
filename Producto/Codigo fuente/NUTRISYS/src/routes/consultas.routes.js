const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();

import { getAnamnesisXHC, registrarAnamnesis, registrarfichainicial, actualizarAnamnesis } from "../controllers/consultas.controller";

//----------------------------------ACCESO A PÁGINAS--------------------------------------------

//-------FICHA INICIAL-----------
//Registrar Ficha Inicial
router.get('/consulta/registrarFichaInicial/hc=:anms_nrohc', (req,res) => {
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

//--------------------------------------ACCESO A DATOS----------------------------------------------
  //Alta, Baja, Modif
  router.post('/registrarfichainicial', registrarfichainicial)
  router.post('/registraranamnesis', registrarAnamnesis)
  router.put('/actualizarAnamnesis/:anms_nrohc', actualizarAnamnesis)

 //Consultas
 router.get('/fichas', getAnamnesisXHC)

module.exports = router;

