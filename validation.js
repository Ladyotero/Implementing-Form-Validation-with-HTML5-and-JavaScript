'use strict';

const form = document.getElementById('order-form');
const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('username-error');

// Add event listener to the form for submission
form.addEventListener('submit', function (event) {
    const username = usernameInput.value.trim();

    // Validate username length here
    if (username.length < 5) {
        usernameError.style.display = 'block';
        event.preventDefault();
    } else {
        usernameError.style.display = 'none';
    }
});
