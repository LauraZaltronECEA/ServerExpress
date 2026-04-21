const express = require('express')
const productos = require('../data/productos')
const productosRouter = require('./producto.router.js')

const categoriaRouter = express.Router()

categoriaRouter.post('/', (req, res) => {
    const categoria = req.params.categoria
    const body = req.body
    productos.infoProductos[categoria].push(body)
    res.statusCode = 201
    res.end(JSON.stringify(body))
})

categoriaRouter.get('/', (req, res) =>{
    const categorias = Object.keys(productos.infoProductos)
    res.end(JSON.stringify(categorias))
})

module.exports = categoriaRouter