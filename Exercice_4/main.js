const input1 = document.querySelector('#password');
const input2 = document.querySelector('#confirmPassword');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    if (input1.value === input2.value) {
        input1.classList.add('green-border');
        input2.classList.add('green-border');
        input1.classList.remove('red-border');
        input2.classList.remove('red-border');
    } else {
        input1.classList.add('red-border');
        input2.classList.add('red-border');
        input1.classList.remove('green-border');
        input2.classList.remove('green-border');
    }
})