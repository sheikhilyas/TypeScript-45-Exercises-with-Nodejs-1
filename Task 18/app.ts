// Making a Array of Countries and Print its Orginal order:
let counttiesToVisit: String[]=["china","Denmark","Brazil","Argentina"];
console.log("orginal order:", counttiesToVisit);

//Print the Array in Alphabettical order without modifying the Actual Array List:
console.log("Alphabetical order:",[...counttiesToVisit].reverse());

//Show that the array is still in its orginal order:
console.log ("Still in Orginal order:", counttiesToVisit);

//Print the Array in Reversed order without modifying the Actual Array List:
console.log ("Reverse order", [...counttiesToVisit].reverse());

//Show that the arrayis still in its orignal order:
console.log ("Still in Orginal order:", counttiesToVisit);

// We have changed the original Array order Now:
console.log("original Array Reversed:",counttiesToVisit.reverse());

// Print the array to show that it's orginal order:
console .log("Back to orginal order:",counttiesToVisit.reverse());

// Print the Array to Show that its order has been changed in Alphabetical order now:
console.log("Sorted in Alphabetical order:", counttiesToVisit.sort());

// We have changed again the original Array order Now in reverse order again:
console.log("original Array Reversed Again:",counttiesToVisit.reverse());
