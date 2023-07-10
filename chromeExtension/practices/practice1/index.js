// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

const player = "Per" // in this case, player not modified in hole program
const opponent = "Nick" // in this case, opponent not modified in hole program
const game = "AmazingFighter"
let points = 0
let hasWon = false

points += 100
hasWon = true

if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}