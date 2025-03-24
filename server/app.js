const express = require('express');
const path = require('path');
const app = express();

// Base de datos temporal en memoria
let usersDB = [
    { id: 1, name: "Ejemplo Admin", email: "admin@test.com", active: true }
];

// Middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json()); // Para parsear JSON

// Ruta para agregar usuarios desde el dashboard
app.post('/api/users', (req, res) => {
    const { name, email, active } = req.body;
    const newUser = {
        id: usersDB.length + 1,
        name,
        email,
        active: active || false
    };
    usersDB.push(newUser);
    res.status(201).json(newUser);
});

// Ruta para obtener usuarios (solo admin)
app.get('/api/users', (req, res) => {
    // Simulamos autenticación (en un caso real usarías sessions/JWT)
    const isAdmin = req.headers.authorization === "Bearer Admin123!"; // 👈 Ejemplo básico
    if (!isAdmin) {
        return res.status(403).json({ error: "Acceso denegado" });
    }
    res.json(usersDB);
});

// Ruta para la página /users (HTML)
app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/admin-users.html'));
});

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});