const { request } = require('express');
const Users = require('../services/services');



exports.getAdduser = async (req, res) => {
  console.log("as dfg")
    Users.adduser(req, async (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            status: false,
            message:"Not found"
          });
        } else {
          res.status(500).send({
            status: false,
            message: "Error retrieving user"
          });
        }
      } else {
        res.status(200).send({
          status: true,
          message: "user added",
          data: data
        });
      }
    })  
}

exports.getUser = (req,res) =>{
  console.log("controller")
  Users.login(req,(err,data)=>{
    if(err){
      if(err.kind==="user not found"){
        res.status(404).send({
          status:false,
          message:"login failed"
        });
      } else{
        res.status(500).send({
          status:false,
          message:"error retriving login user"
        });
      }
    } else{
      res.status(200).send({
        status:true,
        message:"login successful",
      })
    }
  })

}