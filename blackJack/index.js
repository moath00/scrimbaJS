// create a message variable and assign it depending on check status
let firstCard = getRandomCard();
let secondCard = getRandomCard();

// create cards array
let cards = [firstCard, secondCard];
// Create a variable to hold the total sum
let sum = firstCard + secondCard;
// create a variable to check the cash flow to the winner
let blackjackCash = false;
// create a variable to check the if player style in game
let isAlive = true;
// create a message variable
let message = "";
// create a variable to store the message element
let messageElement = document.getElementById("message-el");
// create a variable to store the sum element
let sumElement = document.querySelector("#sum-el");
// create a variable to store the cards element
let cardsElement = document.querySelector("#cards-el");

// function: run the game
let startGame = () => renderGame();

// function: generate a random number
// we write it with function keyword for hoisting purposes in line 2 and 3
function getRandomCard() {
    return Math.floor(Math.random() *  13) + 1;
};

// function: start the game and check winning
let renderGame = () => {
    if (sum < 21)
        message = "Do you want to draw a new card?";
    else if (sum === 21) {
        message = "Congratulations! You got the Blackjack!";
        blackjackCash = true;
    } else {
        message = "You lost the game!";
        isAlive = false;
    };
    messageElement.textContent = message;
    cardsElement.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++)
        cardsElement.textContent += " " + cards[i];
    sumElement.textContent = "Sum: " + sum;
};

// function: create new card
let newCard = () => {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
};