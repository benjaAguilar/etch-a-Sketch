let canvas = document.querySelector('.canvas');
let accordion = document.querySelectorAll('.customize');
let currentColor = "black";

let size_x16 = 16 * 16;
let size_x32 = 32 * 32;
let size_x64 = 64 * 64;

//size buttons
let btnX16 = document.querySelector('#small');
let btnX32 = document.querySelector('#medium');
let btnX64 = document.querySelector('#large');

btnX16.addEventListener("click", () => {printGrid(size_x16)});
btnX32.addEventListener("click", () => {printGrid(size_x32)});
btnX64.addEventListener("click", () => {printGrid(size_x64)});

//color buttons
let colorBlack = document.querySelector('#black');
let colorWhite = document.querySelector('#white');
let progressiveDark = document.querySelector('#progresive');
let randomColor = document.querySelector('#random');

colorBlack.addEventListener("click", () => {currentColor = "black"});
colorWhite.addEventListener("click", () => {currentColor = "white"});
progressiveDark.addEventListener("click", () => {currentColor = "pr dark"});
randomColor.addEventListener("click", () => {currentColor = "random"});

printGrid(size_x16);

//accordion buttons
accordion.forEach((btn) => {
    btn.addEventListener("click", function(){
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none"

        } else{
            panel.style.display = "block";

        }
    });
});

function getRandomNumber(){
    let num = Math.floor(Math.random() * 255) + 1;

    return num;
}

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
            if(currentColor === "black"){
                grid.style.backgroundColor = "#333";

            } else if(currentColor === "white"){
                grid.style.backgroundColor = "white";

            } else if(currentColor === "pr dark"){
                grid.style.backgroundColor = "#333";

            } else{
                grid.style.backgroundColor = "rgb(" + getRandomNumber() + ", " + getRandomNumber() + ", " + getRandomNumber() + ")";

            }
            
    
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

