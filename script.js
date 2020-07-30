var userFirstName = prompt("What is your first name?"); // Prompt the user for his/her first name.
var userLastName = prompt("What is your last name?"); // Prompt the user for his/her last name.
var userAge = prompt("What is your age?"); // Prompt the user for his/her age.

typeof userFirstName && typeof userLastName === "string" ? alert("Your full name is " + userFirstName + " " + userLastName + ".") : alert("Your first and last names need to be strings.");
typeof userAge === "number" ? alert("You are " + userAge + " years of age.") : alert("Your age needs to be an integer.");

console.log(returnFullname); // Log the users full name to the console.
console.log(returnAge); // Log the users age to the console.
alert("You have been alive roughly " + userAge * 365 + " days.") // Alert the user of how many days they have been alive.