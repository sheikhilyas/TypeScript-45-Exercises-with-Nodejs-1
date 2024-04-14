// Define a function with a rest parameter that accept item arugments representing our sandwich:
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now Enjoy Sandwich");
}
// Call the function 3 times with 3 diferent number of argumenters:
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Better");
makeSandwich("Bread", "Better", "Chicken", "Cheese", "Mayo", "Egg", "Tomato");
