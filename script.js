const container = document.querySelector('#container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']


for(let i = 0; i < 500; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', ()=> randomColor(square))

    square.addEventListener('mouseleave',()=> removeColor(square))
    container.appendChild(square);

}

function randomColor(square) {
    const num =  Math.floor(Math.random()*5);
    square.style.backgroundColor = colors[num]
    square.style.boxShadow = `0 0 2px ${colors[num]}, 0 0 10px ${colors[num]}`
}
function removeColor(square){
    square.style.backgroundColor = '#1d1d1d';
    square.style.boxShadow = '0 0 2px #000'
}