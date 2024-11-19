const express = require('express');
const path = require('path');
const app = express();
const PORT = 3080;

// Middleware para procesar datos del formulario en formato URL
app.use(express.urlencoded({ extended: true }));

// Ruta para servir el formulario HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'formulario.html'));
});

// Ruta para procesar los datos enviados por el formulario
app.post('/registro', (req, res) => {
  // Acceder a los datos del formulario
  const { nombre, edad, email } = req.body;

  // Validación básica del lado del servidor (aunque ya tenemos validación en el formulario)
  if (!nombre || !edad || !email ) {
    return res.send("Todos los campos son obligatorios.");
  }

  // Mostrar una página de confirmación con los datos enviados
  res.send(`
    <h1>Confirmación de Registro</h1>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Edad:</strong> ${edad}</p>
    <p><strong>Correo Electrónico:</strong> ${email}</p>
    
`);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
