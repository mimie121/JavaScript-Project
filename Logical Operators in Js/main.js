//  Logical Operators = Used to combine or manipulate boolean vlaues
                            // (True/False)
                            
                        //   AND = && 
                            // OR = ||
                            // NOT = !
            
const temp1 = 50;

// This condition has to be true to execute the code.....&& It check to see if 2 condition are true

if(temp1 > 0 && temp1 <= 30){
    console.log("The Weather is GOOD");
}

else{
    console.log("The Weather is BAD");
}

const temp = 20;

// One of the condition  has to be True

if(temp <= 0 || temp > 30){
    console.log("The Weather is BAD");
}

else{
    console.log("The Weather is GOOD");
}

const isSunny = false;

if(!isSunny){
    console.log("It's CLOUDY!");
}

else{
    console.log("It's SUNNY!");
}