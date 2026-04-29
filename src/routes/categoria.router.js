const { getCategoria, postCategoria } = require('../controllers/categoria.controller')
const express = require('express')

const categoriaRouter = express.Router()

categoriaRouter.post('/', postCategoria)
categoriaRouter.get('/', getCategoria)

module.exports = categoriaRouter