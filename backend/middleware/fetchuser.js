const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const fetchuser=(req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).json({error:"token was wrong"});
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        // console.log(data);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).json({error:"token was wrong"});
    }
}
module.exports=fetchuser
