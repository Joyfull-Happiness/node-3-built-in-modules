/* -------------------------
💎 Birthstone Finder
----------------------------
We will refactor the Birthstone Finder app to read birthstone data from a separate JSON file.
------------------------- 
we'll practice:
-using a built-in noed module called fs, file system 
-read data from a file 
- practice ES module syntax vs. ComonJS syntax which are both for accessing Node Modules
----------
//two ways for accessing a Node Module
//old way, commonJS
*/
const fs = require("fs");

//new way, ES Modules
import fs from "fs/promises";
console.log(fs);

//Read birthstone data from data.json file, and get the birthstone for the user-inputerd month
function getBirthStone() {
  // the readFile method is part of the fs object.
  // It takes in 2 parameters:
  //1. The File we want to read from
  //2. The way the file is encoded
  const data = fs.readFile("./data.json", "utf8");
}
