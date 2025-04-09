let numberOfSquares = 16;
let container = document.querySelector('#container');

let rows = Math.sqrt(numberOfSquares);

for (let i = 0; i < rows; i++) {
    let row = document.createElement('div');
    row.setAttribute('id', 'row');
    container.appendChild(row);
    for (let i=0; i < rows; i++) {
            let div = document.createElement('div');
            div.setAttribute('id', 'flex-item');
            row.appendChild(div);
        };
}