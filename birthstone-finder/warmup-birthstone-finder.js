/* -------------------------
💎 Birthstone Finder
----------------------------
Create a program that determines the birthstone for a month inputted by the user. 

Check the README.md file for instructions.
------------------------- */

// birthstone data object
const birthstones = {
  January: "Garnet",
  February: "Amethyst",
  March: "Aquamarine",
  April: "Diamond",
  May: "Emerald",
  June: "Pearl, Alexandrite, or Moonstone",
  July: "Ruby",
  August: "Peridot",
  September: "Sapphire",
  October: "Opal or Tourmaline",
  November: "Topaz or Citrine",
  December: "Tanzanite, Zircon, or Turquoise",
};

//Your task: Make a dog age calculator with Node.js!
//Follow the instructions in the README.md file in this repo.

//Run this file with the node command:
//node dogAgeCalculator.js

console.log(process.argv);

// name
const userMonth = process.argv[2];

// Check if the inputted month is valid and exists in the `birthstones` data object included in the code file
// - If the month is invalid, output an error message:

// Invalid month. Please enter a valid month.

// - If the month is valid, output a console.log() message that says the month's birthstone:

//  The birthstone for January is Garnet.

//RESULTS BELOW
if (!birthstones[userMonth]) {
  console.log("Invalid month. Please enter a valid month.");
} else {
  console.log(`The birthstone for ${userMonth} is ${birthstones[userMonth]}.`);
}
