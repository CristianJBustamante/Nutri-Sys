import {Router} from 'express'
import {getMutuales} from "../controllers/mutual.controller";

const router = Router()

router.get('/mutual', getMutuales)

export default router
