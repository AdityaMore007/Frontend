import Router from "express"
import { addDish, getallDishes, getDish, searchDish } from "../controller/dish.js"
const router = new Router()

router.get('/search',searchDish)
router.post('/',addDish)
router.get('/',getallDishes)
router.get('/:id',getDish)

export default router