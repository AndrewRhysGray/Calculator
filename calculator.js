// I am challenging myself to create a calculator that can carry out addition, subtraction, multiplication, and division

// Buttons and text output are declared as constants
const buttons = document.querySelectorAll("button");
const deleteButton = document.getElementById('delete');
const output = document.getElementById('output');

// Calculator functions
function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    if (n2 === 0) {
        return "Cannot divide by zero";
    }
    return n1 / n2;
}

// Test logs
console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(10, 4));
console.log("Multiplication:", multiply(2, 6));
console.log("Division:", divide(20, 5));

// Button event listeners
buttons.forEach(button => {
    button.addEventListener('click', () => {
        output.value += button.textContent;
    });
});

// Delete button event listener
deleteButton.addEventListener('click', () => {
    let currentText = output.value;
    output.value = currentText.substring(0, currentText.length - 1);
});
