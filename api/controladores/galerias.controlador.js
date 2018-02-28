"use strict"

//Metodo para probar que el controlador funcione
function pruebaGalerias(req,res){
	res.status(200).send({mensaje:"probando el controlador de Galerias"})
}

//Exportamos los metodos del modulo
module.exports={
	pruebaGalerias
}