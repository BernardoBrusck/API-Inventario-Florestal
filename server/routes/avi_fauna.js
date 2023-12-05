const express = require('express');
const aviFaunaController = require('../controllers/avi_faunaController');
const checkAuthorization = require('../middlewares/checkAuthorization');
const checkAuthorizationGet = require('../middlewares/checkAuthorizationGet');

const router = express.Router();

router.get('/avi_fauna', checkAuthorizationGet, aviFaunaController.getAllAviFauna);
router.get('/avi_fauna/:id', checkAuthorizationGet, aviFaunaController.getAviFaunaById);
router.post('/avi_fauna', checkAuthorization, aviFaunaController.createAviFauna);
router.put('/avi_fauna/:id', checkAuthorization, aviFaunaController.updateAviFauna);
router.patch('/avi_fauna/:id', checkAuthorization, aviFaunaController.partialUpdateAviFauna);
router.delete('/avi_fauna/:id', checkAuthorization, aviFaunaController.deleteAviFauna);

module.exports = router;