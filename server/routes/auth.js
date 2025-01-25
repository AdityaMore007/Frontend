import Router from "express"
import { login, logout, signup } from "../controller/auth.js"
import verifyToken from "../lib/verify.js"
const router = new Router()

router.post('/login',login)
router.get('/logout',verifyToken,logout)
router.post('/signup',signup)


export default router