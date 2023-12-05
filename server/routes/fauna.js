const express = require('express');
const faunaController = require('../controllers/faunaController');
const checkAuthorization = require('../middlewares/checkAuthorization');
const checkAuthorizationGet = require('../middlewares/checkAuthorizationGet');

const router = express.Router();

router.get('/fauna', checkAuthorizationGet, faunaController.getAllFauna);
router.get('/fauna/:id', checkAuthorizationGet, faunaController.getFaunaById);
router.post('/fauna', checkAuthorization, faunaController.createFauna);
router.put('/fauna/:id', checkAuthorization, faunaController.updateFauna);
router.patch('/fauna/:id', checkAuthorization, faunaController.partialUpdateFauna);
router.delete('/fauna/:id', checkAuthorization, faunaController.deleteFauna);

module.exports = router;