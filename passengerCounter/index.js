// initialize the counter with 0
let number = 0;
// get the html counter element
let counterElement = document.getElementById('counter');

// function: increse the counter interacting with the increment botton
let increse = () => {
    number = number + 1;
    counterElement.innerHTML = number;
};

// function: logs the counter
let save = () => {
    console.log(number);
};

