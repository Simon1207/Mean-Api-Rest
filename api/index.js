'use strict'
//utiliza orden "use strict" para poder meter
//instrucciones de los nuevosestandares de js

/*======================
LIBRERIA MONGODB
========================*/
//moongose como libreria para intermediar con la bd mongodb
//cargamos libreria usando la funcion require
var mongoose=require("mongoose");



/*======================
MODULO EXPRESS
========================*/
//reibo el modulo de app.js
var app=require("./app");
//define el puerto de la app
var port=process.env.PORT || 1234;

/*======================
CONEXION A DB
========================*/
mongoose.connect("mongodb://localhost:27017/apiangular",(error,respuesta)=>{
	if(error){
		throw error;
	}else{
		console.log("Conexion a mongodb exitosa");
		//metodo listen()es una referencia de express para traer dos parametros
		app.listen(port,function(){
			console.log("Servidor de apirest en http://localhost:"+port);
		})
	}
});