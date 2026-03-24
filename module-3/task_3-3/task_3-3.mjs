"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function to get and print today's date in Norwegian format

function tid() {
  const event = new Date();
  const option = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const dateNorwegian = event.toLocaleDateString("no-NB", option);
  printOut(`Dagens dato: ${dateNorwegian}`);
  return event;
}

tid();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function to calculate days until a specific GTA 6 releases

function tid2() {
  const today = new Date();
  const option = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const dateNorwegian = today.toLocaleDateString("no-NB", option);
  printOut(`Dagens dato: ${dateNorwegian}`);
  return today;
}

function tidDiff(aTodayDate) {
  const eventDate = new Date(2026, 11, 19, 12, 56);
  const diffTime = eventDate - aTodayDate;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  printOut(`Det er ${diffDays} dager igjen til GTA 6 slippes ut!`);
}

const todayDate = tid2();
tidDiff(todayDate);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function to calculate circle properties based on a random radius

function circle(aRadius) {
  const diameterValue = aRadius * 2;
  const circumferenceValue = 2 * Math.PI * aRadius;
  const areaValue = Math.PI * aRadius * aRadius;

  printOut(`For en sirkel med radius ${aRadius}:`);
  printOut(`Diameter: ${diameterValue}`);
  printOut(`Omkrets: ${circumferenceValue.toFixed(2)}`);
  printOut(`Areal: ${areaValue.toFixed(2)}`);
}

circle(Math.random() * 67 + 1);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function to calculate rectangle properties based on random length and width

function rectangle(aLength, aWidth) {
  const perimeterValue = 2 * (aLength + aWidth);
  const areaValue = aLength * aWidth;

  printOut(`For et rektangel med lengde ${aLength} og bredde ${aWidth} blir:`);
  printOut(`Omkrets: ${perimeterValue}`);
  printOut(`Areal: ${areaValue}`);
}

rectangle(Math.random() * 34 + 1, Math.random() * 54 + 1);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function that takes inn temp and temperature type and converts it to two other types and prints it out

function convertTemperature(aTemp, aTempTypes) {
  switch (aTempTypes) {
    case "kelvin":
      const tKelvin = aTemp;
      const kFahrenheit = ((tKelvin - 273.15) * 9) / 5 + 32;
      const kCelsius = tKelvin - 273.15;
      printOut(`Converting Kelvin: ${tKelvin}<br>Celsius: ${kCelsius}<br>Fahrenheit: ${kFahrenheit}<br>`);
      break;

    case "celsius":
      const tCelsius = aTemp;
      const cKelvin = tCelsius + 273.15;
      const cFahrenheit = tCelsius * 1.8 + 32;
      printOut(`Converting Celsius: ${tCelsius}<br>Fahrenheit: ${cFahrenheit}<br>Kelvin: ${cKelvin}<br>`);
      break;
    case "fahrenheit":
      const tFahrenheit = aTemp;
      const fCelsius = (tFahrenheit - 32) / 1.8;
      const fKelvin = (tFahrenheit + 459.67) * (5 / 9);
      printOut(`Converting Fahrenheit: ${tFahrenheit}<br>Celsius: ${fCelsius}<br>Kelvin: ${fKelvin}<br>`);
      break;
  }
}

convertTemperature(47, "kelvin");
convertTemperature(47, "celsius");
convertTemperature(47, "fahrenheit");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function vatCalc(aAmount, aType) {
  const amount = aAmount;
  let text = aType;
  let lCase = text.toLowerCase();

  let discountAmount = "";
  let wVatPrice = "";

  switch (lCase) {
    case "normal":
      discountAmount = amount * (25 / 100);
      wVatPrice = amount - discountAmount;
      printOut(`<br>Normal price with VAT: ${amount}<br>Price without VAT: ${wVatPrice}`);
      break;
    case "food":
      discountAmount = amount * (15 / 100);
      wVatPrice = amount - discountAmount;
      printOut(`<br>Food price with VAT: ${amount}<br>Price without VAT: ${wVatPrice}`);
      break;
    case "hotel" || "transport" || "cinema":
      discountAmount = amount * (10 / 100);
      wVatPrice = amount - discountAmount;
      printOut(`<br>Hotel, Transport, Cinema price with VAT: ${amount}<br>Price without VAT: ${wVatPrice}`);
      break;
    default:
      printOut("<br>Unknown VAT group!");
      break;
  }
}

