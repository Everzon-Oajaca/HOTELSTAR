const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const LibrosRouter = require('./app/routers/usuario.router.js');
const db = require('./app/config/db.config.js');

// Sincronizar la base de datos y las tablas
db.sequelize.sync({ force: true }).then(() => {
  console.log('Se eliminaron y re-crearon las tablas con { force: true }');
});

// Configuración de CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Cambia esto al puerto correcto de tu frontend
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use('/api/usuarios', LibrosRouter); // Asegúrate de que las rutas estén bien configuradas

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido Estudiantes de UMG" });
});

const server = app.listen(8080, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("App escuchando en http://%s:%s", host, port);
});
