const express = require('express');
const relogioMedicinalController = require('../controllers/relogioMedicinalController');
const checkAuthorization = require('../middlewares/checkAuthorization');
const checkAuthorizationGet = require('../middlewares/checkAuthorizationGet');

const router = express.Router();

router.get('/relogio_medicinal', checkAuthorizationGet, relogioMedicinalController.getAllRelogioMedicinal);
router.post('/relogio_medicinal', checkAuthorization, relogioMedicinalController.createRelogioMedicinal);
router.put('/relogio_medicinal/:id', checkAuthorization, relogioMedicinalController.updateRelogioMedicinal);
router.patch('/relogio_medicinal/:id', checkAuthorization, relogioMedicinalController.partialUpdateRelogioMedicinal);
router.delete('/relogio_medicinal/:id', checkAuthorization, relogioMedicinalController.deleteRelogioMedicinal);

module.exports = router;