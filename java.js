const grid = document.getElementById('grid');

for (let i=0;i<16;i++){
    for (let j=0;j<16;j++){
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild('square');
    }
}