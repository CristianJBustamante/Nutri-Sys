const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();
var passport = require('passport')
var AuthMiddleware = require("../middleware/auth")

import {modificaconsultageneral,getultimoidhabpac,registrarconsulta2, getprimeroshabitos, getultimoshabitos, getconsultaxturno, registrarconsulta, getAnamnesisXHC, registrarAnamnesis, registrarfichainicial, actualizarAnamnesis, actualizarFichaInicial, nuevohabito, actualizarHabitos, registrarHabitoPaciente, registrarDetalleHabito, actualizarHabitoPaciente, actualizarDetalleHabito, getHabitoXHC, getFichaInicialXHC, getHabitos, getultimoidhabito, getnoultimoshabitos, getconsultaxnrohc, getconsultaxid, registrarhabitostrabajados,
   registrarcabecerahpac,gethabitopactado,getultimoshabitosconsulta, getultimoshabitospaciente,gethabitopactadoconsulta, gethabitopactadopaciente, getconsultaxturnoarreglo} from "../controllers/consultas.controller";

//----------------------------------ACCESO A PÁGINAS--------------------------------------------

//-------FICHA INICIAL-----------
//Registrar Ficha Inicial
router.get('/consulta/registrarFichaInicial/hc=:hc_nrohc/trn=:cons_idturno',AuthMiddleware.isLogged , (req,res) => {
  res.render('pacientes/consultainicial/Fichas_fichaInicialPaciente.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user
  });
  });

router.get('/consulta/actualizarFichaInicial/hc=:anms_nrohc/trn=:cons_idturno',AuthMiddleware.isLogged , (req,res) => {
  res.render('pacientes/consultainicial/Fichas_fichaInicialPaciente.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user
  });
  });

//-------ANAMNESIS---------------
//Registrar Anamnesis
    router.get('/consulta/registrarAnamnesis/hc=:anms_nrohc/trn=:cons_idturno',AuthMiddleware.isLogged , (req,res) => {
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
router.get('/consulta/actualizarAnamnesis/hc=:anms_nrohc/trn=:cons_idturno', AuthMiddleware.isLogged ,(req,res) => {
res.render('pacientes/consultainicial/Fichas_anamnesisAlimentaria.html',{
  isAuthenticated : req.isAuthenticated(),
  user : req.user
});
});


//---------Habitos No Saludables------------
//Registrar Habitos
    router.get('/consulta/registrarHabitos/hc=:anms_nrohc/trn=:cons_idturno',AuthMiddleware.isLogged , (req,res) => {
    res.render('pacientes/consultainicial/Fichas_habitosNoSaludables.html',{
      isAuthenticated : req.isAuthenticated(),
      user : req.user
    });
});

//Registrar Habitos Pactados
router.get('/consulta/registrarHabitosPactado/hc=:anms_nrohc/trn=:cons_idturno',AuthMiddleware.isLogged , (req,res) => {
  res.render('pacientes/consultainicial/HabitosPactados.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user
  });
});

//Actualizar habitos pactados
router.get('/consulta/actualizarHabitosPactado/hc=:anms_nrohc/trn=:cons_idturno',AuthMiddleware.isLogged , (req,res) => {
  res.render('pacientes/consultainicial/HabitosPactados.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user
  });
});

//Editar Habitos
router.get('/consulta/actualizarHabitos/hc=:habpac_nrohc/trn=:cons_idturno',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/consultainicial/Fichas_habitosNoSaludables.html',{
    isAuthenticated : req.isAuthenticated(),
      user : req.user
      });
});
  

//------------------------CONSULTA GENERAL
//alta
router.get('/consulta/registrarconsulta/hc=:habpac_nrohc/trn=:cons_idturno',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/consultas/ConsultaGeneral.html',{
    isAuthenticated : req.isAuthenticated(),
      user : req.user
      });
});

router.get('/consulta/registrarconsultahabitos/hc=:habpac_nrohc/trn=:cons_idturno',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/consultas/ConsultaGeneralHabitos.html',{
    isAuthenticated : req.isAuthenticated(),
      user : req.user
      });
});

