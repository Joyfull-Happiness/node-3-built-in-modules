/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */

//Import the `fs/promises` Node module

import fs from "fs/promises";

//Take user input with `process.argv`
// i did the above for the orderr and the input, because there is a second input i used the number 3 in process.argv
const order = process.argv[2];
const input = process.argv[3];

//Below is the function for getAllOrders
async function getAllOrders() {
  // the readFile method is part of the fs object.
  //below i used `fs.readFile()` to read data from a `data.json` file
  const data = await fs.readFile("./data.json", "utf8");
  console.log("data:", data);

  //below i am parsing the json data into javascript
  const parsedData = JSON.parse(data);
  console.log("parsedData:", parsedData);

  // if the first condition is true loop through every item insde the orders array and print the pizza and note
  //or return back thier input statement checking if the order even exsists
  // if the second condition is true then then print out the corresponding order number
  //if the previous two checks failed please print "order not found" to the conssole.
  if (command === "getAllOrders") {
    // if the user types "getAllOrders", print every order
    orders.forEach((order) => {
      console.log(`${order.pizza} - ${order.note}`);
    });
  } else if (orders[indexInput]) {
    // if there’s an order at that index, print it
    console.log(`${orders[indexInput].pizza} - ${orders[indexInput].note}`);
  } else {
    // if neither condition was true, show an error
    console.log("Order not found. Please enter a valid order number.");
  }
}

//call the function
getAllOrders();
