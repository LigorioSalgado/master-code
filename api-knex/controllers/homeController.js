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

const findAllHomes = (req, res) => {
    ModelHome.findAll()
        .then((rows) => {
            res.status(200).send(rows)
        })
        .catch((err) => {
            res.status(400).send(err)
        })
}

const findOneHome = (req, res) => {
    ModelHome.findOne(req.params.idHome)
        .then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(400).send(err);
        });
}

const updateOneHome = (req, res) => {
    ModelHome.update(req.params.idHome, req.body)
        .then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(400).send(err);
        });
}

const destroyOneHome = (req, res) => {
    ModelHome.destroy(req.params.idHome)
        .then(() => {
            res.status(204).send();
        }).catch((err) => {
            res.status(400).send(err);
        });
}

const delitOneHome = (req, res) => {
    ModelHome.delit(req.params.idHome)
        .then(() => {
            res.status(204).send();
        }).catch((err) => {
            res.status(400).send(err);
        });
}

module.exports = {
    createHome,
    findAllHomes,
    findOneHome,
    updateOneHome,
    destroyOneHome,
    delitOneHome,
}
