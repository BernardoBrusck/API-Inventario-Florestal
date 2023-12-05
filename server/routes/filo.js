const express = require('express');
const filoController = require('../controllers/filoController');
const checkAuthorization = require('../middlewares/checkAuthorization');
const checkAuthorizationGet = require('../middlewares/checkAuthorizationGet');

const router = express.Router();

router.get('/filos', checkAuthorizationGet, filoController.getAllFilos);
router.get('/filos/:id', checkAuthorizationGet, filoController.getFiloById);
router.post('/filos', checkAuthorization, filoController.createFilo);
router.put('/filos/:id', checkAuthorization, filoController.updateFilo);
router.patch('/filos/:id', checkAuthorization, filoController.partialUpdateFilo);
router.delete('/filos/:id', checkAuthorization, filoController.deleteFilo);

module.exports = router;