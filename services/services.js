const sql = require ('./db')
const bcrypt = require('bcrypt');
const { PASSWORD } = require('../utils/database');


exports.adduser = async(req,result)=> {
   
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