const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();

import { getAnamnesisXHC, registrarAnamnesis } from "../controllers/fichas.controller";

//Registrar Anamnesis
    router.get('/fichas/registrarAnamnesis', (req,res) => {
    res.render('fichas/registrarAnamnesis.html');
});

  //Consultar Anamnesis x HC
  router.get('/pacientes/consultaAnamnesisXHC/hc=:pac_nrohc', (req,res) => {
    res.render('pacientes/fichaInicialPaciente.html');
});

//ACCESO A DATOS
  //Alta, Baja, Modif
  router.post('/fichas', registrarAnamnesis)

 //Consultas
 router.get('/fichas', getAnamnesisXHC)

module.exports = router;

