const container = document.querySelector('.container');


for (i = 0; i < 20 ** 2;) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    i = container.childElementCount;
    box.addEventListener('mouseover', () => box.classList.add('hover'));
} 

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let amount = prompt('enter 1 dimension', '');
    amount = +amount;
    removeAllChildNodes(container)
    createIntBoxes(amount)
});

function createIntBoxes (i) {
    for (j = 0; j < i ** 2 ;) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
        box.addEventListener('mouseover', () => box.classList.add('hover'));
        j = container.childElementCount;
        changeBoxSize(i, box);
    }
}

function changeBoxSize(number, element) {
    let dimension = 340 / number;
    console.log(dimension);
    element.style.width = `${dimension}px`;
    element.style.height = `${dimension}px`;
    return dimension;
}


function discardBadBoxes(dimension) {
    //container.forEach is not a function error
    container.forEach(child => {
        if(child.style.height != `${dimension}px`) {
            console.log(div);
        }
    });
}
