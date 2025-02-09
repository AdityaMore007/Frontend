import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {

  const token = req.cookies?.access_token;
  console.log(token)
  if (!token) return res.status(401).json("Not Authenticated");

  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) return res.status(401).json("Not Authenticated");
    req.user = user;
    next();
  });
};

export default verifyToken;
