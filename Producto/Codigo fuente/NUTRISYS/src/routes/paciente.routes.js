import {Router} from 'express'
import { getMutuales } from '../controllers/mutual.controller';
import {actualizarPaciente, eliminarPaciente, getPacientes, getPacienteXHC, nuevoPaciente} from "../controllers/paciente.controller";

const router = Router()

router.get('/pacientes', getPacientes)
router.post('/pacientes', nuevoPaciente)
router.delete('/pacientes/:pac_nrohc', eliminarPaciente)
router.put('/pacientes/:pac_nrohc', actualizarPaciente)
router.get('/pacientes/:pac_nrohc', getPacienteXHC)
export default router