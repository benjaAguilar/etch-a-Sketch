let canvas = document.querySelector('.canvas');

for(let i = 1; i <= 255; i++){
    let div = document.createElement('div');
    div.classList.add("grid");

    canvas.appendChild(div);
}