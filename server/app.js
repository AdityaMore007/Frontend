import express from "express"
import userrouter from "./routes/user.js"
import authrouter from "./routes/auth.js"
import dishrouter from "./routes/dish.js"
import cartrouter from "./routes/cart.js"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"

const app = express();

dotenv.config()
const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("connected mongoose")
    })
} 
app.use(cors({
    origin: 'http://localhost:5173'  
    , credentials: true
  }));
app.use(cookieParser())
app.use(express.json())
app.use('/api/user',userrouter)
app.use('/api/dish',dishrouter)
app.use('/api/auth',authrouter)
app.use('/api/cart',cartrouter)


app.listen(3000, () => {
    connect()
    console.log('server is running on port 3000')
})