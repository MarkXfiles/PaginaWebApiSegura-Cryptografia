// Admins predefinidos (luego se puede mover a una DB)
const ADMINS = [
    { user: "admin1", password: "Admin123!" },
    { user: "admin2", password: "SecurePass456@" }
];

document.getElementById('admin-login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = e.target[0].value;
    const password = e.target[1].value;

    const isValidAdmin = ADMINS.some(admin => 
        admin.user === user && admin.password === password
    );

    if (isValidAdmin) {
        window.location.href = "/users"; // Redirigir a la lista de usuarios (simulado)
    } else {
        alert("Credenciales incorrectas");
    }
});