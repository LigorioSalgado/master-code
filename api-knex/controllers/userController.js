const UserModel = require('../models/User');

const createUser = (req, res) => {
    UserModel.create(req.body)
        .then((row) => {
            res.status(201).send(row);
        })
        .catch((err) => {
            res.status(400).send(err);
        })
};

const findAllUsers = (req, res) => {
    UserModel.findAll()
        .then((rows) => {
            res.status(200).send(rows)
        })
        .catch((err) => {
            res.status(400).send(err)
        })
}

const findOneUser = (req, res) => {
    UserModel.findOne(req.params.idUser)
        .then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(400).send(err);
        });
}

const updateOneUser = (req, res) => {
    UserModel.update(req.params.idUser, req.body)
        .then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(400).send(err);
        });
}

const destroyOneUser = (req, res) => {
    UserModel.destroy(req.params.idUser)
        .then(() => {
            res.status(204).send();
        }).catch((err) => {
            res.status(400).send(err);
        });
}

const delitOneUser = (req, res) => {
    UserModel.delit(req.params.idUser)
        .then(() => {
            res.status(204).send();
        }).catch((err) => {
            res.status(400).send(err);
        });
}

module.exports = {
    createUser,
    findAllUsers,
    findOneUser,
    updateOneUser,
    destroyOneUser,
    delitOneUser,
}
