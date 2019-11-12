let express = require("express")
//let router = import(router);
let app = express()
var path = require('path');
var fs = require('fs');
var http = require('http');
const bodyParser = require("body-parser");  
app.use(bodyParser.json({ limit: "50mb", parameterLimit: 1000000 }));
app.use(require('./router'))


app.use(express.static(path.join(__dirname, "./Frontend")));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,"./Frontend/index.html"));
});

var theport = process.env.PORT || 7777;
app.listen(theport, function(){
    console.log("started listening on port " + theport);
});