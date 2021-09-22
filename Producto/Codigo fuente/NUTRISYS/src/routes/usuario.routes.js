const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();
const jwt = require('jsonwebtoken');
var passport = require('passport')
var AuthMiddleware = require("../middleware/auth")


import { getallusers, getUsuario, nuevousuario, getDatosUsuario, crearToken, login, logout} from "../controllers/usuario.controller";

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


//ACCESO A DATOS
router.get('/usuario/:usu_usuario/:usu_clave', getUsuario)

//ACCESO A PAGINAS
  //login
  router.get('/usuarios/login', (req,res) => {
    res.render('usuarios/iniciarSesion.html');
  });



//ACCESO A DATOS
router.get('/usuario/:usu_usuario/:usu_clave', getUsuario)
router.get('/usuarios',getallusers)
router.get('/datosusuario/:usu_usuario',getDatosUsuario)
router.post('/usuario',nuevousuario)
router.post('/usuario/login', passport.authenticate('local',{
  successRedirect : '../welcome',
  failureRedirect : '../usuarios/login',

}))
  //logout
  router.get('/usuarios/logout', logout)
module.exports = router;