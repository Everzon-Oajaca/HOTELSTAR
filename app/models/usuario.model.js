module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define('usuario', {
    id_usuario: {
      type: Sequelize.INTEGER,
      autoIncrement: true, // Asume que quieres un campo autoincremental para el ID
      primaryKey: true
    },
    usuario: {
      type: Sequelize.STRING(25), // Usuario, texto de hasta 25 caracteres
      allowNull: false
    },
    correo: {
      type: Sequelize.STRING(50), // Correo, texto de hasta 50 caracteres
      allowNull: false,
      unique: true // Asegura que el correo sea único
    },
    contraseña: {
      type: Sequelize.STRING(25), // Contraseña, texto de hasta 25 caracteres
      allowNull: false
    },
    fecha_ultimo_acceso: {
      type: Sequelize.DATE, // Fecha del último acceso
      allowNull: true // Puede ser nulo si no se ha registrado aún
    }
  });

  return Usuario;
};
