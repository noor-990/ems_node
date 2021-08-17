const express= require('express')
const http = require('http')
const bodyParser= require('body-parser')
const cors = require('cors')

const app = express();
  
  const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
  app.use(cors(corsOpts));
  app.use(cors())
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


  