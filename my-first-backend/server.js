// Este archivo va a tener las configuraciones de mi server.

// Llama la biblioteca de experess (import)
const express = require('express');

// Crea una instancia de express y la llama 'app'
const app = express();

// Crear nuestro primer enpoint (GET) '/'
// get() params --> 'URI',callback
// request: Todo lo que el usuario me manda
// response: Lo utilizo para responder la petición 
app.get('/', (request, response) => {
    console.log('Entro a mi GET');
    response.send('Entraste al HOME 🚗')
});

app.get('/api/saludo', (req, res) => {
    const myJson = {
        id: 2,
        name: 'Firulais'
    }
    res.send(myJson);
});

// Params 'URL/api/pets/:variable'
// Params 'URL/api/pets/99'
app.get('/api/pets/:petId', (req, res) => {
    console.log(req.params);
    const idPet = req.params.petId;
    const mensaje = { id: `El id que buscas es: ${idPet}` }
    res.send(mensaje);
});


// Levanta el servidor en un puerto y recibe un callback.
app.listen(3000, () => {
    console.log('Server ON');
});
