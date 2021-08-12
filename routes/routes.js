module.exports = app=>
{
 const express= require('express');
 const controllers = require('../controllers/controller');
 const Users = require('../services/services');


 console.log("routes")

 app.post("/adduser",controllers.getadduser);
}