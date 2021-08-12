const { request } = require('express');
const Users = require('../services/services');



exports.getadduser = async (req, res) => {
  
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