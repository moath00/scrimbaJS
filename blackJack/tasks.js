// First task
// Create two variables with random numbers between 2 and 11
// let firstCard = Math.round(Math.random()*9)+2;
// let secondCard = Math.round(Math.random()*9)+2;

// Create a variable to hold the total sum
// let sum = firstCard + secondCard;

// check winning
// if (sum < 21)
//     console.log("Do you wans to draw a new card? 🙂");
// else if (sum === 21)
//     console.log("Congratulations! You got the Blackjack! 🥳");
// else if (sum > 21)
//     console.log("You lost the game! 😭");

// Second task
// check if age legal or not
// let age = Math.random() * 100;

// check legality
// if (age >= 21)
//     console.log("Welcome!");
// else
//     console.log("You can not enter the place!");

// Third task
// check if age 100 or not and give cards
// let age = Math.round(Math.random()) * 120;

//check validity
// if (age < 100)
//     console.log("Not elegible!");
// else if (age === 100)
//     console.log("Here is your birthday card from the King!");
// else
//     console.log("Not elegible, you are already gotten one");

// Fourth task
// edit first task and use if & elseif & else
// let firstCard = Math.round(Math.random()*9)+2;
// let secondCard = Math.round(Math.random()*9)+2;

// Create a variable to hold the total sum
// let sum = firstCard + secondCard;

// check winning
// if (sum < 21)
//     console.log("Do you wans to draw a new card? 🙂");
// else if (sum === 21)
//     console.log("Congratulations! You got the Blackjack! 🥳");
// else
//     console.log("You lost the game! 😭");

// Fifth task
// edit first task and use if & elseif & else
let firstCard = Math.round(Math.random()*9)+2;
let secondCard = Math.round(Math.random()*9)+2;

// Create a variable to hold the total sum
let sum = firstCard + secondCard;
// create a variable to check the cash flow to the winner
let blackjackCash = false;

// check winning
if (sum < 21)
    console.log("Do you wans to draw a new card? 🙂");
else if (sum === 21) {
    console.log("Congratulations! You got the Blackjack! 🥳");
    blackjackCash = true;
} else
    console.log("You lost the game! 😭");

console.log(blackjackCash);