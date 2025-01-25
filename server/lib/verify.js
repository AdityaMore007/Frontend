import jwt from "jsonwebtoken"


const verifyToken = async (req, res, next) => {
    const token = req.cookie?.access_token
    if(!token)return  res.status(401).json('Not Authenticated')
    jwt.verify(token,process.env.SECRET, (err,user) => {
        if(err) return res.status(401).json('Not Authenticated')
        req.user = user
        next()
    })
}

export default verifyToken