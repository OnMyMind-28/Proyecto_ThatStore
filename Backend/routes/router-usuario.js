var express = require('express');
var router = express.Router();


var usuarios = [{
    nombre: 'Natalia',
    apellido: 'Salvador',
    email: 'natalia@gmail.com',
    password:'1234'
}];


//Crear usuario
router.post('/', function(req,res){
    let usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password
    };

    usuarios.push(usuario);
    res.send({mensaje: 'Registro guardado', usuarioGuardado: usuario});
});
//Obtener un usuario
router.get('/:id', function(req,res){
    if (req.params.id > (usuarios.length-1)) 
    res.send({codigoResultado:0, mensaje:"Usuario no existe"});
    else
    res.send(usuarios[req.params.id]);
});
//Obtener todos los usuarios
router.get.apply('/', function(req,res){
    res.send(usuarios);
});

//Actualizar un usuario 
router.put('/:id', function(req,res){
let usuario = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    password: req.body.password
}
usuarios[req.params.id] = usuario;
res.send({codigoResultado:1, mensaje:"Usuario actualizado"});
});
//Eliminar un usuario
router.delete('/:id', function(req,res){
usuarios.splice(req.params.id, 1);//elementos a eliminar es igual a 1
res.send({codigoResultado:1, mensaje:"Usuario eliminado"});
});

module.exports = router;