var express = require("express");
var database = require("./modules/database");
var bodyParser = require("body-parser");

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Frontend"));
app.use('/usuarios');

app.listen(4200, function(){
    console.log("Servidor en linea");
});