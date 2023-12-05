const express = require('express');
const classesController = require('../controllers/classeController.js');
const checkAuthorization = require('../middlewares/checkAuthorization');
const checkAuthorizationGet = require('../middlewares/checkAuthorizationGet');

const router = express.Router();

router.get('/classes', checkAuthorizationGet, classesController.getAllClasses);
router.get('/classes/:id', checkAuthorizationGet, classesController.getClassById);
router.post('/classes', checkAuthorization, classesController.createClasse);
router.put('/classes/:id', checkAuthorization, classesController.updateClasse);
router.patch('/classes/:id', checkAuthorization, classesController.partialUpdateClasse);
router.delete('/classes/:id', checkAuthorization, classesController.deleteClasse);

module.exports = router;