/* -------------------------
💎 Birthstone Finder
----------------------------
We will refactor the Birthstone Finder app to read birthstone data from a separate JSON file.
------------------------- 
we'll practice:
-using a built-in noed module called fs, file system 
-read data from a file the fs.readFile() method 
- practice ES module syntax vs. ComonJS syntax which are both for accessing Node Modules
----------
//two ways for accessing a Node Module
//old way, commonJS
*/
//const fs = require("fs");

//new way, ES Modules
import fs from "fs/promises";
const month = process.argv[2];

//Read birthstone data from data.json file, and get the birthstone for the user-inputerd month
async function getBirthStone() {
  // the readFile method is part of the fs object.
  // It takes in 2 parameters:
  //1. The File we want to read from
  //2. The way the file is encoded
  const data = await fs.readFile("./data.json", "utf8");
  console.log("data:", data);

  //we need to parse the json data into javascript
  const parsedData = JSON.parse(data);
  console.log("parsedData:", parsedData);

  //if birth month = userinput, then console.log that

  if (!birthstones[userMonth]) {
    console.log("Invalid month. Please enter a valid month.");
  } else {
    console.log(
      `The birthstone for ${userMonth} is ${birthstones[userMonth]}.`
    );
  }
  //Arrianna's version:
  /*
  parsedData[month]
    ? console.log(`The birthstone for ${month} is ${parsedData[month]}`)
    : console.log("Invalid month. Please enter a valid month name."); 
    */
}
//call function
getBirthStone();
