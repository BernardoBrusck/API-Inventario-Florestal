const express = require('express');
const museuEntomoController = require('../controllers/museu_entomoController');
const checkAuthorization = require('../middlewares/checkAuthorization');
const checkAuthorizationGet = require('../middlewares/checkAuthorizationGet');

const router = express.Router();

router.get('/museu_entomo', checkAuthorizationGet, museuEntomoController.getAllMuseuEntomo);
router.get('/museu_entomo/:id', checkAuthorizationGet, museuEntomoController.getMuseuEntomoById);
router.post('/museu_entomo', checkAuthorization, museuEntomoController.createMuseuEntomo);
router.put('/museu_entomo/:id', checkAuthorization, museuEntomoController.updateMuseuEntomo);
router.patch('/museu_entomo/:id', checkAuthorization, museuEntomoController.partialUpdateMuseuEntomo);
router.delete('/museu_entomo/:id', checkAuthorization, museuEntomoController.deleteMuseuEntomo);

module.exports = router;