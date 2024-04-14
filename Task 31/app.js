// Creating a Array with 5 Values:
var userNames = ["Ilyas", "Usman", "Ismail", "Ali", "Sunny"];
// Remove all value from our Array Now our Array is empty:
userNames = [];
// If statement for cheacking lenght of our Array is empty:
if (userNames.length === 0) {
    console.log("Your Array in Empty We need to find some users!");
}
else {
    // If Array is not empty use ForEach loop on Array:
    userNames.forEach(function (oneUser) {
        if (oneUser === "Ismail") {
            console.log("Hello ".concat(oneUser, ",would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
