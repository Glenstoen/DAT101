"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let numberText = "";
for (let i = 0; i /*20*/ <numberArray.length; i++){
    const value = numberArray[i];
    numberText += value.toString() + ", ";
}
printOut(numberText);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part2text = numberArray.join (" * ")
printOut(part2text);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Text = "Hello there, how are you?";
const part3Split = part3Text.split(" ");
let part3Text2 = "";
for ( let i = 0; i <part3Split.length; i++){
    const word = part3Split[i];
    part3Text2 += "index: " +i.toString() + "=" + word + newLine;
} 
printOut(part3Text2);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"]

function removeNameFromArray(aArray, aName){
    let removeIndex = -1;
    for(let i = 0; i < aArray.length; i++){
        const name = aArray[i];
        if(name === aName){
            //her kan vi slette elementet "Hilde" f.eks
            //dette gjør vi ikke her!, her løper vi igjennom, og sletter senere.!
            //vi må lagre indexen i en variable for senere bruk.
            removeIndex = i;
        }
    }
    //teste om jeg kan slette
    if(removeIndex >= 0){
        printOut(aName + " is found and deleted.")
    }else{
        printOut(aName + " is not found!");
    }
}
removeNameFromArray(girls, "Hilde")
printOut(girls);
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
