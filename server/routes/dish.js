import Router from "express"
import { addDish, getallDishes, getDish, searchDish } from "../controller/dish.js"
const router = new Router()

router.post('/',addDish)
router.get('/',getallDishes)
router.get('/:id',getDish)
router.get('/search',searchDish)

export default router