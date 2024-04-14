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

// Call make_great function to modify magicians names:
let great_magicians = make_great(magicians_name);

// Call show_magicians that show modified list of magicions:
show_magicians(great_magicians);
