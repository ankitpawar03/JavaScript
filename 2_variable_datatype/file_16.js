// && and || operator

let firstName = "John";

let age = 18;

if(firstName[0] == "J" && age >= 18){
    //here && is a and operator which checks both the conditions are true or not if both the conditions are true then the if block will be executed otherwise else block will be executed
    console.log("You are eligible to vote");
}else{
    console.log("You are not eligible to vote");
}

if(firstName[0] == "J" || age >= 18){
    //here || is a or operator which checks if any one of the condition is true then the if block will be executed otherwise else block will be executed
    console.log("You are eligible to vote");
}else{
    console.log("You are not eligible to vote");
}