const express = require('express')
const productos = require('../data/productos')
const productosRouter = require('./producto.router.js')

const categoriaRouter = express.Router()

categoriaRouter.post('/', (req, res) => {
    const body = req.body
    const categoria = productos.infoProductos
    productos.infoProductos = {
        ...categoria,
        ...body
    }
    res.statusCode = 201
    res.end(JSON.stringify(body))
})

categoriaRouter.get('/', (req, res) =>{
    const categorias = Object.keys(productos.infoProductos)
    res.end(JSON.stringify(categorias))
}) //agregado nuevo en branch feat/get-categorias

module.exports = categoriaRouter