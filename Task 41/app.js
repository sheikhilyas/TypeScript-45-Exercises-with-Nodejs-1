// Define a function to print each magician name from an array:
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Define an array containing magicians name:
var magician_name = ["Harry Poter", "Hamza", "Usman"];
// Call the function to print each magician name:
show_magicians(magician_name);
