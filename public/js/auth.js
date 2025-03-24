// Mostrar/ocultar Login y Signup
document.getElementById('show-signup').addEventListener('click', () => {
    document.getElementById('login-box').classList.add('hidden');
    document.getElementById('signup-box').classList.remove('hidden');
});

document.getElementById('show-login').addEventListener('click', () => {
    document.getElementById('signup-box').classList.add('hidden');
    document.getElementById('login-box').classList.remove('hidden');
});

// Validar contraseña en Signup
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('password-error');

    // Validar: 8+ caracteres, 1 mayúscula, 1 número, 1 carácter especial
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (!regex.test(password)) {
        errorElement.style.display = "block";
        return;
    }

    errorElement.style.display = "none";
    alert("Cuenta creada correctamente. Redirigiendo al Dashboard...");
    window.location.href = "dashboard.html"; // Cambiar por lógica real luego
});

// Lógica de Login (simulada)
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Inicio de sesión exitoso. Redirigiendo...");
    window.location.href = "dashboard.html";
});