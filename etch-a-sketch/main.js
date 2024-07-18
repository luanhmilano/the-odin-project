document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('grid');
    const newGridButton = document.getElementById('new-grid-button');

    function createGrid(size) {
        grid.innerHTML = '';
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div')
            square.classList.add('square')
    
            square.addEventListener('mouseover', () => {
                square.classList.add('hovered');
            })
    
            grid.appendChild(square)
        }

    }

    newGridButton.addEventListener('click', () => {
        let newSize = parseInt(prompt('Enter the number of squares per side (maximum 100):'))

        if (isNaN(newSize) || newSize < 1 || newSize > 100) {
            alert('Please enter a number between 1 and 100.')
        }

        createGrid(newSize)

    })

    createGrid(16);
    
})