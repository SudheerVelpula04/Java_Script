// Get references to the elements
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Initialize the counter
let count = 0;

// Function to update the displayed value
function updateDisplay() {
    counterValue.textContent = count;
}

// Event listener for increment button
incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

// Event listener for decrement button
decrementBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

// Event listener for reset button
resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

// Initial display update
updateDisplay();