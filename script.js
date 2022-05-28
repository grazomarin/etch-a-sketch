const container = document.querySelector('.container');
console.log(container);
for (i = 0; i < 16;) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    i = container.childElementCount;
    box.addEventListener('mouseover', () => box.classList.add('hover'));
}