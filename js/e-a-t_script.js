let canvas = document.querySelector('.canvas');
let accordion = document.querySelectorAll('.customize');

let size_x16 = 16 * 16;
let size_x32 = 32 * 32;
let size_x64 = 64 * 64;

let btnX16 = document.querySelector('#small');
let btnX32 = document.querySelector('#medium');
let btnX64 = document.querySelector('#large');

btnX16.addEventListener("click", () => {printGrid(size_x16)});
btnX32.addEventListener("click", () => {printGrid(size_x32)});
btnX64.addEventListener("click", () => {printGrid(size_x64)});

printGrid(size_x16);

accordion.forEach((btn) => {
    btn.addEventListener("click", function(){
        let panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none"

        } else{
            panel.style.display = "block";
            
        }
    });
});

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

        if(gridSize === 16 * 16){
            grid.style.width = "50px";
            grid.style.height = "37.5px";

        } else if(gridSize === 32 * 32){
            grid.style.width = "25px";
            grid.style.height = "18.75px";

        } else{
            grid.style.width = "12.5px";
            grid.style.height = "9.5px";
        }
    
    });
}

