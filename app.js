var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


var app = express()
.use(cors({credentials: true, origin: '*'
}))
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true })); 


app.post('/api/v01/user/login', function (req, res) {
    let password = req.body.password;
    let email = req.body.email;
    token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
    if (email == "jesus@gmail.com" && password == "1234"){
        return res.status(200).json({"auth": true, "name": "Jesus", "token": token});
      }
   
  
  });


  app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
  });
