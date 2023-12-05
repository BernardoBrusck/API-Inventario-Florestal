const express = require('express');
const plantasDaninhasController = require('../controllers/plantasDaninhasController');
const checkAuthorization = require('../middlewares/checkAuthorization');
const checkAuthorizationGet = require('../middlewares/checkAuthorizationGet');

const router = express.Router();

router.get('/plantas_daninhas', checkAuthorizationGet, plantasDaninhasController.getAllPlantasDaninhas);
router.get('/plantas_daninhas/:id', checkAuthorizationGet, plantasDaninhasController.getPlantasDaninhasById);
router.post('/plantas_daninhas', checkAuthorization, plantasDaninhasController.createPlantasDaninhas);
router.put('/plantas_daninhas/:id', checkAuthorization, plantasDaninhasController.updatePlantasDaninhas);
router.patch('/plantas_daninhas/:id', checkAuthorization, plantasDaninhasController.partialUpdatePlantasDaninhas);
router.delete('/plantas_daninhas/:id', checkAuthorization, plantasDaninhasController.deletePlantasDaninhas);

module.exports = router;