const jwt = require('jsonwebtoken');



module.exports =(req,res,next) =>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log(token)
        const decoded =jwt.verify(token,"Noor")
        console.log(decoded.email)
        res.user = decoded
        return next();
    } catch(error){
        return res.status(401).json({
            message:'AUTH FAILED from check auth'
        });
    }

};