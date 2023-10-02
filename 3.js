const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const confirmationMessage = document.getElementById('confirmationMessage');

forgotPasswordForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    // Here, you would typically send a request to your server to handle the password reset process.
    // For this example, we'll simulate a successful request.
    setTimeout(function() {
        confirmationMessage.innerHTML = 'An email with instructions to reset your password has been sent to ' + email;
        forgotPasswordForm.reset();
    }, 2000); // Simulate a delay, replace this with actual server request.
});