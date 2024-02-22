// Get elements
const submitBtn = document.querySelector('button');
const form = document.querySelector('form');
const error = document.querySelector('.password-error');

// Check if passwords match
submitBtn.addEventListener('click', (e) => {
    const password = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#password-confirm');

    if (password.value != passwordConfirm.value) {
        e.preventDefault();
        error.innerText = 'Passwords do not match';
    }
})