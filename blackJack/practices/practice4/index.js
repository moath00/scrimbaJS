// first part
let dayOfMonth = 31
let weekday = "Friday"

if (dayOfMonth === 13 && weekday === "Friday")
    console.log("😱");


// second part
let hands = ["Rock", "Paper", "Scissor"];

let getHand = () => {
    let randomIndex = Math.floor(Math.random() * 3);
    return hands[randomIndex];
}

console.log(getHand());