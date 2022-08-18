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