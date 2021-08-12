const express= require('express')
const http = require('http')
const bodyParser= require('body-parser')

  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  require('./routes/routes')(app)

  const server = http.createServer(app);

  app.get('/',(req,res) => {
    res.json({
      message:" welcome " 
        })
  });


server.listen(3006);


  