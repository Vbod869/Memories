document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Replace with your names and secret code
    const allowedUser1 = 'arya';
    const allowedUser2 = 'nabila';
    const correctPassword = '210822';

    if ((username === allowedUser1 || username === allowedUser2) && password === correctPassword) {
        // Tampilkan notifikasi login berhasil
        errorMessage.style.display = 'block';
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Login berhasil! Tunggu sebentar sayang...';

        // Simpan status login di localStorage
        localStorage.setItem('loggedIn', 'true');

        // Tunggu 2 detik sebelum dialihkan ke halaman kenangan
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 2000); // Delay 2 detik sebelum pengalihan
    } else {
        errorMessage.style.display = 'block';
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Invalid name or code. Try again!';
    }
});

// login.js
document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    togglePassword.addEventListener('click', () => {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // Change the icon based on the password field type
        const icon = togglePassword.querySelector('i');
        icon.classList.toggle('fa-eye', type === 'password');
        icon.classList.toggle('fa-eye-slash', type === 'text');
    });
});

