// initialize the counter with 0
let number = 0;
// initialize the sum with 0
let summation = 0;
// get the html counter element
let counterElement = document.getElementById('count');
// get the html save element
let saveElement = document.getElementById('save-dis');
// get the html sum element
let sumElement = document.getElementById('sum');

// function: increse the counter interacting with the increment botton
let increse = () => {
    number += 1;
    counterElement.innerHTML = number;
};

// function: logs the counter
let save = () => {
    let text = '';
    if (saveElement.textContent === 'Previouse entered :') {
        text += ' ' + number;
    } else if ((saveElement.innerHTML.length % 25 >= 2 && saveElement.innerHTML.length % 25 <= 6)) {
        text += '<br>' + number;
    } else {
        text += ' - ' + number;
    }
    saveElement.innerHTML += text;
    sum();
    reset();
};


// function: reset the counter to zero
let reset = () => {
    number = 0;
    counterElement.innerHTML = number;
};

// function: sum the people
let sum = () => {
    summation += number;
    sumElement.innerHTML = "sum : " + summation;
};