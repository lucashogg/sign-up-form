// Get elements
const submitBtn = document.querySelector('button');
const form = document.querySelector('form');
const passError = document.querySelector('.password-error');
const inputs = document.querySelectorAll('input');

// Variables
const error = ' Passwords do not match';

// Check if passwords match
submitBtn.addEventListener('click', (e) => {
    const password = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#password-confirm');

    if (password.value != passwordConfirm.value) {
        e.preventDefault();
        passError.innerText = error;
    }
})

// Remove password error
inputs.forEach((input) => {
    if (input.id === 'password' || input.id === 'password-confirm') {
        input.addEventListener('change', () => {
            passError.innerHTML = '&nbsp;';
        })
    }
})