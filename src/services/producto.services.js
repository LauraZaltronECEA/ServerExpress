const {pool} = require('../db/connection')

class ProductoService{

    //los metodos depende de cuantas routes tenga
    async get(){
        const sql = 'select pro_id id, pro_descripcion descripcion, pro_precio precio, cat_descripcion categoria from productos inner join categorias on cat_id = pro_id_categoria'
        const [rows] = await pool.query(sql)
        console.info(rows)
        return rows
    }

    async getProductoPorCategoria(categoria){
        const sql = 'select pro_id id, pro_descripcion descripcion, pro_precio precio, cat_descripcion categoria from productos inner join categorias on cat_id = pro_id_categoria where cat_id = ?'
        const [rows] = await pool.query(sql, [categoria])

        if (rows.length === 0){
            const error = new Error(`la categoria ${categoria} no existe`)
            error.status = 404
            throw error
        }else{      
            return rows   
        }

        const productosCategoria = productos.infoProductos[categoria]
        if (productosCategoria){
            return productosCategoria
        }else{

        }        
    }

    async post(producto){
        const slq = 'insert into productos(pro_descripcion, pro_precio, pro_id_categoria) values(?,?,?)'
        const [result] = await pool.query(sql[producto.descripcion, producto.precio, producto.categoria])
        return {
            id: result.insertId,
            descripcion: producto.descripcion,
            precio: producto.precio,
            categoria: producto.categoria
        }     
    }
}

module.exports = ProductoService