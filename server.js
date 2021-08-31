const express =require('express');
const http = require('http');
const bodyParser =require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//importing Routes to access the functionality
require('./routes/routes')(app)


const  server= http.createServer(app);


 app.get('/',(req,res)=>{
     res.json({
         message:"Welcome to ems_node api"
     })
 });


 server.listen(3006);