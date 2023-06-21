let image = document.querySelector('img');
image.addEventListener('mouseover', addBorder);
image.addEventListener('mouseout', removeBorder);
function addBorder() {
    image.classList.add('imageBorder');
    image.classList.remove('imageClean');
};
function removeBorder() {
    image.classList.add('imageClean');
    image.classList.remove('imageBorder');
};