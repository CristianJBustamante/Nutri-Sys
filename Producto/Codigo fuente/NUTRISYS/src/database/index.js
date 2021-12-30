export * from './connection'
export {queries} from './querys'
export {pacquerys} from './querys/querys.paciente'
export {usuquerys} from './querys/querys.usuario'
export {consultasquerys} from './querys/querys.consultas'
export {turnosquerys} from './querys/querys.turnos'


//Notificaciones
const nodemailer = require('nodemailer');
const { getMaxListeners } = require('process');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'martinmolina1379@gmail.com', // generated ethereal user
      pass: 'leuabovgaxlmigjf', // generated ethereal password
    },
  });
  transporter.verify().then(()=>{
      console.log("Listo Para Enviar...");
  });