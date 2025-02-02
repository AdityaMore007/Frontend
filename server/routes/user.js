import Router from "express"
import { addUser, getallUsers, getUser } from "../controller/user.js"
const router = new Router()

router.post('/:id',addUser)
router.get('/',getallUsers)
router.get('/:id',getUser)


export default router