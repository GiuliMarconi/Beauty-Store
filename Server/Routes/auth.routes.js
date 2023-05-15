import {Router} from "express";
import {ckeckUser, createUser} from '../controllers/auth.controller.js'
const router = Router()

router.post('/login', ckeckUser)
router.post('/register', createUser)

export default router;