const express = require ('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', function (req, res){
  res.sendFile('./frontend/index.html' , { root : __dirname});
})

app.listen(3000, () => console.log("listening on 3000"));
