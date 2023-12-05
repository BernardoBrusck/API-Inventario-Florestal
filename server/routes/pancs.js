const express = require('express');
const pancsController = require('../controllers/pancsController');
const checkAuthorization = require('../middlewares/checkAuthorization');
const checkAuthorizationGet = require('../middlewares/checkAuthorizationGet');

const router = express.Router();

router.get('/pancs', checkAuthorizationGet, pancsController.getAllPANCs);
router.post('/pancs', checkAuthorization, pancsController.createPANC);
router.put('/pancs', checkAuthorization, pancsController.updatePANC);
router.patch('/pancs/:id', checkAuthorization, pancsController.partialUpdatePancs);
router.delete('/pancs', checkAuthorization, pancsController.deletePANC);

module.exports = router;