// Simple calculater
let num1 = 2;
let num2 = 3;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// Bring the element for results
let sumElement = document.getElementById("sum-el");
let sum;

// create the operations

let add = () => {
    sum = num1 + num2;
    sumElement.innerHTML = "Sum: " + sum;
};
let subtract = () => {
    sum = num1 - num2;
    sumElement.innerHTML = "Sum: " + sum;
};
let divide = () => {
    sum = num1 / num2;
    sumElement.innerHTML = "Sum: " + sum;
};
let multiply = () => {
    sum = num1 * num2;
    sumElement.innerHTML = "Sum: " + sum;
};