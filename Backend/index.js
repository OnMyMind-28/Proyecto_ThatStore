<<<<<<< HEAD
var express = require('express'); 
var bodyParser = require ('body-parser');

var testModule = require('./modules/test-module');
var usuariosRouter = require('./routes/usuarios-router')

var app = express();

//app.use(cors());//permita petiociones de otros origenes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/usuarios', usuariosRouter);

app.get('/', function(req,res){
    res.send(testModule.mostrarMensaje() + testModule.x);
});

app.listen(8888, function(){
    console.log("Servidor levantado");
});






























/*var express = require("express");
/*var database = require("./modules/database");
var bodyParser = require ("body-parser");

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Frontend"));
app.use('/usuarios');

app.listen(4200, function(){
    console.log("Servidor en linea");
});*/
=======
>>>>>>> 24a4975576e7fae3ee67fd23252014793186c535
