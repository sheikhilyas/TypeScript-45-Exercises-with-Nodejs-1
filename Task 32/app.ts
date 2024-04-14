// Array of Current_users:
let current_users = ["Ilyas","Usman","Ismail","Ali","Sunny"]

// Array of New_users:
let new_users = ["Ali","Ayesha","Usman","Sunny","Mahab"]

// loop through new_user to check for usernames avaible: 
new_users.forEach(new_one_users =>{
    
    // Making a candition for username already exist and save in our_condition variable:
    let our_conditons = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_users.toLowerCase())
    
    // Print Different message using If-Else Statements:
    if(our_conditons){
        console.log(`Sorry ${new_one_users} is already taken!`)

    }else{
        console.log(`This Username ${new_one_users} is available`)
    }
})