//Task 03 : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//lower case :
var personName = "Sheikh Ilyas";
console.log("lowerCase :", personName.toLowerCase());
// for title case: 
console.log("upperCase :", personName.toLocaleUpperCase());
// Title Case :
console.log("titlecase:", personName.replace(/\b w /g, function (c) { return c.toUpperCase(); }));
