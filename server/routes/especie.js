const express = require('express');
const especieController = require('../controllers/especieController');
const checkAuthorization = require('../middlewares/checkAuthorization');
const checkAuthorizationGet = require('../middlewares/checkAuthorizationGet');

const router = express.Router();

router.get('/especies', checkAuthorizationGet, especieController.getAllEspecies);
router.get('/especies/:id', checkAuthorizationGet, especieController.getEspecieById);
router.post('/especies', checkAuthorization, especieController.createEspecie);
router.put('/especies/:id', checkAuthorization, especieController.updateEspecie);
router.patch('/especies/:id', checkAuthorization, especieController.partialUpdateEspecie);
router.delete('/especies/:id', checkAuthorization, especieController.deleteEspecie);

module.exports = router;