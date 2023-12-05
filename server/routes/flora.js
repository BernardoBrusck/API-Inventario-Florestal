const express = require('express');
const floraController = require('../controllers/floraController');
const checkAuthorization = require('../middlewares/checkAuthorization');
const checkAuthorizationGet = require('../middlewares/checkAuthorizationGet');

const router = express.Router();

router.get('/flora', checkAuthorizationGet, floraController.getAllFlora);
router.get('/flora/:id', checkAuthorizationGet, floraController.getFloraById);
router.post('/flora', checkAuthorization, floraController.createFlora);
router.put('/flora/:id', checkAuthorization, floraController.updateFlora);
router.patch('/flora/:id', checkAuthorization, floraController.partialUpdateFlora);
router.delete('/flora/:id', checkAuthorization, floraController.deleteFlora);

module.exports = router;