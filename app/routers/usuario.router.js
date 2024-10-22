const express = require('express');
const router = express.Router();
const usuarios = require('../controllers/usuario.controller.js');
const usuarioController = require('../controllers/usuario.controller'); // Asegúrate de que la ruta sea correcta


// Crear un usuario
router.post('/create', usuarios.create); // No repitas el prefijo 'api/usuarios'


// Actualizar un usuario por su ID
router.put('/update/:id', usuarios.updateById);

// Eliminar un usuario por su ID
router.delete('/delete/:id', usuarios.deleteById);


router.get('/', usuarioController.findAll); // Obtener todos los usuarios


module.exports = router;
