// Exercise 1: Guess the number
const randomNumber = Math.floor(Math.random() * 100) + 1;
let userGuess = prompt("Guessed the number between 1 and 100: ");
let turns = 0;
while ( userGuess != randomNumber){
    if (userGuess < randomNumber){
        userGuess = prompt("Your guess was too low.Try again.")
    }else{
        userGuess = prompt("Your guess was too high.Try Again.")
    }
    turns++;
}
const score = 100 - turns;
console.log(`Congratulations! You guessed the number in ${turns} turns! Your score is ${score}.`)