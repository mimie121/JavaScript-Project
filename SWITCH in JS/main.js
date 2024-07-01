//    SWITCH = can be an efficient replacement to many else if statements


let day = 5;

switch(day){
case 1:
    console.log("It's Monday!");
    break;
case 2:
    console.log("It's Tuesday!");
    break;
case 3:
    console.log("It's Wednsday!");
    break;
case 4:
    console.log("It's Thurday!");
    break;
case 5:
    console.log("It's Friday!");
    break;
case 6:
    console.log("It's Saturday!");
    break;
case 7:
    console.log("It's Sunday!");
    break;
    default:
        console.log(`${day} is not a day`);
}


let testscore = 100;
let letterGrade;

switch(true){
  case testscore >= 90:
       letterGrade = "A";
       break;
    case testscore >= 70:
       letterGrade = "  B";
       break;
    case testscore >= 60:
       letterGrade = "C";
       break;
    case testscore >= 50:
       letterGrade = "D";
       break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);