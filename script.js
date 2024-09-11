// Display the current day of the week
const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const today = new Date().getDay();
document.getElementById('date').innerText = `Hoy es ${days[today]}`;

// Handle form submission and display the data in an alert
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    alert(`
        <table>
            <tr><th>Nombre:</th><td>${nombre}</td></tr>
            <tr><th>Apellido:</th><td>${apellido}</td></tr>
            <tr><th>Teléfono:</th><td>${telefono}</td></tr>
            <tr><th>Email:</th><td>${email}</td></tr>
            <tr><th>Mensaje:</th><td>${mensaje}</td></tr>
        </table>
    `);
});
