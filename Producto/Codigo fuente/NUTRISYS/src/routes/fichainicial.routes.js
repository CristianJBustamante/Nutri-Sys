const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();

import { getAnamnesisXHC, registrarAnamnesis, registrarfichainicial } from "../controllers/fichainicial.controller";

//----------------------------------ACCESO A PÁGINAS--------------------------------------------

//-------FICHA INICIAL-----------
//Registrar Ficha Inicial
router.get('/consulta/registrarFichaInicial/hc=:anms_nrohc', (req,res) => {
  res.render('pacientes/fichainicial/Fichas_fichaInicialPaciente.html');
});

//-------ANAMNESIS---------------
//Registrar Anamnesis
    router.get('/consulta/registrarAnamnesis/hc=:anms_nrohc', (req,res) => {
    res.render('pacientes/fichainicial/Fichas_anamnesisAlimentaria.html');
});
  //Consultar Anamnesis x HC
  router.get('/pacientes/consultaAnamnesisXHC/hc=:pac_nrohc', (req,res) => {
    res.render('pacientes/fichaInicialPaciente.html');
});

//--------------------------------------ACCESO A DATOS----------------------------------------------
  //Alta, Baja, Modif
  router.post('/registrarfichainicial', registrarfichainicial)
  router.post('/registraranamnesis', registrarAnamnesis)

 //Consultas
 router.get('/fichas', getAnamnesisXHC)

module.exports = router;

