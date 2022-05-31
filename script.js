const container = document.querySelector('.container');

for (i = 0; i < 16 ** 2;) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    i = container.childElementCount;
    box.addEventListener('mouseover', () => box.classList.add('hover'));
} 

function createBox (num) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${340 / num}px`;
    box.style.height = `${340 / num}px`;
    container.appendChild(box);
    box.addEventListener('mouseover', () => box.classList.add('hover'));
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let dimension = prompt('enter 1 dimension', '');
    if (dimension > 128) {
        dimension = prompt('Your number is too big please enter 128 or less', '')
    } else {
        dimension = +dimension;
    }
    removeAllChildNodes(container);
    createIntBoxes(dimension);

});

function createIntBoxes (z) {
    for (i = 0; i < z; i++){
        for (j = 0; j < z; j++) {        
            createBox(z);
        }
    }
}

