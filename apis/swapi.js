// Manda a llamar a la biblioteca que instalamos
// Request es una biblioteca que nos ayuda a consumir endpoints
const request = require('request');

function getPeopleById(id) {
    // El metodo GET tiene dos parametros, el endpoint(URL) y un callback(contiene la respuesta)
    request.get(`https://swapi.dev/api/people/${id}`, (error, response, body) => {
        if (response.statusCode === 200) {
            // PETICÓN EXITOSA
            const bodyEnFormatoJSON = JSON.parse(body);
            console.log(bodyEnFormatoJSON.name);
            console.log(bodyEnFormatoJSON.films[0]);

            request.get(bodyEnFormatoJSON.films[0], (errorDos, responseDos, bodyDos) => {
               const bodyMovieEnFormatoJSon = JSON.parse(bodyDos) 
               console.log(bodyMovieEnFormatoJSon.title);
            });

        } else {
            // ERROR
            console.log('Tuvimos un error intenta más tarde 😢');
        }
    });
}

getPeopleById(1);

