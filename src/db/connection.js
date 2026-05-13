const mysql = require('mysql2/promise')
const config = require('../config/database')

//Creamos el pool de connecciones
const pool = mysql.createPool(config)

//funcion para testear la conneccion
async function testConnection() {
    try{
        const connection = await pool.getConnection()
        console.info('Conexion Exitosa con la DB MySQL')
        connection.release()
        return true
    }catch (error){
        console.error('Error al conectar con la base de datos', error.message)
        return false
    }
}

module.exports = {
    pool,
    testConnection
}