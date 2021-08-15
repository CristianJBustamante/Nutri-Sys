const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();
import { getItemsAnamnesis } from "../controllers/anamnesis.controller";

//ACCESO A DATOS
router.get('/itemanamnesis', getItemsAnamnesis)




module.exports = router;