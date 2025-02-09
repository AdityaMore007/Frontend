import Router from "express"
import { login, logout, signup } from "../controller/auth.js"
import verifyToken from "../lib/verify.js"
const router = new Router()

router.post('/login',login)
router.post('/signup',signup)
router.post('/logout',verifyToken,logout)


export default router