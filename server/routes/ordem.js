const express = require('express');
const ordemController = require('../controllers/ordensController');
const checkAuthorization = require('../middlewares/checkAuthorization');
const checkAuthorizationGet = require('../middlewares/checkAuthorizationGet');

const router = express.Router();

router.get('/ordens', checkAuthorizationGet, ordemController.getAllOrdens);
router.get('/ordens/:id', checkAuthorizationGet, ordemController.getOrdemById);
router.post('/ordens', checkAuthorization, ordemController.createOrdem);
router.put('/ordens/:id', checkAuthorization, ordemController.updateOrdem);
router.patch('/ordens/:id', checkAuthorization, ordemController.partialUpdateOrdem);
router.delete('/ordens/:id', checkAuthorization, ordemController.deleteOrdem);

module.exports = router;