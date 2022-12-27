const sketchPad = document.querySelector('.sketchPad')

function createNewGrid(gridSize) {
    for(let i = 0; i < gridSize; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid')
        sketchPad.appendChild(grid);
        for(let j = 0; j < gridSize; j++){
            const tile = document.createElement('div');
            tile.classList.add('tile');
            grid.appendChild(tile);
            tile.addEventListener('mouseenter', () => {
                tile.style.backgroundColor = 'black';
            })
        }

    }
}

createNewGrid(16);



