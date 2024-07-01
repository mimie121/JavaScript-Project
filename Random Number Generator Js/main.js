const Button = document.getElementById("roll");
const Labell = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");
const Label4 = document.getElementById("Label4");

const min = 1;
const max = 8;
let randomNum1;
let randomNum2;
let randomNum3;
let randomNum4;

Button.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    // randomNum1 = ma
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    randomNum4 = Math.floor(Math.random() * max) + min;
    Labell.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
    Label4.textContent = randomNum4;
}

