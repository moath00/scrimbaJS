// First task
// let box = document.querySelector('#box');

// box.addEventListener('click', () => console.log('Box nocked!'));

// ################### ***** ################### //

// Second task
// let div = document.querySelector('#container');

// div.innerHTML += '<button onclick="buy()">Buy!</button>';

// let buy = () => div.innerHTML += '<p>Thank you for buying!</p>';


// ################### ***** ################### //


// Third task && Forth task
// template strings/literals

// const recipient = "James";
// const sender = "Moath Hjjawi";

// // Refactor the email string to use template strings
// const email = `Hey ${recipient}!
// How is it going?
// Cheers ${sender}`;

// console.log(email);

// Seventh task
// console.log(Boolean("")) // false (empty string)
// console.log(Boolean("0")) // true (not empty string)
// console.log(Boolean(100)) // true (number : not null & not zero)
// console.log(Boolean(null)) // false (null == undefined)
// console.log(Boolean([0])) // true (array : not empty array)
// console.log(Boolean(-0)) // false (zero)
// truly values
// [] and any value except the falsy mentioned

// falsy values
// false // 0 // "" // NaN
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness


// ################### ***** ################### //


// Eighth task
// create function take greeting parameter
// const welcomeEl = document.getElementById("welcome-el");

// // Give the function a parameter, greeting, that replaces "Welcome back"
// function greetUser(greeting) {
//     welcomeEl.textContent = greeting + ", Per Harald Borgen 👋";
// }

// greetUser("Hola");


// ################### ***** ################### //


// Ninth task
// create function take greeting, name and emojis that replace using string literals
// const welcomeEl = document.getElementById("welcome-el");

// // Give the function a parameter, greeting, that replaces "Welcome back"
// function greetUser(greeting, name, emoji) {
//     welcomeEl.textContent = `${greeting}, ${name} ${emoji}`;
// }

// greetUser("Hola", "Moath", "👋");


// ################### ***** ################### //


// Tenth task
// create a function add two numbers
// let add = (number1, number2) => number1 + number2;

// console.log(add(3, 4));
// console.log(add(9,102))


// ################### ***** ################### //


// Eleventh task
// create a function returns first item in array
let testArray1 = [1, 2, 3, 4];
let testArray2 = ["a", "b", "c", "d"];
let testArray3 = [true, false]
let getFirst = (array) => array[0];

console.log(getFirst(testArray1));
console.log(getFirst(testArray2));
console.log(getFirst(testArray3));