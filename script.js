
// Get the display screen element
const displayScreen = document.getElementById('display-screen');

// Get the number buttons elements
const numberButtons = document.querySelectorAll('.number-button');

// Get the operator buttons elements
const operatorButtons = document.querySelectorAll('.operator-button');

// Get the clear button element
const clearButton = document.getElementById('clear-button');

// Get the equals button element
const equalsButton = document.getElementById('equals-button');

// Initialize the current calculation
let currentCalculation = '';

// Add event listeners to the number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentCalculation += button.textContent;
    displayScreen.textContent = currentCalculation;
  });
});

// Add event listeners to the operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentCalculation += button.textContent;
    displayScreen.textContent = currentCalculation;
  });
});

// Add event listener to the clear button
clearButton.addEventListener('click', () => {
  currentCalculation = '';
  displayScreen.textContent = '';
});

// Add event listener to the equals button
equalsButton.addEventListener('click', () => {
  const result = eval(currentCalculation);
  displayScreen.textContent = result;
  currentCalculation = result.toString();
});