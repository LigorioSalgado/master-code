const mongoose = require('mongoose');
const SesionCliente = require('./SesionCliente');

mongoose.connect('mongodb+srv://edwin:prueba123@cluster0.vp6hz.mongodb.net/dataklustera?retryWrites=true&w=majority', {useNewUrlParser: true});

module.exports = {
    SesionCliente,
};