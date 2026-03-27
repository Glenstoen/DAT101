"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let numberText = "";
for (let i = 0; i /*20*/ < numberArray.length; i++) {
  const value = numberArray[i];
  numberText += value.toString() + ", ";
}
printOut(numberText);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part2text = numberArray.join(" * ");
printOut(part2text);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part3Text = "Hello there, how are you?";
const part3Split = part3Text.split(" ");
let part3Text2 = "";
for (let i = 0; i < part3Split.length; i++) {
  const word = part3Split[i];
  part3Text2 += "index: " + i.toString() + "=" + word + newLine;
}
printOut(part3Text2);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeNameFromArray(aArray, aName) {
  let removeIndex = -1;
  for (let i = 0; i < aArray.length; i++) {
    const name = aArray[i];
    if (name === aName) {
      //her kan vi slette elementet "Hilde" f.eks
      //dette gjør vi ikke her!, her løper vi igjennom, og sletter senere.!
      //vi må lagre indexen i en variable for senere bruk.
      removeIndex = i;
    }
  }
  //teste om jeg kan slette
  if (removeIndex >= 0) {
    printOut(aName + " is found and deleted.");
  } else {
    printOut(aName + " is not found!");
  }
}
removeNameFromArray(girls, "Hilde");
printOut(girls);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
const allNames = girls.concat(boys);
printOut(allNames);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class Tbook {
  #title;
  #author;
  #isbn;
  constructor(aTitle, aAuthor, aISBN) {
    this.#title = aTitle;
    this.#author = aAuthor;
    this.#isbn = aISBN;
  }
  toString() {
    return `Title: ${this.#title}, Author: ${this.#author}, ISBN: ${this.#isbn}`;
  }
}

const book1 = new Tbook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
const book2 = new Tbook("To Kill a Mockingbird", "Harper Lee", "9780061120084");
const book3 = new Tbook("1984", "George Orwell", "9780451524935");
const bookArray = [book1, book2, book3];
let part6BookText = "";
for (const book of bookArray) {
  part6BookText += book.toString() + "<br>";
}
printOut(part6BookText);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const EWeekDays = {
  WeekDay1: { value: 0x01, name: "Mandag" },
  WeekDay2: { value: 0x02, name: "Tirsdag" },
  WeekDay3: { value: 0x04, name: "Onsdag" },
  WeekDay4: { value: 0x08, name: "Torsdag" },
  WeekDay5: { value: 0x10, name: "Fredag" },
  WeekDay6: { value: 0x20, name: "Lørdag" },
  WeekDay7: { value: 0x40, name: "Søndag" },
  Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
  Weekends: { value: 0x20 + 0x40, name: "Helg" },
};

const weekDayKeys = Object.keys(EWeekDays);
let part7WeekText = "";
for (const key of weekDayKeys) {
  const day = EWeekDays[key];
  part7WeekText += `${key}: Value = ${day.value}, Name = ${day.name}` + newLine;
}
printOut(part7WeekText);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const randomNumbers = [];
for (let i = 0; i < 35; i++) {
  const randomizer = Math.floor(Math.random() * 20) + 1;
  randomNumbers.push(randomizer);
}
function ascending(t, b) {
  return t - b;
}
function descending(t, b) {
  return b - t;
}
const ascendingNumbers = [...randomNumbers].sort(ascending);
const descendingNumbers = [...randomNumbers].sort(descending);
printOut("Original Array: " + randomNumbers.join(", "));
printOut("Ascending Order: " + ascendingNumbers.join(", "));
printOut("Descending Order: " + descendingNumbers.join(", "));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const rows = 5;
const columns = 9;
const bigArray = [];
for (let i = 0; i < rows; i++) {
  const rArray = [];
  for (let j = 0; j < columns; j++){
    rArray.push(`Row ${i + 1}, Column ${j +1}`);
  }
  bigArray.push(rArray);
}
let part10Text ="";
for(let i = 0; i < rows; i++){
    for(let j = 0; j < columns; j++){
        part10Text += bigArray[i][j] + " | ";
    }
    part10Text += newLine;
}
printOut(part10Text);
printOut(newLine);
