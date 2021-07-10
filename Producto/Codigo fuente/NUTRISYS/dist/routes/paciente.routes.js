"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _mutual = require("../controllers/mutual.controller");

var _paciente = require("../controllers/paciente.controller");

var router = (0, _express.Router)();
router.get('/pacientes', _paciente.getPacientes);
router.post('/pacientes', _paciente.nuevoPaciente);
router["delete"]('/pacientes/:pac_nrohc', _paciente.eliminarPaciente);
router.put('/pacientes/:pac_nrohc', _paciente.actualizarPaciente);
router.get('/pacientes/:pac_nrohc', _paciente.getPacienteXHC);
var _default = router;
exports["default"] = _default;