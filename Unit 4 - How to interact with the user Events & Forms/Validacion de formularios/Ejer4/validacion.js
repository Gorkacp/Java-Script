document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Obtener valores
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Expresiones regulares para validaciones estrictas
        const namePattern = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/; // Solo letras y espacios
        const phonePattern = /^[0-9]{10}$/; // Solo números y 10 dígitos
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // Validaciones con mensajes específicos
        if (!namePattern.test(firstName)) {
            alert("First Name should contain only letters.");
            return;
        }

        if (!namePattern.test(lastName)) {
            alert("Last Name should contain only letters.");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Phone number should be exactly 10 digits.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!passwordPattern.test(password)) {
            alert("Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Si todas las validaciones pasan, el formulario se envía
        alert("Form submitted successfully!");
        form.submit();
    });
});

