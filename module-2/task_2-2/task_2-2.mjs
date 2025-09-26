"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(2 + 3 * 2 - 4 * 6);
printOut(2 + 3 * (2 - 4) * 6);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let mm = 1;
let cm = mm*10;
let m = cm*100;
let inch = 2.54*cm;
printOut("25 meters and 34 cm = " +  (25.34 * m / inch).toFixed(2) + " inches")
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let days = 3;
let hrs = 12;
let min = 14;
let sec = 45;
printOut("3 days, 12 hours, 14 minutes and 45 seconds summed up is: " + ((days * 24 * 60) + (hrs * 60) + min + (sec / 60)) + "minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let day = 1*60*60*24;
let hours = 1*60*60;
let minutes = 1*60;
let seconds = 1;
let qtime = 6322.52*60; //converted to seconds
let qtimeDay = Math.floor(qtime / day);
let qtimeHour = Math.floor((qtime % day)/hours);
let qtimeMinute = Math.floor((qtime % hours)/minutes);
let qtimeSecond = Math.floor((qtime % minutes));
printOut("6322.52 minutes are: " + qtimeDay + " days, " + qtimeHour + " hours, " + qtimeMinute + " minutes and " + qtimeSecond + " seconds.");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);