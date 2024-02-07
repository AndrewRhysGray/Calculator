// I am challenging myself to create a calculator that can carry out addition, subtraction, multipucation and division

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
        return "Cannot be divided"
    }
    return n1 / n2;
}

console.log("Add:", add(5, 3));
console.log("Subtract:", subtract(10, 4)); 
console.log("Multiply:", multiply(2, 6)); 
console.log("Divide:", divide(20, 5)); 
