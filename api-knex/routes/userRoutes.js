const express = require('express');

const router = express.Router();

const controller = require('../controllers/userController');

router.post('/user', controller.createUser);
router.post('/user/login', controller.login);
router.get('/users', controller.findAllUsers);
router.get('/user/:iduser', controller.findOneUser);
router.patch('/user/:iduser', controller.updateOneUser);
router.delete('/user/:iduser', controller.destroyOneUser);
router.delete('/users/:iduser', controller.delitOneUser);

module.exports = router;
