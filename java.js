
size=16;

let isRainbow=false;
populateBoard(size);
function populateBoard(size){

const board= document.querySelector('.board');
let isDrawing=false;


while(board.firstChild){
    board.removeChild(board.firstChild);
}
board.style.gridTemplateColumns= `repeat(${size},1fr)`;
board.style.gridTemplateRows= `repeat(${size},1fr)`;

let area= size*size

for(let i=0;i<area;i++){
    let square= document.createElement('div');
    square.addEventListener('mousedown', () => {
        isDrawing = true;
    });
    square.addEventListener('mouseup', () => {
        isDrawing = false;
    });
    
    square.addEventListener('mouseover', () => {
        if (isDrawing && isRainbow) {
          
          square.style.backgroundColor = randomColor();
        } else if(isDrawing){
            square.style.backgroundColor = color;}});
   

    square.style.backgroundColor='white';
    board.appendChild(square);
}


}
color='black';
function changeColor(newColor){
    color=newColor;
}


function changeSize(){
    let input=document.querySelector("#change");
    let selectSize=document.querySelector(".selectSize");
    error.textContent=''
    size=input.value;

    if(size>1 && size<100){
    populateBoard(size);}
    else{
        let error= document.querySelector("#error");

        error.textContent='Size must be between 1 and 100!'
    }


}

const colorPicker = document.createElement('input');
colorPicker.type='color';
colorPicker.value=color;
colorPicker.style.display='none';

const colorButton= document.querySelector("#colorOption");

colorButton.addEventListener('click', ()=>{
    colorPicker.click();
    isRainbow=false;
});

colorPicker.addEventListener('input',()=>{
    changeColor(colorPicker.value);
    isRainbow=false;
})

document.body.appendChild(colorPicker);



function reset() {
    const squares = document.querySelectorAll('.board > div');
    squares.forEach((square) => {
      square.style.backgroundColor = 'white';
    });
  }


  function randomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 100);
    const lightness = Math.floor(Math.random() * 100);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  const randomColorButton = document.querySelector("#rainbow");

randomColorButton.addEventListener('click', () => {
  isRainbow = !isRainbow;
});
