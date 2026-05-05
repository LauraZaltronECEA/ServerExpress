function validator(schema, property){
    return(req,res,next) => {
        const data = req[property]//aca podriamos pasarle body, etc. Pero como es parametrizable le pasamos property
        const result = schema.validate(data)//schema es un objeto joi
        if(result.error){
            const error = new Error(result.error.details[0].message)//me quedo con el msj del primer error
            error.status = 400 //bad request
            next(error)//lo lanzamos con next para que lo atrape el middleware
        }
        next()//si no hay errores que siga su camino.
    }
}//property es el lugar en el que queremos q valide
//esta funcion nos devuelve el middleware

module.exports = { validator }