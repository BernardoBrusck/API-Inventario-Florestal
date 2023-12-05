const express = require('express');
const plantasMedicinaisController = require('../controllers/plantasMedicinaisController');
const checkAuthorization = require('../middlewares/checkAuthorization');
const checkAuthorizationGet = require('../middlewares/checkAuthorizationGet');

const router = express.Router();

router.get('/plantas_medicinais', checkAuthorizationGet, plantasMedicinaisController.getAllPlantasMedicinais);
router.post('/plantas_medicinais', checkAuthorization, plantasMedicinaisController.createPlantasMedicinais);
router.put('/plantas_medicinais/:id', checkAuthorization, plantasMedicinaisController.updatePlantasMedicinais);
router.delete('/plantas_medicinais/:id', checkAuthorization, plantasMedicinaisController.deletePlantasMedicinais);

module.exports = router;