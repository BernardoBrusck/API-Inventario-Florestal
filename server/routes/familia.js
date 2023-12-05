const express = require('express');
const familiaController = require('../controllers/familiaController');
const checkAuthorization = require('../middlewares/checkAuthorization');
const checkAuthorizationGet = require('../middlewares/checkAuthorizationGet');

const router = express.Router();

router.get('/familias', checkAuthorizationGet, familiaController.getAllFamilias);
router.get('/familias/:id', checkAuthorizationGet, familiaController.getFamiliaById);
router.post('/familias', checkAuthorization, familiaController.createFamilia);
router.put('/familias/:id', checkAuthorization, familiaController.updateFamilia);
router.patch('/familias/:id', checkAuthorization, familiaController.partialUpdateFamilia);
router.delete('/familias/:id', checkAuthorization, familiaController.deleteFamilia);

module.exports = router;