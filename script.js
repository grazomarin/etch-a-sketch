const container = document.querySelector('.container');

for (i = 0; i < 16;) {
const box = document.createElement('div');
box.classList.add('box');
container.appendChild(box);
i = container.childElementCount;
box.addEventListener('mouseover', () => box.classList.add('hover'));
}

// 3 buttons 64x64 32x32 16x16 when one is pressed create the number of boxes and assign them their class

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        i = +btn.className
        removeAllChildNodes(container)
        createIntBoxes(i)
    });
});

function createIntBoxes (i) {
    for (j = 0; j < i ;) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
        j = container.childElementCount;
        box.addEventListener('mouseover', () => box.classList.add('hover'));
        changeBoxSize(i, box)
    }
}

function changeBoxSize(number, element) {
    if (number == 64) {
        element.style.width = '10px'
        element.style.height = '10px'
        element.style.borderWidth = '0.2px'
        element.style.margin = '-0.2px'
    } else if (number == 32) {
        element.style.width = '15px'
        element.style.height = '15px'
        element.style.borderWidth = '0.2px'
        element.style.margin = '-0.2px'
    } else {
        element.style.width = '20px'
        element.style.height = '20px'
        element.style.borderWidth = '0.3px'
        element.style.margin = '-0.3px'
    }
}

function changeContainerSize (size) {
    if (size == 64) {
        container.width
    }
}