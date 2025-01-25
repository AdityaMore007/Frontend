import Dish from "../models/dish.js"

export const getallDishes = async (req,res) => {
    try {
        const alldishes = await Dish.find()
        res.status(200).json(alldishes)
    } catch (err) {
        console.log(err)
    }
}

export const addDish = async (req,res) => {
    const dish = req.body
    try {
        const newdish = await Dish(dish)
        newdish.save()
        res.status(200).json(newdish)
    } catch (err) {
        console.log(err)
    }
}

export const getDish = async (req,res) => {
    const id = req.params.id
    try {
        const dish = await Dish.findOneById(id)
        res.status(200).json(dish)
    } catch (err) {
        console.log(err)
    }
}

export const searchDish = async (req,res) => {
    const query = req.query.q
    try {
        const dish = await Dish.find({
            dishname: { $regex : query, $options: "i"}
        }).limit(40);
         res.status(200).json(dish)
    } catch (err) {
        console.log(err)
    }
}