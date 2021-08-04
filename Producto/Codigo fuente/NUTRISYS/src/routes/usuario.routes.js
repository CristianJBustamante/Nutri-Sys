const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();
import { getUsuario } from "../controllers/usuario.controller";

//ACCESO A PAGINAS
  //login
  router.get('/usuarios/login', (req,res) => {
    res.render('usuarios/iniciarSesion.html');
  });

//ACCESO A DATOS
router.get('/usuario/:usu_usuario/:usu_clave', getUsuario)

module.exports = router;