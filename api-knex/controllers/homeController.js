const ModelHome = require('../models/Home');

const createHome = (req, res) => {
    // Aqui es donde debo crear mi HOME
    // Validar que todo este bien y ejecutar mi create para la base ded atos
    ModelHome.create(req.body)
        .then((row) => {
            res.status(201).send(row);
        })
        .catch((err) => {
            res.status(400).send(err);
        })
};

module.exports = {
    createHome,
}
