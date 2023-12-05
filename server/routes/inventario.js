const express = require('express');
const inventarioController = require('../controllers/inventarioController');
const checkAuthorization = require('../middlewares/checkAuthorization');
const checkAuthorizationGet = require('../middlewares/checkAuthorizationGet');

const router = express.Router();

router.get('/inventario', checkAuthorizationGet, inventarioController.getAllInventario);
router.get('/inventario/:id', checkAuthorizationGet, inventarioController.getInventarioById);
router.post('/inventario', checkAuthorization, inventarioController.createInventario);
router.put('/inventario/:id', checkAuthorization, inventarioController.updateInventario);
router.patch('/inventario/:id', checkAuthorization, inventarioController.partialUpdateInventario);
router.delete('/inventario/:id', checkAuthorization, inventarioController.deleteInventario);

module.exports = router;