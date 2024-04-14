function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Fuction to make magicians name:
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names:
var magicians_name = ["Harray poter", "Ilyas", "Usman"];
// Call make_great function to modify magicians names:
var great_magicians = make_great(magicians_name);
// Call show_magicians that show modified list of magicions:
show_magicians(great_magicians);
