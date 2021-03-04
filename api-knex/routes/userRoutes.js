const express = require('express');

const router = express.Router();
const verify = require('../middlewares/verify');
const checkRol = require('../middlewares/checkRol');
const controller = require('../controllers/userController');
const { createUserValidator } = require('../validators/userValidator');

router.post('/user',[createUserValidator], controller.createUser);
router.post('/user/login', controller.login);
router.get('/users',[verify, checkRol('admin')] ,controller.findAllUsers);
router.get('/user/:iduser', [verify, checkRol('guest')],controller.findOneUser);
router.patch('/user/:iduser', controller.updateOneUser);
router.delete('/user/:iduser', controller.destroyOneUser);
router.delete('/users/:iduser', controller.delitOneUser);

module.exports = router;
