import {Schema, Model} from "mongoose"

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


const User = new Model('user', userSchema)

export default User