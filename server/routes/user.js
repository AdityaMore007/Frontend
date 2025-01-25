import Router from "express"
const router = new Router()

router.post('/:id',addUser)
router.get('',getallUSer)
router.get('/:id',getUser)
// router.get('',)

export default router