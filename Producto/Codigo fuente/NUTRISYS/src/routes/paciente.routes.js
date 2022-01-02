const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();
var passport = require('passport')
var AuthMiddleware = require("../middleware/auth")
import {actualizarPaciente, eliminarPaciente, getconsultaspaciente, getPacienteAPDoc, getPacienteHCAP, getPacienteHCDoc, getPacienteLikeDoc, getPacienteLikeHC, getPacienteMixto, getPacientes, getPacienteXap, getPacienteXHC, getpesospaciente, getultimoimc, nuevoPaciente} from "../controllers/paciente.controller";


//router.get('/nuevopaciente',(req,res) => {
//  res.render('registrarPacienteNuevo.html')
//});

//ACCESO A PÁGINAS
  //Registrar paciente
  router.get('/pacientes/nuevopaciente/',AuthMiddleware.isLogged, (req,res) => {
    res.render('pacientes/abm/registrarPacienteNuevo.html',{
      isAuthenticated : req.isAuthenticated(),
      user : req.user,
      titulo : "Nuevo Paciente"
  });
});
//Editar paciente
router.get('/pacientes/modificarpaciente/hc=:pac_nrohc',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/abm/registrarPacienteNuevo.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user,
    titulo : "Modificar Paciente"
});
});
  //Buscar pacientes
  router.get('/pacientes/buscarpaciente',AuthMiddleware.isLogged, (req,res) => {
    res.render('pacientes/consultadatos/historiaClinicaMP.html',{
      isAuthenticated : req.isAuthenticated(),
      user : req.user
  });
});
  //consulta hc paciente
  router.get('/pacientes/consultapaciente/hc=:pac_nrohc',AuthMiddleware.isLogged, (req,res) => {
    res.render('pacientes/consultadatos/historiaClinicaPaciente.html',{
      isAuthenticated : req.isAuthenticated(),
      user : req.user
  });
});
  //consulta hc paciente - Documentos
  router.get('/pacientes/consultapacientedocumentos/hc=:pac_nrohc',AuthMiddleware.isLogged, (req,res) => {
    res.render('pacientes/consultadatos/documentosPaciente.html',{
      isAuthenticated : req.isAuthenticated(),
      user : req.user
  });
  });
  //consulta hc paciente - Estudios
  // router.get('/pacientes/consultapacienteestudios/hc=:pac_nrohc',AuthMiddleware.isLogged, (req,res) => {
  //   res.render('pacientes/consultadatos/estudiosPaciente.html',{
  //     isAuthenticated : req.isAuthenticated(),
  //     user : req.user
  // });
  // });
  //consulta hc paciente - Habitos
  router.get('/pacientes/consultapacientehabitos/hc=:pac_nrohc',AuthMiddleware.isLogged, (req,res) => {
    res.render('pacientes/consultadatos/habitosPaciente.html',{
      isAuthenticated : req.isAuthenticated(),
      user : req.user
  });
  });
  //consulta hc paciente - Ficha Inicial
  router.get('/pacientes/consultapacientefichainicial/hc=:pac_nrohc',AuthMiddleware.isLogged, (req,res) => {
    res.render('pacientes/consultadatos/consultaFichaInicial.html',{
      isAuthenticated : req.isAuthenticated(),
      user : req.user
  });
   });
  //Editar Ficha Inicial
  router.get('/pacientes/modificarFichaInicial/hc=:pac_nrohc',AuthMiddleware.isLogged, (req,res) => {
    res.render('pacientes/fichainicialPaciente.html',{
      isAuthenticated : req.isAuthenticated(),
      user : req.user
  });
  });
 //consulta hc paciente - Gráficos
  router.get('/pacientes/graficospaciente/hc=:pac_nrohc',AuthMiddleware.isLogged, (req,res) => {
    res.render('pacientes/consultadatos/graficosPaciente.html',{
      isAuthenticated : req.isAuthenticated(),
      user : req.user
  });
  });
 //consulta hc paciente - Consulta
 router.get('/pacientes/buscarconsultaspaciente/hc=:pac_nrohc',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/consultadatos/BusquedaConsultaGeneral.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user
});
});
//consulta hc paciente - Consulta
router.get('/pacientes/consultageneral/cns=:cons_id/hc=:pac_nrohc',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/consultadatos/consultasPaciente.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user
});
});





//ACCESO A DATOS
  //Alta, Baja, Modif
router.post('/pacientes', nuevoPaciente)
router.delete('/paciente/:pac_nrohc', eliminarPaciente)
router.put('/pacientes/:pac_nrohc', actualizarPaciente)

  //Consultas
router.get('/pacientes', getPacientes)
router.get('/paciente/:pac_nrohc', getPacienteXHC)
router.get('/pesospaciente/:pac_nrohc', getpesospaciente)
router.get('/ultimoimc/:pac_nrohc', getultimoimc)
router.get('/consultaspaciente/:pac_nrohc', getconsultaspaciente)
router.get('/pacientes/hc=:pac_nrohc',getPacienteLikeHC)
router.get('/pacientes/doc=:pac_nrodoc',getPacienteLikeDoc)
router.get('/pacientes/ap=:pac_apellido', getPacienteXap)
router.get('/pacientes/hc=:pac_nrohc/ap=:pac_apellido/doc=:pac_nrodoc', getPacienteMixto)
router.get('/pacientes/hc=:pac_nrohc/ap=:pac_apellido', getPacienteHCAP)
router.get('/pacientes/hc=:pac_nrohc/doc=:pac_nrodoc', getPacienteHCDoc)
router.get('/pacientes/ap=:pac_apellido/doc=:pac_nrodoc', getPacienteAPDoc)


module.exports = router;
