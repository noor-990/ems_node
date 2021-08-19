module.exports = app=>
{
 const express= require('express');
 const controllers = require('../controllers/controller');
 const Users = require('../services/services');
 const checkAuth = require('../middleware/check_auth');
 console.log("routes")

 app.post("/adduser",controllers.getAdduser);
 app.post("/login", controllers.getUser);
 app.post("/noor", checkAuth, controllers.noorCheck);
 app.get("/getuser",controllers.getUser);


}