"use strict"

//Metodo para probar que el controlador funcione
function pruebaSlides(req,res){
	res.status(200).send({mensaje:"probando el controlador de Slides"})
}

//Exportamos los metodos del modulo
module.exports={
	pruebaSlides
}