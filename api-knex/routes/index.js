// El objetivo de index es unificar todas las rutas
const express = require('express');

const router = express.Router();

const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');

router.use(homeRoutes);
router.use(userRoutes);

module.exports = router;
