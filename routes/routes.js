module.exports = app=>
{
 const express= require('express');
 const controllers = require('../controllers/controller');
 const Users = require('../services/services');
 const checkAuth = require('../middleware/check_auth');
 console.log("routes")

 app.post("/adduser",controllers.getAdduser);
 app.post("/login",controllers.getLogin);
 app.post("/noor", checkAuth, controllers.noorCheck);
 app.get("/user",controllers.getUsers);
 app.post("/findsk",controllers.findSk);
 app.post("/updates",controllers.updatesk);
 
}