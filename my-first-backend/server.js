// Este archivo va a tener las configuraciones de mi server.

// Llama la biblioteca de experess (import)
const express = require('express');

// Crea una instancia de express y la llama 'app'
const app = express();

// Configurar express para que pueda recibir BODY
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


// Crear nuestro primer enpoint (GET) '/'
// get() params --> 'URI',callback
// request: Todo lo que el usuario me manda
// response: Lo utilizo para responder la petición 
app.get('/', (request, response) => {
    console.log('Entro a mi GET');
    response.send('Entraste al HOME 🚗');
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
    const idPet = parseInt(req.params.petId);
    if (idPet > 99) {
        res.status(404).send({ mensaje: 'El id de la mascota no existe' });
    } else {
        const mensaje = { id: `El id que buscas es: ${idPet}` }
        res.send(mensaje);
    }
});

// Query
// Query 'URL/api/pets?color=blanco&patas=4'
app.get('/api/pets', (req, res) => {
    console.log(req.query);
    const petsArray = [
        {
            id: 1,
            name: 'Firulais'
        },
        {
            id: 2,
            name: 'Moly'
        },
        {
            id: 3,
            name: 'Kiara'
        }
    ];
    res.send(petsArray);
});


//POST se comporta igual que los otros metodos
// EL POST TIENE LA HABILIDAD DE RECIBIR BODY
app.post('/api/pets', (req, res) => {
    // Obtener el body de la petición
    console.log(req.body);
    const newPet = {
        id: 3,
        name: 'Snoopy',
        age: 5
    }
    res.status(201).send(newPet);
});

// Levanta el servidor en un puerto y recibe un callback.
app.listen(3000, () => {
    console.log('Server ON');
});

