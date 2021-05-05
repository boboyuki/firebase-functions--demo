
const express = require('express');
const functions = require("firebase-functions");
const config = functions.config();
// 環境變數 
const app = express();
const cors = require("cors")({ origin:true})
// app.use(bodyParser.json());
// app.use(bodyParser.raw());
// app.use(bodyParser.urlencoded({ extended: true }));
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "POST");//"PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true)
  next();
});

app.post('/getConfig', function (req, res) {
  return cors(req,res, ()=>{
    res.send(config)
  })
});

var confPort = 3000;
var server = app.listen(confPort, function () {
  //var host = server.address().address
  var port = server.address().port
  console.log('Listening in port', port);
});