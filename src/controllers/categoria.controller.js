const CategoriaService = require('../services/categoria.services')

const serviceCategoria = new CategoriaService()

function getCategoria(req,res){
    try{
        const categorias = serviceCategoria.get(req,res)
        res.json(categorias)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

function postCategoria(req, res){
    try{
        const body = req.body
        const resultado = serviceCategoria.post(body)
        res.status(201).json(resultado)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getCategoria,
    postCategoria
}
