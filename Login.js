document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
   // alert('login success')
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if (data.success) {
            alert('Login successful!');
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', data.user.email);
            window.location.href="./index.html";
        } else {
            alert('Invalid credentials, please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
