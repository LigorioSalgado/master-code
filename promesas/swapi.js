// manda a llamar al modulo request
const request = require('request');

// Hacer una función que pida el id y devuelva el objeto compelto de la respuesta de la API
function getPeopleById(id) {
    return new Promise((resolve, reject) => {
        request.get(`https://swapi.dev/api/people/${id}`, (err, response, body) => {
            if (response.statusCode === 200) {
                const json = JSON.parse(body);
                resolve(json);
            } else {
                reject('Tuvimos un error D:');
            }
        });
    });
}

function getMovieByUrl(movieUrl) {
    return new Promise((resolve, reject) => {
        request.get(movieUrl, (err, response, body) => {
            if (response.statusCode === 200) {
                const json = JSON.parse(body);
                resolve(json);
            } else {
                reject('Error en peliculas');
            }
        });
    });
}

// getMovieByUrl('http://swapi.dev/api/films/2')
//     .then((movie) => {
//         console.log(movie.title);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


getPeopleById(1)
    .then((people) => {
        console.log(people.name);
        console.log(people.films[0]);
        // Debo retornar la ejecucicón de la segunda función
        // (Solo cuando la función retorna una promesa)
        return getMovieByUrl(people.films[0])
    })
    .then((movie) => {
        console.log(movie.title);
    })
    .catch((err) => {
        console.log('Catch: ', err);
    })


// getPeopleById(1)
//     .then((people) => getMovieByUrl(people.films[0]))
//     .then((movie) => console.log(movie.title))
//     .catch((err) => console.log(err))