// While Loop = Repeat some code WHILE some condition is true.

let loggedIn = false;
let UserName;
let password;

while(!loggedIn){
    UserName = window.prompt("Enter Your Username");
    password = window.prompt("Enter Your Password");

    if(UserName === "myUserName" && password === "myPassword"){
        loggedIn = true;
        console.log("You are Logged in!");
    }
    else{
        console.log("Invalid Credentials! Please try again...");
    }
}