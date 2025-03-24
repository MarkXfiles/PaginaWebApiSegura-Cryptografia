document.getElementById('add-user-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const isActive = e.target[2].checked;

    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, active: isActive })
        });
        const newUser = await response.json();
        addUserToDOM(newUser); // Mostrar en la lista
        e.target.reset();
    } catch (error) {
        alert("Error al agregar usuario");
    }
});

function addUserToDOM(user) {
    const userList = document.getElementById('user-list');
    const userElement = document.createElement('div');
    userElement.className = `user ${user.active ? 'active' : 'inactive'}`;
    userElement.innerHTML = `
        <p><strong>${user.name}</strong> - ${user.email}</p>
        <span class="status">${user.active ? 'Activo ✅' : 'Inactivo ❌'}</span>
    `;
    userList.appendChild(userElement);
}