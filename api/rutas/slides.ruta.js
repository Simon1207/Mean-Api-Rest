"use strict"
//Cargamos la dependencia de express
var express=require("express");

//Cargamos el modulo del controlador 
var ControladorSlides=require("../controladores/slides.controlador.js");

//cargamos el router de express.js y con esto podemos crear rutas para la api rest
var api=express.Router();

//Crear ruta con el metodo GET para pasar el metodo que va a tener que cargar la pagina cuando
//hagamos la peticion HTTP de esa ruta
api.get("/probando-controlador-slides",ControladorSlides.pruebaSlides);

//exportamos el modulo API
module.exports=api;