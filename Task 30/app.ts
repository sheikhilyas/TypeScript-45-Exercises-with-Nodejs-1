// Creating a Array:
let userName = ["Ilyas","Usman","Ismail","Ali"];

// Using ForEach loop on Array:
userName.forEach(oneUser =>{
    if(oneUser === "Ismail"){
        console.log(`Hello ${oneUser},would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
});
