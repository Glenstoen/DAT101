"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 7;
if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
}
else if (wakeUpTime === 8) {
  printOut("I can take the train to school.");
}
else printOut("I have to take the car to school.");
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
 let numberint = 6;
 if (numberint > 0) {
   printOut("Positive.");
  }
  else if (numberint < 0) {
    printOut("Negative.");
  } 
  else {
    printOut("Zero.");
  }
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomNum = Math.floor(Math.random() * 8) + 1;
printOut (randomNum + "MP");
if (randomNum < 4) {
  printOut("The image is too small.");
}
else {
  printOut("Thank you.");
} 
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut (randomNum + "MP");
if (randomNum < 4) {
  printOut("The image is too small.");
}
else if (randomNum >=6) {
  printOut("The image is too large.");
}
else {
  printOut("Thank you.");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
if (monthName.indexOf("r") !== -1) {
  printOut("You must take vitamin D");
}
else {
  printOut("You don't need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
switch (monthName) {
  case "January": printOut("January has 31 days.");
    break;
  case "February": printOut("February has 28 days.");
    break;
  case "March": printOut("March has 31 days.");
    break;
  case "April": printOut("April has 30 days.");
    break;
  case "May": printOut("May has 31 days.");
    break;
  case "June": printOut("June has 30 days.");
    break;
  case "July": printOut("July has 31 days.");
    break;
  case "August": printOut("August has 31 days.");
    break;
  case "September": printOut("September has 30 days.");
    break;
  case "October": printOut("October has 31 days.");
    break;
  case "November": printOut("November has 30 days.");
    break;
  case "December": printOut("December has 31 days.");
    break;
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
switch (monthName) {
  case "January": printOut("Open as usual.");
    break;
  case "February": printOut("Open as usual.");
    break;
  case "March": printOut("Closed for renovation.");
    break;
  case "April": printOut("Temporarily open next door.");
    break;
  case "May": printOut("Closed for renovation.");
    break;
  case "June": printOut("Open as usual.");
    break;
  case "July": printOut("Open as usual.");
    break;
  case "August": printOut("Open as usual.");
    break;
  case "September": printOut("Open as usual.");
    break;
  case "October": printOut("Open as usual.");
    break;
  case "November": printOut("Open as usual.");
    break;
  case "December": printOut("Open as usual.");
    break;
}
printOut(newLine);
