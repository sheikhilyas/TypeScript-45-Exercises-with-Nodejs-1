// Define Fuction to show magicians name: 
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

// Fuction to make magicians name:
function make_great(magicians:string[]){
return magicians.map(name =>`The Great ${name}`);
}

// Define an array of magicians names:
let magicians_name = ["Harray poter","Ilyas","Usman"];

// Making a copy of orignal array through.Slice() function:
let copy_magicians_name = magicians_name.slice()

// Modify the copied array to include "The Great" with their names:
let copy_great_magicions = make_great(copy_magicians_name);

// Show both arrays original and Copied:

// Original:
console.log("\nOriginal Arrays\n")
show_magicians(magicians_name);

// Copied:
console.log("\nCopied Arrays\n")
show_magicians(copy_great_magicions);
