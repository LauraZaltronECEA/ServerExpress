require('dotenv').config()

const config = {
    //datos de la db para conectar accediendo al env
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
    waitForConnections : true,
    connectionLimit : 10, //limite de usuarios que se pueden conectar a mi base de datos
    queueLimit : 0
}

module.exports = config