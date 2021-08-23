const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();

import { getAnamnesisXHC, registrarAnamnesis } from "../controllers/fichas.controller";

//ACCESO A PÁGINAS
//Registrar Anamnesis
    router.get('/consulta/registrarAnamnesis/hc=:anms_nrohc', (req,res) => {
    res.render('pacientes/fichainicial/Fichas_anamnesisAlimentaria.html');
});

  //Consultar Anamnesis x HC
  router.get('/pacientes/consultaAnamnesisXHC/hc=:pac_nrohc', (req,res) => {
    res.render('pacientes/fichaInicialPaciente.html');
});

//ACCESO A DATOS
  //Alta, Baja, Modif
  router.post('/registraranamnesis', registrarAnamnesis)

 //Consultas
 router.get('/fichas', getAnamnesisXHC)

module.exports = router;

