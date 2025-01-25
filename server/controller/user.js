import User from "../models/user.js"

export const getallUsers = async (req, res) => {
    try {
    const user = await User.find()
        res.status(200).jwon(user)
    } catch (error) {
        console.log(error)
    }
}
export const getUser = async (req, res) => {
    
    try {
    const user = await User.findById(req.params.id)
        res.status(200).jwon(user)
    } catch (error) {
        console.log(error)
    }
}
export const addUser = async (req, res) => {
    const userinfo = req.body
    try {
    const user = await User(userinfo)
    user.save()
        res.status(200).jwon(user)
    } catch (error) {
        console.log(error)
    }
}
