//Creating a Array:
var pizza = ["chicken Tika", "Malai cheese", "Fajita"];
// Using For-loop:
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("I like ".concat(onePizza, " pizza"));
}
// Print a message outside of the for-loop:
console.log("Pizza is Love");
console.log("I eat Pizza");
