/*var express = require("express");
var database = require("./modules/database");
var bodyParser = require("body-parser");

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Frontend"));
app.use('/usuarios');

app.listen(4200, function(){
    console.log("Servidor en linea");
});*/
/**************************************************************************** 
var express = require('express');
var app = express();

//use es una funcion para ejecutar funciones tipo middleware
//Estas funciones se ejecutan antes de cualquier respuesta personalizada del backend
app.use(express.static('Frontend'));

app.get('/hola-mundo',function(req, res){
    res.send('<html><body><h1>Hola mundo</h1></body></html>');
    res.end();
});

app.get('/home',function(req, res){
    res.send('<html><body><h1>Pagina HOME</h1></body></html>');
    res.end();
});

app.get('/as*de',function(req, res){//asde
    res.send('<html><body><h1>Cumple con el patron as*de</h1></body></html>');
    res.end();
});

app.get('/capitulo/:numero',function(req,res){
    res.send(`<html><body><h1>Ver capitulo ${req.params.numero}</h1></body></html>`);
    res.end();
});

app.listen(3333, function(){
    console.log('Servidor levantado en 3333');
});
*/
/**************************************************************************************************** */
/*var http = require ('http');
let nombre = 'Juan';

http.createServer(function(req, res){   //peticion, respuesta
    //Se ejecutará cada vez que nuestro servidor reciba una peticion.
    res.writeHead(200, {'Content-type':'text/html'});//codigo http, json con los encabezados
    res.write(`<html><body><h1>Hola ${nombre}</h1>${req.url}</body></html>`);
    res.end();
}).listen(8888,function(){
    console.log('Servidor levantado en 8888');
});*/