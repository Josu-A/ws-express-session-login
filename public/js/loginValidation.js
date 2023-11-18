const loginForm = document.getElementById('login-form');
const usernameElement = document.querySelector('input[name="username"]');
const passwordElement = document.querySelector('input[name="password"]');

const errorDiv = document.getElementById('error-message');

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const userData = {
        "username": usernameElement.value,
        "password": passwordElement.value
    };

    fetch('/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/protected';
        }
        else {
            errorDiv.innerText = 'Invalid username or password';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
