const sql = require ('./db')
const bcrypt = require('bcryptjs');
const { PASSWORD, USER } = require('../utils/database');
const jwt =require('jsonwebtoken');
const checkauth= require('../middleware/check_auth')


exports.adduser = async(req,result)=> {
   console.log("asdfgh")
   sql.query(`SELECT * FROM mst_users WHERE email ='${req.body.email}'`,(error,res)=>{
     console.log(res)
      if(error){
        result(error,null)
      }if(res.length>0){
        result(error,null)
      }else{
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
        )
     }
   })
}

  exports.login = (req,result)=> {
console.log("asfds");
    sql.query(`SELECT * FROM mst_users WHERE email = '${req.body.email}'`, (err,res) =>{
    if(err){
      console.log("error:",err);
      result(err,null);
      return;
    }
    else{
      console.log(res)
      const token =jwt.sign({email:res[0].email},"Noor",{expiresIn:"1h"});
      console.log(token);
      res[0].token =token
      result(null,res);
      return;
    }
  })
}


 
  exports.user = (req,result) => {
     console.log(6);
    sql.query(` SELECT sk_user_id, name,surname,email,phoneno,date_of_birth,gender FROM mst_users`,(err,res)=>{
        if(err){
          console.log("error:", err);
          result(err,null);
          return;
        }
        else
        {
          (res.length)
          result(null,res);
          return;
        }
    });
  }

  exports.findsk = (req,result) =>{
  
    sql.query(`SELECT * FROM mst_users WHERE sk_user_id = '${req.body.sk_user_id}'`, (err,res) => {
      if(err){
        console.log(err); 
        result(err,null);
        return;
      }
      else 
      {
        (res.length)
        result(null, res);
        return;
      }
    })
  }