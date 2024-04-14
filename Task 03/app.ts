
//Task 03 : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//lower case :

let personName: string = "Sheikh Ilyas"

console.log("lowerCase :", personName.toLowerCase());

// For title case: 

console.log("upperCase :", personName.toLocaleUpperCase());

// Title Case :

console.log("titlecase:", personName.replace(/\b w /g,c => c .toUpperCase()));
