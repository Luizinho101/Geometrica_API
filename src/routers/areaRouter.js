const express = require('express');
const router = express.Router();

const areaController = require('../controllers/areaController');

router.post('/quadrado', areaController.calcularQuadrado);

module.exports = router;