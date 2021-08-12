const { response } = require("express");
const mysql = require("mysql");
const dbConfig = require("../utils/database");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
})

module.exports = connection;