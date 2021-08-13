const sql = require ('./db')
const bcrypt = require('bcrypt');
const { PASSWORD, USER } = require('../utils/database');
const jwt =require('jsonwebtoken');

exports.adduser = async(req,result)=> {
   console.log("asdfgh")
 bcrypt.hash(req.body.password,10,((err,hash)=>{
    if(err){
              return res.status(500).json({err});
            }
     else{
       req.body.password =hash
      
       sql.query(`INSERT INTO mst_users(name,surname,email,password,phoneno,date_of_birth,gender) VALUES ('${req.body.name}','${req.body.surname}','${req.body.email}','${req.body.password}','${req.body.phoneno}','${req.body.date_of_birth}','${req.body.gender}')`,(err,res)=>{
    if (err) {
        console.log("error:", err);
        result(err, null);
         return;
      } 
      else{
        result(null, res)
      }
    }
)
       }
      
    })
  )}

  exports.login = (req,result)=> {
    
    sql.query(`SELECT * FROM mst_users WHERE email='${req.body.email}'`,(err,res)=>{
      if(err){
        console.log("error:",err);
        result(err,null);
        return;
      }
      else{
        console.log(res)
        console.log(res[0].password)
        bcrypt.compare(req.body.password,res[0].password,(error,hash) =>{
          if(error){
            console.log(error)
             }
             if(hash){
    
               result(null,res)
             }
             });

        
      }
    })
  }