// auth.routes.js
const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');

// Ruta para el inicio de sesión
router.post('/login', authController.login);

// Ruta para el registro de nuevos usuarios
router.post('/register', authController.register);

module.exports = router;
