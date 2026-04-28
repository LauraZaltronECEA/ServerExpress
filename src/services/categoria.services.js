const productos = require('../data/productos')

class CategoriaService{

    constructor(){
        this.productos = productos.infoProductos
    }

    get(){
        const categorias = Object.keys(productos.infoProductos)
        return categorias
    }

    post(listaCategoriasConProductos){
        const categorias = productos.infoProductos
        productos.infoProductos = {
        ...categorias,
        ...listaCategoriasConProductos
        }
        return listaCategoriasConProductos
    }

}
module.exports = CategoriaService