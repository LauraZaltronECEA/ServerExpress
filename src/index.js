const express = require('express')
const productos = require('./data/productos')
//exponer los routers
const productosRouter = require('./routes/producto.router')
const categoriaRouter = require('./routes/categoria.router')
const { errorLog, errorHandler } = require('./middlewares/errorHandler')

const app = express()

app.use(express.json())//antes de empezar a declarar todos los get. Esto es el middleware. 
app.use('/productos', productosRouter)//uso del router productos
app.use('/categorias', categoriaRouter)//uso del router categoria

app.get('/', (req, res) =>{
    res.end('servidor desarrollado con modulo nativo http')
}) //Hace referencia al metodo http

app.use(errorLog)//middleware actual
app.use(errorHandler)


const puerto = 3000
app.listen(puerto, () =>{
    console.log(`Servidor escuchando en el puerto `+ puerto)
})