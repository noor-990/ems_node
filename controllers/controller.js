const { request } = require('express');
const Users = require('../services/services');



exports.getAdduser = async (req, res) => {
  console.log("asdfg") 
    Users.adduser(req, async (err, data) => {
      console.log(err)
      console.log(data)
      if(!err&&!data){
        res.status(400).send({
          status: false,
          message: "User Alredy exist"
        });
      }
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

exports.getLogin = (req,res) =>{
  console.log("controller",req.body)

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
        data:data
      })
    }
  })
}

exports.noorCheck = (req,res)=>{
  console.log("noors Function")
}

exports.getUsers=(req,res) =>{
  console.log("controller")
  Users.user(req,(err,data) =>{
    console.log(7)
    console.log(data)
    if(err){
      if(err.kind==="user not found"){
        res.status(404).send({
          status:false,
          message:"user not found"
        });
      } else{
        res.status(500).send({
          status:false,
          message:"error retriving user"
        });
      }
    } else{
      res.status(200).send({
        status:true,
        message:"user found",
        data:data
      })
    }
  })
}

exports.findSk = (req,res) => {
  console.log("controller ")
  Users.findsk(req, (err,data) => {
    //console.log(data.length)
    if(data.length === 0){
      res.status(400).send({
        status: false,
        message: "sk user not exist"
      })
    }
    else{
      res.status(200).send({
        status:true,
        message:"sk_user_id found",
       data:data
      })
    }
    
    if(err){
      if(err.kind==="user not found"){
        res.status(404).send({
          status:false,
          message:"sk_user not found"
        });
      } else{
        res.status(500).send({
          status:false,
          message:"error retriving user"
        });
      }
    } 
    
  })
}

exports.updatesk = (req,res) => {
  console.log("controllers")
  Users.updates(req,(err,data)=>{
    if(data){
      res.status(200).send({
        status: true,
        message: "updateded succefully",
        data:data
      })
    }
    else{
      res.status(400).send({
        status:flase,
        message:"updateded succusfully",
   
      })
    }
    
    if(err){
      if(err.kind==="user not found"){
        res.status(404).send({
          status:false,
          message:"sk_user not found"
        });
      } else{
        res.status(500).send({
          status:false,
          message:"error retriving user"
        });
      }
    }
  })
}
