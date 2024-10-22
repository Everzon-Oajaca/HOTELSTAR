const db = require('../config/db.config.js');
const Usuario = db.Usuario;

// Crear un nuevo usuario
exports.create = (req, res) => {
  const usuario = {
    usuario: req.body.usuario,
    correo: req.body.correo,
    contraseña: req.body.contraseña,
    fecha_ultimo_acceso: req.body.fecha_ultimo_acceso || null, // Puede ser nulo si no se proporciona
  };

  Usuario.create(usuario)
    .then(result => {
      res.status(200).json({
        message: "Usuario creado con éxito con id = " + result.id_usuario,
        usuario: result,
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "¡Falló!",
        error: error.message,
      });
    });
};

// Editar un usuario existente
exports.updateById = async (req, res) => {
  const usuarioId = req.params.id;

  try {
    const usuario = await Usuario.findByPk(usuarioId);
    if (!usuario) {
      return res.status(404).json({
        message: "No se encontró el usuario para actualizar con id = " + usuarioId,
      });
    }

    const updatedObject = {
      usuario: req.body.usuario,
      correo: req.body.correo,
      contraseña: req.body.contraseña,
      fecha_ultimo_acceso: req.body.fecha_ultimo_acceso || null,
    };

    await Usuario.update(updatedObject, { where: { id_usuario: usuarioId } });

    res.status(200).json({
      message: "Actualización exitosa del usuario con id = " + usuarioId,
      usuario: updatedObject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error -> No se puede actualizar el usuario con id = " + usuarioId,
      error: error.message,
    });
  }
};

// Eliminar un usuario
exports.deleteById = async (req, res) => {
  const usuarioId = req.params.id;

  try {
    const usuario = await Usuario.findByPk(usuarioId);
    if (!usuario) {
      return res.status(404).json({
        message: "No existe un usuario con id = " + usuarioId,
      });
    }

    await usuario.destroy();
    res.status(200).json({
      message: "Eliminación exitosa del usuario con id = " + usuarioId,
      usuario: usuario,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error -> No se puede eliminar el usuario con id = " + usuarioId,
      error: error.message,
    });
  }
};


// Consultar todos los usuarios
exports.findAll = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll(); // Esto obtiene todos los usuarios
    res.status(200).json(usuarios); // Devuelve la lista de usuarios
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener la lista de usuarios",
      error: error.message,
    });
  }
};
