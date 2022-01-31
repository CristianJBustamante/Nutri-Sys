const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();
const jwt = require('jsonwebtoken');
var passport = require('passport')
var AuthMiddleware = require("../middleware/auth")


import { getallusers, getUsuario, nuevousuario, getDatosUsuario, crearToken, login, logout, getlegajo, getultimolegajo, getultimoidusuario,
  registrarEmpleado, registrarUsuarioEmpleado, registrarUsuPerfil, actualizarEmpleado, actualizarUsuPerfil, actualizarUsuario, getEmpleado, getEmpleadoXL, getEmpleadoXD,
  getEmpleadoXA, getEmpleadoXLAD, getEmpleadoLA, getEmpleadoLD, getEmpleadoAD,getEmpleadoTodos, getPerfiles, getPerfilesNOSelec, getPerfilesSelec, getpermiso,
  getUsuarioPaciente,nuevousuariopac} from "../controllers/usuario.controller";

//ACCESO A PAGINAS
  
  //pantalla inicial
  router.get('/Home',AuthMiddleware.isLogged ,(req,res) => {
    if (req.user.emp_legajo == null) {
      res.render('HomePacientes.html',{
        isAuthenticated : req.isAuthenticated(),
        user : req.user
    }); }else{
      res.render('HomeEmpleados.html',{
        isAuthenticated : req.isAuthenticated(),
        user : req.user
    }); 
    }
      
      
  });


router.get('/usuario/:usu_usuario/:usu_clave', getUsuario)





//ACCESO A PAGINAS
  //portal
  router.get('/', (req,res) => {
    res.render('portalNutrisys.html', {authmessage : req.flash('authmessage')});
  });

  //login
  router.get('/login', (req,res) => {
    res.render('usuarios/iniciarSesion.html', {authmessage : req.flash('authmessage')});
  });

//REGISTRAR UN USUARIO
router.get('/usuarios/nuevoUsuario/',AuthMiddleware.isLogged, (req,res) => {
  res.render('usuarios/registrarUsuario.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user,
    titulo : "Nuevo Usuario"
});
});
//Editar usuario
router.get('/usuarios/modificarusuario/leg=:emp_legajo',AuthMiddleware.isLogged, (req,res) => {
  res.render('usuarios/registrarUsuario.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user,
    titulo : "Nuevo Usuario"
    
});
});


//Buscar usuario
router.get('/usuarios/consultausuario/',AuthMiddleware.isLogged, (req,res) => {
  res.render('usuarios/buscarEmpleado.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user
});
});

//Registrar usuario Paciente
router.get('/nuevousuario/hc=:pac_nroch', (req,res) => {
  res.render('usuarios/registrarUsuarioPaciente.html')});

//ACCESO A DATOS
router.get('/usuario/:usu_usuario/:usu_clave', getUsuario)
router.get('/buscardatospaciente/:pac_nrohc/', getUsuarioPaciente)

router.get('/usuario',getallusers)
router.get('/datosusuario/:usu_usuario',getDatosUsuario)
router.post('/usuarios',nuevousuario)
router.post('/usuario/login', passport.authenticate('local',{
  successRedirect : '/home',
  failureRedirect : '/login',
  failureFlash : true 

}))
  //logout
  router.get('/usuarios/logout', logout)


  //get ultimo legajo registrado
router.get('/ultimolegajo', getultimolegajo)
//get ultimo idusuario registrado
router.get('/ultimoidusuario', getultimoidusuario)
router.post('/registrarEmpleado', registrarEmpleado)
router.post('/registrarUsuarioEmpleado', registrarUsuarioEmpleado)
router.post('/nuevousuariopac', nuevousuariopac)


router.post('/registrarUsuPerfil', registrarUsuPerfil)

router.delete('/borrarusuxip/:usu_id', actualizarUsuPerfil)
router.put('/usuarios/actualizarEmpleado/:emp_legajo', actualizarEmpleado)
router.put('/usuarios/actualizarUsuario/:usu_usuario', actualizarUsuario)
router.get('/usuarios/:emp_legajo', getEmpleado)

  //Consultas
  router.get('/empleado/',getEmpleadoTodos)
  router.get('/empleado/leg=:emp_legajo',getEmpleadoXL)
  router.get('/empleado/doc=:emp_nrodoc',getEmpleadoXD)
  router.get('/empleado/ap=:emp_apellido', getEmpleadoXA)
  router.get('/empleado/leg=:emp_legajo/ap=:emp_apellido/doc=:emp_nrodoc', getEmpleadoXLAD)
  router.get('/empleado/leg=:emp_legajo/ap=:emp_apellido', getEmpleadoLA)
  router.get('/empleado/leg=:emp_legajo/doc=:emp_nrodoc', getEmpleadoLD)
  router.get('/empleado/ap=:emp_apellido/doc=:emp_nrodoc', getEmpleadoAD)
  router.get('/permiso/:usu_id/:usu_idperfil', getpermiso)

  router.get('/perfil/', getPerfiles)
  router.get('/perfil/:usu_id', getPerfilesSelec)
  router.get('/noperfil/:usu_id', getPerfilesNOSelec)

module.exports = router;