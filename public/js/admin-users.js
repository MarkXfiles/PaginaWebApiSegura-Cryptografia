document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/users', {
            headers: { 'Authorization': 'Bearer Admin123!' } // 👈 Credenciales simuladas
        });
        if (!response.ok) throw new Error("Acceso denegado");
        const users = await response.json();
        renderUsers(users);
    } catch (error) {
        alert(error.message);
        window.location.href = "admin-login.html"; // Redirigir si falla
    }
});

function renderUsers(users) {
    const list = document.getElementById('admin-users-list');
    list.innerHTML = users.map(user => `
        <div class="user ${user.active ? 'active' : 'inactive'}">
            <p><strong>${user.name}</strong> (ID: ${user.id}) - ${user.email}</p>
            <span class="status">${user.active ? 'Activo ✅' : 'Inactivo ❌'}</span>
        </div>
    `).join('');
}