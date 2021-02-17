const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController');

router.post('/home', homeController.createHome);

module.exports = router;
