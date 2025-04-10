const gridSize = 16;

let body = document.querySelector('#body');
let container = document.createElement('div');
container.setAttribute('id', 'container');
let resize = document.createElement('button');
resize.textContent = 'Resize grid';
body.appendChild(resize);
body.appendChild(container);

resize.addEventListener('click', () => {
    let toRemove = document.querySelectorAll('#row');
    for (let i = 0; i < toRemove.length; i++) {
        container.removeChild(document.querySelector('#row'));
    }
    let newSize = prompt('Enter a new grid size');
    if (newSize <= 100) {
        drawGrid(newSize ** 2);
    } else {
        alert('Can only make a grid up to 100!')
    };
});

drawGrid(gridSize);

function drawGrid (size) {
    let numberOfSquares = size;
    let container = document.querySelector('#container');
    let rows = Math.sqrt(numberOfSquares);
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        row.setAttribute('id', 'row');
        container.appendChild(row);
        for (let i=0; i < rows; i++) {
            let div = document.createElement('div');
            div.setAttribute('id', 'flex-item');
            div.classList.add('dark');
            row.appendChild(div);
            div.addEventListener('mouseover', () => {
                let style = window.getComputedStyle(div);
                let opacity = Number(style.getPropertyValue('opacity'));
                let updateOpacity = opacity + 0.1
                div.style.opacity = updateOpacity;
            });
        };
    };
};
