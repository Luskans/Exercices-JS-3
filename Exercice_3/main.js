const buttonGreen = document.querySelector('.green');
const buttonRed = document.querySelector('.red');
const buttonBlue = document.querySelector('.blue');
const text = document.querySelector('#text');
buttonGreen.addEventListener('click', () => {
    text.classList.add('text-green');
    text.classList.remove('text-red');
    text.classList.remove('text-blue');
});
buttonRed.addEventListener('click', () => {
    text.classList.add('text-red');
    text.classList.remove('text-green');
    text.classList.remove('text-blue');
});
buttonBlue.addEventListener('click', () => {
    text.classList.add('text-blue');
    text.classList.remove('text-red');
    text.classList.remove('text-green');
});