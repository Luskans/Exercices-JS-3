const ancre1 = document.querySelector('body a:nth-child(1)');
const ancre2 = document.querySelector('body a:nth-child(2)');
const text = document.querySelector('p');
ancre1.addEventListener('click', () => {
    text.classList.remove('masquer');
});
ancre2.addEventListener('click', () => {
    text.classList.add('masquer');
});