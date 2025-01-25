import express from "express"
import userrouter from "./routes/user.js"
import dishrouter from "./routes/auth.js"
import authrouter from "./routes/dish.js"
import cartrouter from "./routes/cart.js"

const app  = express()


app.use(express.json())

app.use('/api/user',userrouter)
app.use('/api/dish',dishrouter)
app.use('/api/auth',authrouter)
app.use('/api/cart',cartrouter)


app.listen('3000', () => {
    console.log('server is running on port 3000')
})