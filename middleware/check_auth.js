const jwt = require('jsonwebtoken');


module.exports =(req,res) =>{
    try{
        const decoded =jwt.verify(req.body.token,"Noor");
        req.userData = decoded;
        next
    } catch(error){
        return res.status(401).json({
            message:'AUTH FAILED'
        });
    }

};