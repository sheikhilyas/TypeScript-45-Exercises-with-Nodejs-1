let guestList = ["Ilyas","Usman","Ismail","Sunny"];

let dontCome = guestList[0];

console.log(dontCome,"Nahi A Skta");

guestList.splice(0, 1,"Amir");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));