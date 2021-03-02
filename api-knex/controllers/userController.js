const UserModel = require('../models/User');
const hashPassword = require('../utils/hashPassword');
const authenticate = require('../utils/authenticate');
const generateJWT = require('../utils/generateJWT');

const createUser = async(req, res) => {
    if(req.body.password){
        req.body.password = await hashPassword(req.body.password)
    }
    UserModel.create(req.body)
        .then((row) => {
            res.status(201).send(row);
        })
        .catch((err) => {
            res.status(400).send(err);
        })
};

const login = async(req, res) =>{
 //verificar el usuario, verificar el password,  generar jwt
 const {user} = await authenticate(req.body).catch((err) => res.status(400).send(err))
 const token = generateJWT(user)
 return res.status(200).send({token});
}

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
    login
}
