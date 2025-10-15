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
const nok = 76;
const usd = 8.6;
const usdToNokRate = nok / usd;  // NOK per 1 USD
const nokToUsdRate = usd / nok;  // USD per 1 NOK
const usdAmount = 54;
const nokResult = Math.round(usdAmount * usdToNokRate);
// Convert 54 NOK to USD
const nokAmount = 54;
const usdResult = Math.round(nokAmount * nokToUsdRate);
printOut("USD → NOK: $" + usdAmount + " = " + nokResult + " kroner" + " NOK → USD: " + nokAmount + " kroner = $" + usdResult);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "There is much between heaven and earth that we do not understand.";
printOut("The string is " + text.length + " characters long.");
printOut("Character at position 19: " + text.charAt(19));
printOut("Characters from position 35 (8 forward): " + text.substr(35, 8));
printOut("Index of 'earth': " + text.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Is 5 greater than 3? " + (5 > 3));
printOut("is 7 greater than or equal to 7? " + (7 >= 7));
printOut("is 'a' greater than 'b'? " + ("a" > "b"));
printOut("is '1' less than 'a'? " + ("1" < "a"));
printOut("is'2500' less than 'abcd'? " + ("2500" < "abcd"));
printOut("'arne' is not equal to 'thomas': " + ("arne" != "thomas"));
printOut("(2 equals 5) is this statement true? " + (2 === 5));
printOut("('abcd' is greater than 'bcd') is this statement false? " + ("abcd" > "bcd"));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let textnumber1 = "254";
let textnumber2 = "57.23";
let textnumber3 = "25 kroner";
//convert to numbers
let number1 = Number(textnumber1);
let number2 = Number(textnumber2);
let number3 = parseFloat(textnumber3);

printOut("254 as a number: " + number1);
printOut("57.23 as a number: " + number2);
printOut("25 kroner as a number: " + number3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360) + 1;
printOut("random number between 1 and 360: " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totaldays = 131
let weeks = Math.floor(totaldays / 7);
let daysLeft = totaldays % 7;
printOut("131 days are " + weeks + " weeks and " + daysLeft + " days.");
printOut(newLine);