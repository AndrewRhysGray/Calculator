const buttons = document.querySelectorAll("button");
const deleteButton = document.getElementById('delete');
const output = document.getElementById('output');
const equalsButton = document.getElementById('equals');

function add(n1, n2) {return n1 + n2;}
function subtract(n1, n2) {return n1 - n2;}
function multiply(n1, n2) {return n1 * n2;}
function divide(n1, n2) {if (n2 === 0) {return "Cannot divide by zero";} return n1 / n2;}
function calculate() {
    let expression = output.value;
    try {
        let result = eval(expression);
        output.value = result;
    } catch (error) {
        output.value = 'Error';
    }
}

buttons.forEach(button => {button.addEventListener('click', () => {output.value += button.textContent;});});
deleteButton.addEventListener('click', () => {output.value = output.value.slice(0, -1);
});
equalsButton.addEventListener('click', () => {let expression = output.value; let result; try {result = eval(expression); output.value = result;} catch (error) {output.value = 'Error';}});

buttons.forEach(button => {button.addEventListener('click', () => {const buttonText = button.textContent; if (buttonText === '.') {if (!output.value.includes('.')) {output.value += buttonText;}}});});

document.getElementById('equals').addEventListener('click', calculate);