router.get('/consulta/registrarconsultahabitospactados/hc=:habpac_nrohc/trn=:cons_idturno',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/consultas/ConsultaGeneralHabitosPactados.html',{
    isAuthenticated : req.isAuthenticated(),
      user : req.user
      });
});

//midifica
router.get('/consulta/modificaconsulta/hc=:habpac_nrohc/trn=:cons_idturno',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/consultas/ConsultaGeneral.html',{
    isAuthenticated : req.isAuthenticated(),
      user : req.user
      });
});

router.get('/consulta/modificarconsultahabitos/hc=:habpac_nrohc/trn=:cons_idturno',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/consultas/ConsultaGeneralHabitos.html',{
    isAuthenticated : req.isAuthenticated(),
      user : req.user
      });
});



//CONSULTA HABITOS
router.get('/consulta/consultaHabitos/hc=:habpac_nrohc/trn=:cons_idturno',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/consultadatos/consulta_HabitosPactados.html',{
    isAuthenticated : req.isAuthenticated(),
      user : req.user
      });
});

//CONSULTA de la CONSULTA GENERAL
router.get('/consultadatos/consultaGeneral/hc=:pac_nrohc/trn=:cons_idturno',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/consultadatos/ConsultaGeneral.html',{
    isAuthenticated : req.isAuthenticated(),
      user : req.user
      });
});

//MI PROGRESO
router.get('/consulta/miprogreso',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/consultadatos/MiProgreso.html',{
    isAuthenticated : req.isAuthenticated(),
      user : req.user
      });
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
  //router.get("/habitosPactados/:habpac_nrohc",getHabitosPactados)
  router.get("/ultimohabito",getultimoidhabito)

  router.post('/cabecerahabitos', registrarHabitoPaciente)
  router.post('/detallehabitos', registrarDetalleHabito)
  router.get("/habitospaciente/:habpac_nrohc",getHabitoXHC)
  router.get("/idultimohabpac",getultimoidhabpac)

  router.put('/actualizarHabitos/:hab_id', actualizarHabitos)
  router.put('/actualizarcabecerahabito/:habpac_id', actualizarHabitoPaciente)
  router.delete('/borrardetallehabito/:habpac_id', actualizarDetalleHabito)
  router.put('/registrarhabitopactado/:dhabpac_id/:dhabpac_habito', registrarhabitostrabajados)
  router.put('/cabecerahabpactado/:habpac_id', registrarcabecerahpac)



  router.get("/ultimoshabitos/:habpac_nrohc",getultimoshabitos)
  router.get("/ultimoshabitosconsulta/hc=:pac_nrohc/trn=:cons_idturno", getultimoshabitosconsulta)
  //Habitos Mi Progreso
  router.get("/ultimoshabitospaciente/:habpac_nrohc",getultimoshabitospaciente)
  //
  router.get("/primeroshabitos/:habpac_nrohc",getprimeroshabitos)
  router.get("/noultimoshabitos/:habpac_nrohc",getnoultimoshabitos)
  router.get("/habitopactado/hc=:habpac_nrohc/trn=:cons_idturno",gethabitopactado)
  
  //Habitos Mi Progreso
  router.get("/habitopactadopaciente/:habpac_nrohc",gethabitopactadopaciente)
  //


    //--------------CONSULTA
  router.post('/consulta', registrarconsulta)
  router.post('/nuevaconsulta', registrarconsulta2)
  router.put('/modificarconsultageneral/:cons_idturno', modificaconsultageneral)
  router.get('/consulta/:cons_idturno', getconsultaxturno)
  router.get('/consultaarreglo/:cons_idturno', getconsultaxturnoarreglo)

  router.get('/consultapaciente/:cons_id', getconsultaxid)
  router.get('/consultanrohc/:turno_nrohc', getconsultaxnrohc)

 //Consultas
 router.get('/anamnesis/:anms_nrohc', getAnamnesisXHC)
 router.get('/fichainicial/:hc_nrohc', getFichaInicialXHC)


module.exports = router;

