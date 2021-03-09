const {MongoClient} = require('mongodb');

let  state = {
    db: null
}// aqui vamos a guardar el estado de la conexion

// module.exports = {
//     connect: function(){

//     }
// }

exports.connect = function(url, done){
    // url es la url de conexion
    // done --> done es un callback que va ejecutar algo si todo sale bien
    if(state.db) return done(); // si ya hay una conexion activa hacemos algo
    MongoClient.connect(url, function(err, db){
        if(err) return done(err) // si algo salio mal ejecutamos algo y mostramos el error
        state.db = db; // guardo el estado de la conexion en el state
        done(); // ejecuto algo
    })

}

exports.get = function(){ // esta funcion regresa la conexion a la BD
    return state.db
}

exports.close = function(done){
    if(state.db){ //si hay una conexion hay que terminarla
        state.db.close(function(err,result){ //termino la conexion
            state.db = null; // al terminar la conexion borro el estado que tenia antes
            done(err) // ejecuto algo si quiero terminar la conexion
        })
    }
}
