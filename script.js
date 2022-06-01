const container = document.querySelector('.container');
const button = document.querySelector('.create');
const reset = document.querySelector('.reset');

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

button.addEventListener('click', () => {
    let dimension = prompt('enter 1 dimension', '');
    if (dimension < 128 && dimension > 0) {
        dimension = +dimension;
    } else if (dimension > 128) {
        dimension = prompt('Your number is too big please enter 128 or less', '')
    } else {
        return
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

reset.addEventListener('click', () => {
    let boxes = document.querySelectorAll('.hover')
    boxes.forEach(box => {
        box.classList.remove('hover')
    });
});


