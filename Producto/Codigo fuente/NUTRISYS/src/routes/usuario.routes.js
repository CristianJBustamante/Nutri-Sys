const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();
const jwt = require('jsonwebtoken');
var passport = require('passport')
var AuthMiddleware = require("../middleware/auth")


import { getallusers, getUsuario, nuevousuario, getDatosUsuario, crearToken, login, logout, getlegajo, getultimolegajo, getultimoidusuario,
  registrarEmpleado, registrarUsuarioEmpleado, registrarUsuPerfil, actualizarEmpleado, actualizarUsuPerfil, actualizarUsuario, getEmpleado} from "../controllers/usuario.controller";

//ACCESO A PAGINAS
  //login
  router.get('/usuarios/login', AuthMiddleware.isLogged2,(req,res) => {
    res.render('usuarios/iniciarSesion.html');
  });
  //pantalla inicial
  router.get('/welcome',AuthMiddleware.isLogged ,(req,res) => {
      res.render('pantallaInicial.html',{
        isAuthenticated : req.isAuthenticated(),
        user : req.user
    }); 
  });


router.get('/usuario/:usu_usuario/:usu_clave', getUsuario)





//ACCESO A PAGINAS
  //login
  router.get('/usuarios/login', (req,res) => {
    res.render('usuarios/iniciarSesion.html');
  });

//REGISTRAR UN USUARIO
router.get('/usuario/nuevoUsuario/',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/abm/registrarUsuario.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user,
    titulo : "Nuevo Usuario"
});
});
//Editar usuario
router.get('/usuario/modificarusuario/leg=:emp_legajo',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/abm/registrarUsuario.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user,
    titulo : "Modificar Usuario"
});
});
//Buscar usuario
router.get('/usuario/consultausuario/',AuthMiddleware.isLogged, (req,res) => {
  res.render('pacientes/consultadatos/buscarEmpleado.html',{
    isAuthenticated : req.isAuthenticated(),
    user : req.user
});
});

//ACCESO A DATOS
router.get('/usuario/:usu_usuario/:usu_clave', getUsuario)
router.get('/usuarios',getallusers)
router.get('/datosusuario/:usu_usuario',getDatosUsuario)
router.post('/usuario',nuevousuario)
router.post('/usuario/login', passport.authenticate('local',{
  successRedirect : '/pacientes/buscarpaciente',
  failureRedirect : '/usuarios/login',

}))
  //logout
  router.get('/usuarios/logout', logout)


  //get ultimo legajo registrado
router.get('/ultimolegajo', getultimolegajo)
//get ultimo idusuario registrado
router.get('/ultimoidusuario', getultimoidusuario)
router.post('/registrarEmpleado', registrarEmpleado)
router.post('/registrarUsuarioEmpleado', registrarUsuarioEmpleado)
router.post('/registrarUsuPerfil', registrarUsuPerfil)
router.post('/borrarusuxip/:usu_id', actualizarUsuPerfil)
router.put('/actualizarEmpleado/:emp_legajo', actualizarEmpleado)
router.put('/actualizarUsuario/:usu_usuario', actualizarUsuario)
router.get('/usuario/:emp_legajo', getEmpleado)
module.exports = router;