vatCalc(100, "norMal");
vatCalc(150, "FOOD");
vatCalc(5498, "hotEL");
vatCalc(100, "BoOkS");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function Part7CalculateSpeedDistanceTime(aDistance, aTime, aSpeed) {
  let missingCount = 0;

  // Check how many parameters are missing
  if (aDistance === null) {
    missingCount++;
  }

  if (aTime === null) {
    missingCount++;
  }

  if (aSpeed === null) {
    missingCount++;
  }

  // If more than one parameter is missing, return NaN
  if (missingCount > 1) {
    printOut("Error: More than one parameter is missing!");
    return NaN;
  }

  // Calculate speed
  if (aSpeed === null) {
    if (!aTime || aTime === 0 || !aDistance) {
      printOut("Error: Time or Distance cannot be zero or null when calculating speed!");
      return NaN;
    }

    aSpeed = aDistance / aTime;
    printOut(`Calculated Speed: ${aSpeed.toFixed(2)} units/time`);
    return aSpeed;
  }

  // Calculate time
  if (aTime === null) {
    if (!aSpeed || aSpeed === 0 || !aDistance) {
      printOut("Error: Speed or Distance cannot be zero or null when calculating time!");
      return NaN;
    }

    aTime = aDistance / aSpeed;
    printOut(`Calculated Time: ${aTime.toFixed(2)} time units`);
    return aTime;
  }

  // Calculate distance
  if (aDistance === null) {
    if (!aSpeed || !aTime) {
      printOut("Error: Speed or Time cannot be zero or null when calculating distance!");
      return NaN;
    }

    aDistance = aSpeed * aTime;
    printOut(`Calculated Distance: ${aDistance.toFixed(2)} units`);
    return aDistance;
  }

  printOut("Error: Nothing to calculate.");
  return NaN;
}

// Tests
Part7CalculateSpeedDistanceTime(100, 2, null);     // Speed = 50
Part7CalculateSpeedDistanceTime(100, null, 50);    // Time = 2
Part7CalculateSpeedDistanceTime(null, 2, 50);      // Distance = 100
Part7CalculateSpeedDistanceTime(null, null, 50);   // Error
Part7CalculateSpeedDistanceTime(100, 0, null);     // Error
Part7CalculateSpeedDistanceTime(0, 2, null);       // Error

printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function Part8FillString(aText, aMaxsize, aChar, aInsertAtEnd) {
    let fixedText = aText;
    let length = aText.length;
    while (length < aMaxsize) {
        if (aInsertAtEnd) {
            fixedText += aChar;
        } else {
            fixedText = aChar + fixedText;
        }
        length++;
    }
    printOut(`Adjusted string: "${fixedText}"`);
    return fixedText;
}
Part8FillString("hello", 30, "#", true);
Part8FillString("world", 25, "*", false);
printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function Part9Calculate(aLines) {
    let currentNumber =1;
    for (let line =1; line <= aLines; line++) {
      let leftSum = 0;
      let rightSum = 0;
      // Calculate left side.
      for (let i = 0; i < line + 1; i++) {
        leftSum += currentNumber++;
      }
      // Calculate Right Side.
      for (let i = 0; i < line; i++) {
        rightSum += currentNumber++;
      }
      if (leftSum !== rightSum) {
        printOut(`Test failed at line ${line}: Left sum: (${leftSum}) != Right sum (${rightSum})`);
        return;
      }
    }
    printOut("Math is fun!");
}

Part9Calculate(200)
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Takes inn a number and calculates the corresponding factorial of said number
function factorial(aNumber = 0) {
  let result = 1;
  for (let i = 1; i <= aNumber; i++) {
    result *= i;
  }
  printOut(`${aNumber}! = ${result}`);
}

factorial(5);

printOut(newLine);