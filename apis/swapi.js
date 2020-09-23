// Manda a llamar a la biblioteca que instalamos
// Request es una biblioteca que nos ayuda a consumir endpoints
const request = require('request');

// El metodo GET tiene dos parametros, el endpoint(URL) y un callback(contiene la respuesta)
request.get('https://swapi.dev/api/people/1', (error, response, body) => {
    // console.log(error);
    console.log(response.statusCode);

    const bodyEnFormatoJSON = JSON.parse(body);

    // console.log(bodyEnFormatoJSON)

    console.log(bodyEnFormatoJSON.name);
    console.log('Ya termino de pedir la info al enpoint');
});

