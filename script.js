const sketchPad = document.querySelector('.sketchPad');

function createNewGrid(gridSize) {
    for(let i = 0; i < gridSize; i++){
        let grid = document.createElement('div');
        grid.classList.add('grid')
        sketchPad.appendChild(grid);
        for(let j = 0; j < gridSize; j++){
            let tile = document.createElement('div');
            tile.classList.add('tile');
            grid.appendChild(tile);
            tile.addEventListener('mouseenter', () => {
                tile.style.backgroundColor = 'black';
            })
        }

    }
}


function resetGrid() {
    let userChoice = prompt('Please enter a number between 1-100');
    let grid = document.querySelectorAll('.grid');
    grid.forEach((grid) => 
        sketchPad.removeChild(grid))
    if (userChoice >= 1 && userChoice <= 100) {
        createNewGrid(userChoice);
    } else{
        do {userChoice = prompt('Invalid entry! Please try again')
    } 
    while( userChoice < 1 || userChoice > 100);
    createNewGrid(userChoice);
    }
}

const newGrid =document.querySelector('.newGrid');
newGrid.addEventListener('click', resetGrid)

createNewGrid(16);