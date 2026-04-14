"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const txtRectWidth = document.getElementById("txtRectWidth");
const txtRectHeight = document.getElementById("txtRectHeight");
const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
const txtTask1Output = document.getElementById("txtTask1Output");

function cmbTask1CalculateClick() {
  let width = parseFloat(txtRectWidth.value);
  let height = parseFloat(txtRectHeight.value);

  // Validation
  if (isNaN(width) || isNaN(height)) {
    txtTask1Output.innerHTML = "Please enter valid numbers!";
    return;
  }

  let circumference = 2 * (width + height);
  let area = width * height;

  txtTask1Output.innerHTML = "Circumference = " + circumference + ", Area = " + area;
}

cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const txtTask2Word = document.getElementById("txtTask2Word");
const txtTask2Output = document.getElementById("txtTask2Output");

let task2Words = [];

function txtTask2WordKeyPress(aEvent) {
  if (aEvent.key === "Enter") {
    let word = txtTask2Word.value.trim();

    if (word !== "") {
      task2Words.push(word);
    }

    txtTask2Word.value = "";

    let text = "Number of words = " + task2Words.length + "<br>";

    for (let i = 0; i < task2Words.length; i++) {
      text += i + 1 + ": " + task2Words[i] + "<br>";
    }

    txtTask2Output.innerHTML = text;
  }
}

txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const chkTask3 = document.getElementsByName("chkTask3");
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
const txtTask3Output = document.getElementById("txtTask3Output");

function cmbTask3CheckAnswerClick() {
  txtTask3Output.innerHTML = "";

  for (let i = 0; i < chkTask3.length; i++) {
    const chkBox = chkTask3[i];
    const text = `chkTask3[${i}].checked = ${chkBox.checked}`;
    txtTask3Output.innerHTML += text + "</br>";
  }
}
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function rdbCarNameSelect(aEvent) {
  const txtTask4Output = document.getElementById("txtTask4Output");
  txtTask4Output.innerHTML = `User selected car type number: ${aEvent.target.value}`;
}

const divTask4Cars = document.getElementById("divTask4Cars");

for (let i = 0; i < CarTypes.length; i++) {
  const car = CarTypes[i];
  const inpRadio = document.createElement("input");
  inpRadio.type = "radio";
  inpRadio.name = "rdbCarName";
  inpRadio.value = car.value;
  inpRadio.id = "rbdCarName" + i.toString();
  inpRadio.addEventListener("change", rdbCarNameSelect);

  const lblCaption = document.createElement("label");
  lblCaption.for = inpRadio.id;
  lblCaption.appendChild(document.createTextNode(car.caption));
  divTask4Cars.appendChild(inpRadio);
  divTask4Cars.appendChild(lblCaption);
  divTask4Cars.appendChild(document.createElement("br"));
}

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

function selectTask5AnimalsChange() {
  const animalValue = selectTask5Animals.value;
  txtTask5Output.innerHTML = ` User selected animal nr: ${animalValue}`;
}
selectTask5Animals.addEventListener("change", selectTask5AnimalsChange);

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");
for (let i = 0; i < GirlsNames.length; i++) {
  const option = document.createElement("option");
  option.value = i.toString();
  option.appendChild(document.createTextNode(GirlsNames[i]));
  selectTask6Girls.appendChild(option);
}

function selectGirlsChange() {
  const value = parseInt(selectTask6Girls.value);
  const name = GirlsNames[value];
  txtTask6Output.innerHTML = `You selected: #${value}, ${name}`;
}
selectTask6Girls.addEventListener("change", selectGirlsChange);

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const txtMovieTitle = document.getElementById("txtMovieTitle");
const selectMovieGenre = document.getElementById("selectMovieGenre");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");
const cmbAddMovie = document.getElementById("cmbAddMovie");
const tblMovies = document.getElementById("tblMovies");

for (let i = 0; i < MovieGenre.length; i++) {
  let opt = document.createElement("option");
  opt.value = MovieGenre[i];
  opt.appendChild(document.createTextNode(MovieGenre[i]));
  selectMovieGenre.appendChild(opt);
}

function cmbAddMovieClick() {
  let title = txtMovieTitle.value.trim();
  let genre = selectMovieGenre.value;
  let director = txtMovieDirector.value.trim();
  let rate = txtMovieRate.value;

  if (title === "" || director === "" || rate === "") {
    alert("Please fill out all movie fields.");
    return;
  }

  let newRow = tblMovies.insertRow(-1);
  let movieNumber = tblMovies.rows.length - 1;
  let cellNr = newRow.insertCell(0);
  let cellTitle = newRow.insertCell(1);
  let cellGenre = newRow.insertCell(2);
  let cellDirector = newRow.insertCell(3);
  let cellRate = newRow.insertCell(4);

  cellNr.innerText = movieNumber + ":";
  cellTitle.innerText = title;
  cellGenre.innerText = genre;
  cellDirector.innerText = director;
  cellRate.innerText = rate;

  txtMovieTitle.value = "";
  txtMovieDirector.value = "";
  txtMovieRate.value = "5";
}

cmbAddMovie.addEventListener("click", cmbAddMovieClick);