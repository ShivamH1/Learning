const max = prompt("Enter the max number: ");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number?");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("You are right! congrats!!",random);
        break
    }else if(guess < random){
        guess = prompt("hint : your guess is smaller than the number");
    }else if(guess > random){
        guess = prompt("hint : your guess is larger than the number");
    }
    else{
        guess = prompt("Your guess is wrong try again.");
    }
}

// let user = prompt("Enter a number: ");
// let no = Math.floor(Math.random() * user + 1);
// console.log(`The random number generated is : ${no}.`);