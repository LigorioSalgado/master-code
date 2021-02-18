const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.post('/user', userController.createuser);
router.get('/users', userController.findAllusers);
router.get('/user/:iduser', userController.findOneuser);
router.patch('/user/:iduser', userController.updateOneuser);
router.delete('/user/:iduser', userController.destroyOneuser);
router.delete('/users/:iduser', userController.delitOneuser);

module.exports = router;
