    const express = require('express');
const reinoController = require('../controllers/reinoController');
const checkAuthorization = require('../middlewares/checkAuthorization');
const checkAuthorizationGet = require('../middlewares/checkAuthorizationGet');

const router = express.Router();

router.get('/reinos', checkAuthorizationGet, reinoController.getAllReinos);
router.get('/reinos/:id', checkAuthorizationGet, reinoController.getReinoById);
router.post('/reinos', checkAuthorization, reinoController.createReino);
router.put('/reinos/:id', checkAuthorization, reinoController.updateReino);
router.patch('/reinos/:id', checkAuthorization, reinoController.partialUpdateReino);
router.delete('/reinos/:id', checkAuthorization, reinoController.deleteReino);

module.exports = router;