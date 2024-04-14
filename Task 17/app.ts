//Creating a Guest List Array:
let guestList = ["Ilyas","Usman","Ismail","Sunny"];

// Making variable for those guest who cant come:
let dontCome = guestList[0];

// Print the name of guest who cant come:
console.log(dontCome,"Nahi A Sakty Han");

// Add oe Remove Value From Guest List Array:
guestList.splice(0, 1, "Amir");

//Message Print for Bigger Table:
console.log(" Good News ! We have Found a Bigger Table for Dinner");

//Adding a new value at starting index of Array:
guestList.unshift("Ali");

//Adding a new value atbending index of array:
guestList.push("Zain");

//Get a middle index of our guest list array:
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array:
guestList.splice(middleIndex, 0, "Osama");

// Print Message of Update List:
console.log("Updated List of our Guest");

//Sending a invitation message to our guest one by one with their names: 
guestList.forEach(oneguest => console.log(`Salam ${oneguest},would you like to dinner with me`));

//Inform That only two guest can be invited for dinner:
console.log("Unfortunately,the new dinner table wont arrive on time,so I can only invite two Guest to dinner with me");

//Using while-loop to remove guest from the array until only two names remain:
while(guestList.length > 2){
    let removedGest = guestList.pop();
    console.log(`Sorry, ${removedGest} I cant invite you to dinner`);
}

//Sending a invitations to the last two guest on the list:
console.log("Invitation to the last 2 Guest");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

//Removing last two Guest from the list:
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);