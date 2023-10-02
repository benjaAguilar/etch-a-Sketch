let canvas = document.querySelector('.canvas');
let size_x16 = 16 * 16;
let size_x32 = 32 * 32;
let size_x64 = 64 * 64;

printGrid(size_x16);

function printGrid(gridSize){
    document.querySelectorAll('.grid').forEach((grid) => {
        grid.remove();

    });

    for(let i = 1; i < gridSize; i++){
        let div = document.createElement('div');
        div.classList.add("grid");
    
        canvas.appendChild(div);
    }
    
    let grids = document.querySelectorAll('.grid');

    grids.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "#333";
    
        });
    
    });
}

