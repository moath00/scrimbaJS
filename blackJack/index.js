// crate player object
let player = {
    name: "Loo",
    chips: 125
};
// create cards array
let cards = [];
// Create a variable to hold the total sum
let sum = 0;
// create a variable to check the cash flow to the winner
let blackjackCash = false;
// create a variable to check the if player style in game
let isAlive = false;
// create a message variable
let message = "";
// create a variable to store the message element
let messageElement = document.getElementById("message-el");
// create a variable to store the sum element
let sumElement = document.querySelector("#sum-el");
// create a variable to store the cards element
let cardsElement = document.querySelector("#cards-el");
// create a variable to store the chips element
let playerElement = document.querySelector("#player-el");
playerElement.textContent = player.name + ": $" + player.chips;

// function: run the game
let startGame = () => {
    // create a message variable and assign it depending on check status
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
};

// function: generate a random number
// we write it with function keyword for hoisting purposes in line 2 and 3
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() *  13) + 1;
    if (randomNumber === 1)
        return 11;
    else if (randomNumber > 10)
        return 10;
    return randomNumber;
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
    if ( isAlive && !blackjackCash ) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
};