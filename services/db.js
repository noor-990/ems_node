const { response } = require("express");
const mysql = require("mysql");
const dbConfig = require("../utils/database");

var connection = mysql.createPool({
  server: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
})

// dbConfig.connect(() => {
//   if(err){
//     console.log(err);
//   }
//   console.log('Mysql connected');
// });

module.exports = connection;