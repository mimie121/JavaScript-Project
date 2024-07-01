// IF STATEMENT = If a condition is true,  
//                 execute some code if Not,
//                  do something else...

let age = 20;
let hasLicense = false;

if(age >= 15){
    console.log("You are old enouch to drive!!!");

 if(hasLicense){
    console.log("You have your license!");

 }
 else{
    console.log("You don't have your License yet!");
 }
}

else{
    console.log("You must ve 20+ to have a License!");
}


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement  = document.getElementById("resultElement");

let Age;

mySubmit.onclick = function(){
    Age = myText.value;
    Age = Number(Age);

    if(Age >= 100){
     resultElement.textContent = ("You are TOO OLD to enter this site.");
    }

    else if(Age == 0){
        resultElement.textContent = ("You can't enter this site. You were just born.");
       }
       else if(Age >18){
        resultElement.textContent = ("You are Old Enough to enter this site.");
       }

       else if(Age < 0){
        resultElement.textContent = ("Your age can't be below 0");
       }

       else{
        resultElement.textContent = ("You must be 18+ to enter this site");
       }
}
 