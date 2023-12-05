const express = require('express');
const generoController = require('../controllers/generoController');
const checkAuthorization = require('../middlewares/checkAuthorization');
const checkAuthorizationGet = require('../middlewares/checkAuthorizationGet');

const router = express.Router();

router.get('/generos', checkAuthorizationGet, generoController.getAllGeneros);
router.get('/generos/:id', checkAuthorizationGet, generoController.getGeneroById);
router.post('/generos', checkAuthorization, generoController.createGenero);
router.put('/generos/:id', checkAuthorization, generoController.updateGenero);
router.patch('/generos/:id', checkAuthorization, generoController.partialUpdateGenero);
router.delete('/generos/:id', checkAuthorization, generoController.deleteGenero);

module.exports = router;