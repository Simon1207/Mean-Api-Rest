"use strict"

//Metodo para probar que el controlador funcione
function pruebaUsuarios(req,res){
	res.status(200).send({mensaje:"probando el controlador de usuarios"})
}

//importar modelo usuarios
var Usuarios=require("../modelos/usuarios.modelo.js");

//metodo para crear usuarios
function crearUsuarios(req,res){
	//creamos una variable que traiga el objeto del modelo Usuarios
	var usuarios=new Usuarios();

	//Recogemos los parametros que llegan por la peticion POST
	var parametros=req.body;
	console.log("Parametros recibidos",parametros);
	//del modelo usuarios obtengo el usuario
	usuarios.usuario=parametros.usuario;
	usuarios.password=parametros.password;
	console.log("usuarios.usuario",usuarios.usuario);
	console.log("usuarios.usuario",usuarios.password);

	//guardar informacion
	(usuarios).save((error,usuarioGuardado)=>{
		if(error){
			res.status(500).send({mensaje:"Error al guardar el usuario"})
		}else{
			res.status(200).send({mensaje:"Usuario guardado"})
		}
	})

}



//Exportamos los metodos del modulo
module.exports={
	pruebaUsuarios,
	crearUsuarios
}