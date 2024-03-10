

import express from 'express';
import { createUser, getUsers } from './user.controller.js';

const router = express.Router();

// Ruta para crear un nuevo usuario
router.post('/', createUser);

// Ruta para obtener todos los usuarios
router.get('/', getUsers);

// Otros rutas según tus necesidades

export default router;
