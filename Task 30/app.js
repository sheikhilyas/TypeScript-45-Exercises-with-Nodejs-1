// Creating a Array:
var userName = ["Ilyas", "Usman", "Ismail", "Ali"];
// Using ForEach loop on Array:
userName.forEach(function (oneUser) {
    if (oneUser === "Ismail") {
        console.log("Hello ".concat(oneUser, ",would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
