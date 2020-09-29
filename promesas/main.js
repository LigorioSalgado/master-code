// Las promesas son para operaciones asincronas.

// DEFINICIÓN DE UNA FUNCIÓN QUE RETORNA UNA PROMESA
// La función siempre debe de RETONRNAR una promesa
function miPrimeraPromesaEsMayorQueUno(num) {
    // Recibe como parametro un callback
    // El callback recibe como parametro `resolve` & `reject`
    // - resolve --> Se comple el objetivo de la promesa
    // - reject --> NO se cumple el objetivo de la promesa
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 1){
                // A resolve se le puede pasar el parametro que quieras
                resolve('Se resolvio exitosamente la promesa');
            } else {
                // A reject se le puede pasar el parametro que quieras
                reject('ERROR');
            }
        }, 2000)
    });
};

// LA EJECUCIÓN DE UNA FUNCIÓN QUE RETORNA UNA PROMESA
// Las promesas pueden tener 3 estados (Siempre van a pasar por 2 estados)
// PENDIENTE, RESUELTO, RECHAZADO
// THEN --> RESOLVE
// CATCH --> REJECT
miPrimeraPromesaEsMayorQueUno(0)
    .then((palabra) => {
        // palabra --> parametro
        // palabra: Es el parametro que se le pasa a resolve
        console.log('THEN: '+ palabra);
    }).catch((error) => {
        // error --> parametro
        // error: Es el parametro que se le pasa a reject
        console.log('CATCH: ' + error);
    });


