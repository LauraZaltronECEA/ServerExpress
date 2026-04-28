const productos = require('../data/productos')

class ProductoService{
    constructor(){
        this.productos = productos.infoProductos
    }

    //los metodos depende de cuantas routes tenga
    get(){
        return productos.infoProductos
    }

    getProductoPorCategoria(categoria){
        
        const productosCategoria = productos.infoProductos[categoria]
        if (productosCategoria){
            return productosCategoria
        }else{
            throw new Error('la categoria' + categoria + ' no existe')
        }        
    }

    post(categoria, producto){
        productos.infoProductos[categoria].push(producto)
        return producto       
    }
}

module.exports = ProductoService