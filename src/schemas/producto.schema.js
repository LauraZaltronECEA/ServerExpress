const joi = require('joi')
//definimos las reglas para lo que queremos autentificar haciendo que los 
//atributos del objeto sean objetos de joi
const id = joi.number().min(1)

const descripcion = joi.string().min(3).max(15).required().messages({
    'string.min': 'La descripcion debe tener por lo menos {#limit} caracteres',
    'string.max': 'La descripcion debe tener como maximo {#limit} caracteres',
    'any.required': 'La descripcion es obligatoria'
}).strip();//mensajes personalizados para q el output no este en ingles

const precio = joi.number().min(100).messages({
    'number.min': 'El precio debe ser igual o mayor a {#limit}',
    'any.required': 'El precio es obligatorio'
})//mensajes personalizados para q el output no este en ingles

const categoria = joi.number().required()

const postProductoSchema = joi.object({
    //aca puedo ir jugando con los valores que tengo. Si quiero que sea required o no, cuanto es el max, min, etc.
    //Estos nombres tienen que coincidir con los del body
    descripcion: descripcion.required(),
    precio: precio.required()
})

const paramCategoriaSchema = joi.object({
    categoria: categoria
})

module.exports = { postProductoSchema }