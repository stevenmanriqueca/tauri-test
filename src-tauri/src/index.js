// backend.js

const express = require('express');
const app = express();
const port = 3000;

// Endpoint para obtener datos de usuario
app.get('/api/user', (req, res) => {
    // Supongamos que aquí obtienes los datos del usuario desde tu base de datos
    const usuario = {
        nombre: 'Usuario de ejemplo',
        edad: 30,
        email: 'usuario@example.com'
    };
    res.json(usuario);
});

app.listen(port, () => {
    console.log(`Backend Node.js escuchando en http://localhost:${port}`);
});
