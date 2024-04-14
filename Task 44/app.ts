// Define a function with a rest parameter that accept item arugments representing our sandwich:
function makeSandwich(...items: string[]){
console.log("\nMaking a sandwich the following items: \n");
items.forEach(singleItem => console.log(singleItem));
console.log("\n Now Enjoy Sandwich");
}

// Call the function 3 times with 3 diferent number of argumenters:
makeSandwich("Chicken","Cheese","Mayo","Egg");

makeSandwich("Bread","Better");

makeSandwich("Bread","Better","Chicken","Cheese","Mayo","Egg","Tomato");

