// initialize the counter with 0
let number = 0;
// get the html counter element
let counterElement = document.getElementById('count');
// get the html save element
let saveElement = document.getElementById('save-dis');

// function: increse the counter interacting with the increment botton
let increse = () => {
    number += 1;
    counterElement.innerHTML = number;
};

// function: logs the counter
let save = () => {
    if (saveElement.innerText === 'Previouse entered :') {
        saveElement.innerText += ' ' + number;
    } else {
        saveElement.innerText += ' - ' + number;
    }
    reset();
};


// function: reset the counter to zero
let reset = () => {
    number = 0;
    counterElement.innerHTML = number;
};