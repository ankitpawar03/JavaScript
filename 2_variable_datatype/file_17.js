// nested if else statement or nested conditional statement

// winning number = 19
// 19 your guess is correct
// 20 your guess is too high
// 18 your guess is too low

let winningNumber = 19;

let guessNumber = +prompt("Enter your guess number");

if (guessNumber === winningNumber) {
    console.log("Your guess is correct");
}
else{
    if (guessNumber > winningNumber) {
        console.log("Your guess is too high");
    }else{
        console.log("Your guess is too low");
    }
}
