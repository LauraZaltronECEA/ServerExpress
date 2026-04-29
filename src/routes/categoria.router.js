const { getCategoria, postCategoria } = require('../controllers/categoria.controller')
const express = require('express')

const categoriaRouter = express.Router()

categoriaRouter.post('/', postCategoria)
categoriaRouter.get('/', getCategoria)

categoriaRouter.get('/', (req, res) =>{
    const categorias = Object.keys(productos.infoProductos)
    res.end(JSON.stringify(categorias))
}) //agregado nuevo en branch feat/get-categorias

module.exports = categoriaRouter