import {Schema, model} from "mongoose"

const userSchema = new Schema({
    username:{
        type: String,
        required:true
    },
    imageUrl: {
        type:String,
        default:''
    },email:{
        type:String,
        required: true
    },password: {
         type: String, 
         requried: true
    }
},{timestamps:true})


const User = new model('user', userSchema)

export default User