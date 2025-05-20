document.getElementById('forgotpasswordform').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;

    fetch('/api/reset-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Password reset link sent to your email!');
        } else {
            alert('Email not found. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
