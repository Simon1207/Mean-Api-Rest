"use strict"

//requerimos la dependencia de mongoose para acceder a la base de datos
var mongoose=require("mongoose");
//El objeto de tipo esquema nos permite guardar en una coleccion concreta y en un documento concreto
//dentro de esa coleccion
var Schema=mongoose.Schema;

//creamos esquema con los atributos

var GaleriasSchema=Schema({
	foto:String,
	
})

//el objeto usuarios va poder ser instanciado y automaticamente le vamos asignando los 
//valores del esquema
module.exports=mongoose.model("Galerias",GaleriasSchema);