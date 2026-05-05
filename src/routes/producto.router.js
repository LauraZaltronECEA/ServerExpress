const express  = require('express')
const {getProducto,getProductoPorCategoria,postProducto} = require('../controllers/producto.controller')
const {postProductoSchema, paramCategoriaSchema} =  require('../schemas/producto.schema')
const {validator} = require('../middlewares/validatorHandler')

const productosRouter = express.Router()

productosRouter.get('/', getProducto)
productosRouter.get('/:categoria',validator(paramCategoriaSchema, 'params'),getProductoPorCategoria)
productosRouter.post('/:categoria',
    validator(postProductoSchema, 'body'),//primero recorre el body (revisa id, descripcion y precio)
    validator(paramCategoriaSchema, 'params'),//revisa categoria
    postProducto)//si esta todo OK, hace el post
//este post me lo traigo por el controlador, antes de llegar a este punto,
//tengo que pasar por el middleware. Donde postProductoSchema del validator es schema y body es property

module.exports = productosRouter