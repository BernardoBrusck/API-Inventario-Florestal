const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();

router.post('/users', usersController.createUser);
router.post('/users/login', usersController.getUserLogin);
router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);  
router.get('/users/:cpf', usersController.getUserByCPF);
router.put('/users/:id', usersController.updateUser);
router.patch('/users/:id', usersController.partialUpdateUser);
router.delete('/users/:id', usersController.deleteUser);

module.exports = router;
