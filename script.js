function createGrid(size = 16) {

    for (let i = 0; i < size ** 2; i++) {
        const smallBox = document.createElement('div');
        smallBox.style.cssText = 'border: 1px solid black'
        smallBox.classList.add('small-box');
        let width = 500 / (size);
        let height = width;
        smallBox.style.width = `${width}px`;
        smallBox.style.height = `${height}px`;
        smallBox.addEventListener('mouseover', () => {
            smallBox.style.backgroundColor = 'black';
        });
        const grid = document.querySelector('.grid');
        grid.appendChild(smallBox);
    }

}

function removeChildren() {
    const grid = document.querySelector('.grid');
    const boxes = document.querySelectorAll('.small-box');
    boxes.forEach((box) => grid.removeChild(box));
}

function generateRandomColor() {
    const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = '#';
    for (i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 16);
        color += colors[randomNumber];
    }

    return color;
}