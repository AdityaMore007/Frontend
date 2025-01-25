import {Schema, Model} from "mongoose"

const DishSchema = new Schema({
    dishname:{
        type: String,
        required:true
    },
    imageUrl: {
        type:String,
        default:''
    },price:{
        type:Number,
        required: true
    },calories: {
         type: Number, 
         requried: true
    },prepTime:{
        type: Number,required: true
    },
    ingredients: {
        type: [String],
        default: []
    },desc:{
        type: String
    }
},{timestamps:true})


const Dish = new Model('dish', DishSchema)

export default Dish