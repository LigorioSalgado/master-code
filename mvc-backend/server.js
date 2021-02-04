const express = require('express');
const myRoutes = require('./routes/myRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// AQUI DEBERÍAN IR LAS RUTAS

app.use(myRoutes);

//

app.listen(3000, () => {
    console.log('Server ON');
});