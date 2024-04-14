var guestList = ["Ilyas", "Usman", "Ismail", "Sunny"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi A Skta");
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
