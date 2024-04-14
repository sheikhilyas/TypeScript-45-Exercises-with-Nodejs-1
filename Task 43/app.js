// Define Fuction to show magicians name: 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Fuction to make magicians name:
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names:
var magicians_name = ["Harray poter", "Ilyas", "Usman"];
// Making a copy of orignal array through.Slice() function:
var copy_magicians_name = magicians_name.slice();
// Modify the copied array to include "The Great" with their names:
var copy_great_magicions = make_great(copy_magicians_name);
// Show both arrays original and Copied:
// Original:
console.log("\nOriginal Arrays\n");
show_magicians(magicians_name);
// Copied:
console.log("\nCopied Arrays\n");
show_magicians(copy_great_magicions);
