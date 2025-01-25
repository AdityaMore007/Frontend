import jwt from "jsonwebtoken"
import User from "../models/user.js"
import bcrypt from "bcryptjs"


export const login = async (req,res ) => {

    try{
        

        const user = await User.findOne({username:req.body.username})
        if(!user) res.status(401).json('Not Authenticated')
        const {password} = req.body;
        if( !bcrypt.compareSync(password, user.password))res.status(401).json('Not Authenticated')
        
        const token = jwt.sign({id: user._id}, process.env.SECRET)
        console.log(token)
        const {password:ps, ...other} = user._doc;
        res.cookie("access_token", token, {
            httpOnly:true,
        }).status(200).json(other)

    }catch(err){
        console.log(err)
    }
}
export const logout = async(req,res ) => {
    res.clearCookie("access-token").status(201).json({message: "logout successful"})
}
export const signup = async(req,res ) => {
    const {username, email, password} = req.body

    const  salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    try{
        

        const newUser = new User({
            username,email,password:hash,
        })
        await newUser.save()
        res.status(200).json(newUser)

    }catch(err){
        console.log(err)
    }
}