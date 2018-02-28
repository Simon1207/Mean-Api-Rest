'use strict'

var express=require("express");
var bodyParser=require("body-parser");

//la variable app es el objeto de express
//literalmente el motor de la appbackend
var app=express();

//convierte objetos JSON por las peticiones que llegan http
app.use(bodyParser.urlencoded({extended:false}));
//convierte lo que venga de las urls en formato json
app.use(bodyParser.json());

/*======================
Cargar Rutas
========================*/

var rutaUsuarios=require("./rutas/usuarios.ruta.js");
var rutaSlides=require("./rutas/slides.ruta.js");
var rutaGalerias=require("./rutas/galerias.ruta.js");



/*======================
Rutas base de la aplicacion
========================*/
//get() es una referencia de express para poder habilitar la aplicacion en el puerto establecido
//app.get("/pruebas",function(req,res){

	//200 ok
	//404 peticion no encontrado
	//500 error interno del servidor

	//res.status(200).send({message: "Bienvenido"})
//})

app.use("/api",rutaUsuarios);
app.use("/api",rutaSlides);
app.use("/api",rutaGalerias);

//la accion Module.export es de express.js para que el modulo pueda ser usado en otros archivos
module.exports=app;