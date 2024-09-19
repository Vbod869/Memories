document.addEventListener('DOMContentLoaded', function () {
    // Check if the user is logged in
    if (localStorage.getItem('loggedIn') !== 'true') {
        // Redirect to login page if not logged in
        window.location.href = 'login.html';
    }

    // Optional: Add a greeting or other interactive effects
    setTimeout(function () {
        alert('Welcome to our memory gallery! 💖');
    }, 1000);

    document.getElementById('logoutButton').addEventListener('click', function() {
        // Show confirmation before logging out
        if (confirm('Are you sure you want to log out?')) {
            // Clear login status in localStorage
            localStorage.removeItem('loggedIn');
            // Redirect to login page
            window.location.href = 'login.html';
        }
    });
});
