const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();
const jwt = require('jsonwebtoken');
var passport = require('passport')
var AuthMiddleware = require("../middleware/auth")
const {sendMessage} = require('../twilio/send-sms')

router.post('/send-sms', async (req, res) => {

    const response = await sendMessage(req.body.mensaje,req.body.telefono)
    let mensaje = req.body.mensaje
    let telefono = req.body.telefono
    res.json({mensaje,telefono})
})

module.exports = router;