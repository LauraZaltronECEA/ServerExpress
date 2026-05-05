//Log de errores por consola
function errorHandler(err, req, res, next){
    const statusCode = err.status || 500
    res.status(statusCode).send({
        message: err.message
    })
}

//Manejo de errores que recibe el cliente
function errorLog(err, req, res, next ){//next es lo proximo que queremos ejecutar
    console.error(err.stack)
    next(err)
}

module.exports = {errorLog, errorHandler}