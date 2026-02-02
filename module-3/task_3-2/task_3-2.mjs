"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// For loops that counts up to 10 and down to 0. That stores and prints the values in a string
let txtPrintValue= "";
let txtPrintValue2= "";

for (let i=1,j=10;i<=10, j>=1;i++,j--){
    txtPrintValue+=i.toString()+" ";
    txtPrintValue2+=j.toString()+" ";
}

printOut(txtPrintValue+"<br>"+txtPrintValue2);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// To variables that generates a random number between 1 and 60. A while loop that compares the two variables until they are the same. 
// The While loop printed every guess until the correct number is guessed.
let txtPrintValue3= "";
let guessNumberAns= Math.floor(Math.random()*60)+1;
let guessNumberMachine= Math.floor(Math.random()*60)+1;

while(guessNumberMachine!==guessNumberAns){
    guessNumberMachine= Math.floor(Math.random()*60)+1;
    txtPrintValue3+=guessNumberMachine.toString()+" ";
}

printOut("Svaret er: "+guessNumberAns+ "<br> Maskinen gjetter: " +txtPrintValue3);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Similar to part 2.But whit larger range of numbers. 
// The while loop has a counter that counts how many guesses the machine needs to find the correct number. 
// And it measures the time it takes to find the corrects number.

const timeStart= Date.now();
let txtPrintValue4= "";
let guessCount=0;
let guessNumberAns2= Math.floor(Math.random()*1000000)+1;
let guessNumberMachine2= Math.floor(Math.random()*1000000)+1;

while(guessNumberMachine2!==guessNumberAns2){
    guessNumberMachine2= Math.floor(Math.random()*1000000)+1;
    guessCount++;
    txtPrintValue4=guessCount.toString();
}

const timeEnd= Date.now();
const timeUsed= (timeEnd-timeStart);

