const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController');

router.post('/home', homeController.createHome);
router.get('/homes', homeController.findAllHomes);
router.get('/home/:idHome', homeController.findOneHome);
router.patch('/home/:idHome', homeController.updateOneHome);
router.delete('/home/:idHome', homeController.destroyOneHome);
router.delete('/homes/:idHome', homeController.delitOneHome);

module.exports = router;
