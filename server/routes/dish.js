import Router from "express"
const router = new Router()

router.get('',addDish)
router.get('',getDish)
router.get('/:id',getDishes)
router.get('',searchDish)

export default router