document.addEventListener('DOMContentLoaded', function() {
    // This function will run when the DOM is fully loaded
    console.log('DOM is fully loaded and ready.');
    // Add your code that interacts with the DOM or performs tasks here
});

let colorBox = document.getElementById('color-box');
let changeColorBtn = document.getElementById('change-color-btn');


// create a function to generate random hexadecimal color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    
}

// Add an event listener to the change-color-btn element.
changeColorBtn.addEventListener('click', function() {
    // Get a random color
    let randomColor = getRandomColor();
    // Change the background color of the color-box element
    colorBox.style.backgroundColor = randomColor;
});