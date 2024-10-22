
const env = {
  database: 'hotelstar_12ky', // Nombre de la base de datos
  username: 'hotelstar_12ky_user', // Usuario de la base de datos
  password: 'bmONK6r8All5qD1xw7UGTVjitlUZ1FN0', // Contraseña de la base de datos
  host: 'dpg-csajerrqf0us739v92u0-a', // Host del servidor PostgreSQL
  dialect: 'postgres', // El dialecto de la base de datos (PostgreSQL)
  pool: {
    max: 5, // Número máximo de conexiones en el pool
    min: 0, // Número mínimo de conexiones en el pool
    acquire: 30000, // Tiempo máximo en ms para intentar una conexión antes de marcar error
    idle: 10000 // Tiempo máximo que una conexión puede estar inactiva antes de ser liberada
  }
};

module.exports = env;
