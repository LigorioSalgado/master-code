const express = require('express');
const homeController = require('../controllers/homeController');
const createPetController = require('../controllers/createPetController');

const router = express.Router();

router.get('/', homeController);

router.post('/api/pets', createPetController)

module.exports = router;