printOut("Svaret er: "+guessNumberAns2+"<br> Maskinen: "+txtPrintValue4+" ganger for å gjette tallet"+"<br> Maskinen bruker "+ timeUsed+ "ms på å finne svaret.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Checking which numbers between 1-200 is a prime number. Using for and while loops.
//For loop is counting up to 200. And the while loop is checking if the current number in the count is a prime.

let txtPrintValue5= "";

for (let i=1; i<200; i++){
    let j= i-1;
    let isPrime= true;

    while(j>1 && isPrime){
        let rest= i%j;
        isPrime= rest !=0;
        j--;
    }
    if(isPrime){
        txtPrintValue5+= " "+i;
    }
}
printOut("Disse tallene er primtallene mellom 1-200: <br>"+txtPrintValue5);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Using nested for loops to print out a table. Where both loops is counting to different numbers. 
//And said number is used to determent the number of columns and rows for the table.

const pRow=7;
const pColum=9;
let txtPrintValue6="";

for (let i=1;i<=pRow;i++){
    for (let j=1;j<=pColum;j++){
        txtPrintValue6+= " K"+j.toString()+"R"+i.toString();
    }
    txtPrintValue6+="<br>";
}

printOut(txtPrintValue6);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// For loop that picks a random number between 1 and 126. Checks percent of the number. 
// Then runs it thru the different if and else loops. To determine the letter grade.

let txtPrintValue8="";
let gradeR=Math.floor(Math.random()*126+1);
let percent=(gradeR/126)*100;

for (let i=0; i<=5; i++){
    gradeR=Math.floor(Math.random()*236+1);
    percent= Math.floor((gradeR/236)*100);
    if (percent>=89){
        txtPrintValue8+=" Ut av 236 poeng så fikk eleven: "+gradeR.toString()+" , som tilsvarer: "+percent.toString()+ "% , og karakter A";
    }
    else if (percent<=88 && percent>=77){
        txtPrintValue8+=" Ut av 236 poeng så fikk eleven: "+gradeR.toString()+" , som tilsvarer: "+percent.toString()+ "% , og karakter B";
    }
    else if (percent<=76 && percent>=65){
        txtPrintValue8+=" Ut av 236 poeng så fikk eleven: "+gradeR.toString()+" , som tilsvarer: "+percent.toString()+ "% , og karakter C";
    }
    else if (percent<=64 && percent>=53){
        txtPrintValue8+=" Ut av 236 poeng så fikk eleven: "+gradeR.toString()+" , som tilsvarer: "+percent.toString()+ "% , og karakter D";
    }
    else if (percent<=52 && percent>=41){
        txtPrintValue8+=" Ut av 236 poeng så fikk eleven: "+gradeR.toString()+" , som tilsvarer: "+percent.toString()+ "% , og karakter E";
    }
    else {
        txtPrintValue8+=" Ut av 236 poeng så fikk eleven: "+gradeR.toString()+" , som tilsvarer: "+percent.toString()+ "% , og karakter F";
    }
    txtPrintValue8+="<br>";
}

let txtPrintValue11="";
const student=5;
let grade1=Math.round(Math.ceil(Math.random()*236)/236*100);
let grade2=Math.round(Math.ceil(Math.random()*236)/236*100);
let grade3=Math.round(Math.ceil(Math.random()*236)/236*100);
let grade4=Math.round(Math.ceil(Math.random()*236)/236*100);
let grade5=Math.round(Math.ceil(Math.random()*236)/236*100);

if(grade1>=89){
    txtPrintValue11+= "Student 1: "+grade1+ "% - A"+ "<br>";
}
else if (grade1>=77){
    txtPrintValue11+= "Student 1: "+grade1+ "% - B"+ "<br>";
}
else if (grade1>=65){
    txtPrintValue11+= "Student 1: "+grade1+ "% - C"+ "<br>";
}
else if (grade1>=53){
    txtPrintValue11+= "Student 1: "+grade1+ "% - D"+ "<br>";
}
else if (grade1>=41){
    txtPrintValue11+= "Student 1: "+grade1+ "% - E"+ "<br>";
}
else{
    txtPrintValue11+= "Student 1: "+grade1+ "% - F"+ "<br>";
}

if(grade2>=89){
    txtPrintValue11+= "Student 2: "+grade2+ "% - A"+ "<br>";
}
else if (grade2>=77){
    txtPrintValue11+= "Student 2: "+grade2+ "% - B"+ "<br>";
}
else if (grade2>=65){
    txtPrintValue11+= "Student 2: "+grade2+ "% - C"+ "<br>";
}
else if (grade2>=53){
    txtPrintValue11+= "Student 2: "+grade2+ "% - D"+ "<br>";
}
else if (grade2>=41){
    txtPrintValue11+= "Student 2: "+grade2+ "% - E"+ "<br>";
}
else{
    txtPrintValue11+= "Student 2: "+grade2+ "% - F"+ "<br>";
}

if(grade3>=89){
    txtPrintValue11+= "Student 3: "+grade3+ "% - A"+ "<br>";
}
else if (grade3>=77){
    txtPrintValue11+= "Student 3: "+grade3+ "% - B"+ "<br>";
}
else if (grade3>=65){
    txtPrintValue11+= "Student 3: "+grade3+ "% - C"+ "<br>";
}
else if (grade3>=53){
    txtPrintValue11+= "Student 3: "+grade3+ "% - D"+ "<br>";
}
else if (grade3>=41){
    txtPrintValue11+= "Student 3: "+grade3+ "% - E"+ "<br>";
}
else{
    txtPrintValue11+= "Student 3: "+grade3+ "% - F"+ "<br>";
}

if(grade4>=89){
    txtPrintValue11+= "Student 4: "+grade4+ "% - A"+ "<br>";
}
else if (grade4>=77){
    txtPrintValue11+= "Student 4: "+grade4+ "% - B"+ "<br>";
}
else if (grade4>=65){
    txtPrintValue11+= "Student 4: "+grade4+ "% - C"+ "<br>";
}
else if (grade4>=53){
    txtPrintValue11+= "Student 4: "+grade4+ "% - D"+ "<br>";
}
else if (grade4>=41){
    txtPrintValue11+= "Student 4: "+grade4+ "% - E"+ "<br>";
}
else{
    txtPrintValue11+= "Student 4: "+grade4+ "% - F"+ "<br>";
}

if(grade5>=89){
    txtPrintValue11+= "Student 5: "+grade5+ "% - A"+ "<br>";
}
else if (grade5>=77){
    txtPrintValue11+= "Student 5: "+grade5+ "% - B"+ "<br>";
}
else if (grade5>=65){
    txtPrintValue11+= "Student 5: "+grade5+ "% - C"+ "<br>";
}
else if (grade5>=53){
    txtPrintValue11+= "Student 5: "+grade5+ "% - D"+ "<br>";
}
else if (grade5>=41){
    txtPrintValue11+= "Student 5: "+grade5+ "% - E"+ "<br>";
}
else{
    txtPrintValue11+= "Student 5: "+grade5+ "% - F"+ "<br>";
}
/*
for(let i=0; i<student; i++){
    let grade=0;
    switch(i){
        case 1:
            grade = grade1;
            break;
        case 2:
            grade = grade2;
            break;
        case 3:
            grade = grade3;
            break;
        case 4:
            grade = grade4;
            break;
        case 5:
            grade = grade5;
            break;   
    }
    let j=i-1;

    do{
        let gradeCompare= 0;

        j--
    }while(j>0);
}
*/
printOut(txtPrintValue8);
printOut(newLine);
printOut(txtPrintValue11);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Creates a function that takes inn the dice throws and compares it, based on how many unique numbers determend by the number input.
//A do while loop that throws 6 dices and puts it in a variable while converting it to string. Later uses the function in if loop.
//to find the dice combination straight, three pairs, tower and yahtzee.

function matchNumber(aText, aNumber){
  let count = 0;
  for(let i = 0; i < aText.length; i++){
    if(aText.charAt(i) === aNumber.toString()){
      count++;
    }
  }
  return count;
}

let fullStraight=false;
let ThreePairs=false;
let tower=false;
let yahtzee=false;
let straightCount=0;
let ThreePairsCount=0;
let towerCount=0;
let yahtzeeCount=0;
let txt1="";
let txt2="";
let txt3="";
let txt4="";

do{
const d1= Math.ceil(Math.random()*6);
const d2= Math.ceil(Math.random()*6);
const d3= Math.ceil(Math.random()*6);
const d4= Math.ceil(Math.random()*6);
const d5= Math.ceil(Math.random()*6);
const d6= Math.ceil(Math.random()*6);
const t= d1.toString()+d2.toString()+d3.toString()+d4.toString()+d5.toString()+d6.toString();

let c1= matchNumber(t, 1);
let c2= matchNumber(t, 2);
let c3= matchNumber(t, 3);
let c4= matchNumber(t, 4);
let c5= matchNumber(t, 5);
let c6= matchNumber(t, 6);
const t2= c1.toString() + c2.toString() + c3.toString() + c4.toString() + c5.toString() + c6.toString();
const cm1= matchNumber(t2, 1);
const cm6= matchNumber(t2, 6);
const cm3= matchNumber(t2, 2);
const cm4= matchNumber(t2, 4);
const cm2= matchNumber(t2, 2);
if(cm1===6&& !fullStraight){
    fullStraight=true;
    txt1="<br>Full straight: " +t+"<br>Counts: "+ t2;
    //printOut("Full straight: " +t);
    //printOut("Counts: "+ t2);
}
else if(!fullStraight){
    straightCount++
}
if(cm6===1&& !yahtzee){
    yahtzee=true;
    txt2="<br>Yahtzee: "+ t+"<br>Counts: "+ t2;
    //printOut("Yahtzee: "+ t);
    //printOut("Counts: "+ t2);
}
else if(!yahtzee){
    yahtzeeCount++
}
if (cm3===3&& !ThreePairs){
    ThreePairs=true;
    txt3="<br>3 pairs: "+ t+"<br>Counts: "+ t2;
    //printOut("3 pairs: "+ t);
    //printOut("Counts: "+ t2);
}
else if(!ThreePairs){
    ThreePairsCount++
}
if (cm4===1&& cm2===1&& !tower){
    tower=true;
    txt4="<br>Tower: "+ t+"<br>Counts: "+ t2;
    //printOut("Tower: "+ t);
    //printOut("Counts: "+ t2);
}
else if(!tower){
    towerCount++
}
}while(!(fullStraight&&yahtzee&&ThreePairs&&tower))
printOut(txt1+"<br>Full Straight rolled amount: "+ straightCount+txt3+"<br>3 pairs rolled amount: "+ ThreePairsCount+ txt4+"<br>Tower rolled amount: "+ towerCount+ txt2+"<br>Yahtzee rolled amount: "+ yahtzeeCount)
printOut(newLine);