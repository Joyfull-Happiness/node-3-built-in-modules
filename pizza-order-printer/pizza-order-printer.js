/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */

//Import the `fs/promises` Node module

import fs from "fs/promises";

//Take user input with `process.argv`
// i did the above for the order and the input, because there is a second input i used the number 3 in process.argv

const orders = process.argv[2];
console.log("orders:", orders);
const GetOneOrder = process.argv[3];
const command = process.argv[3];

//Below is the function for getAllOrders
async function getOrders() {
  // the readFile method is part of the fs object.
  //below i used `fs.readFile()` to read data from a `data.json` file
  const data = await fs.readFile("./data.json", "utf8");
  console.log("data:", data);

  //below i am parsing the json data into javascript i am defining the async function
  const parsedData = JSON.parse(data);
  console.log("parsedData:", parsedData);

  // if the first condition is true loop through every item insde the orders array and print the pizza and note
  //or return back thier input statement checking if the order even exsists
  // if the second condition is true then then print out the corresponding order number
  //if the previous two checks failed please print "order not found" to the conssole.
  // if the user typed "getAllOrders", print every order
  if (command === "getAllOrders") {
    // loop through every order in the parsedData array
    parsedData.forEach((order) => {
      // print each order's pizza type and note to the console
      //   order.pizza means go inside the object and get the value of the key called pizza, leave a dash in the template literal and then show the note attached to the order
      console.log(`${order.pizza} - ${order.note}`);
    });

    // otherwise, if the user typed a valid order number, print that specific order
  } else if (parsedData[command]) {
    // access that specific order using its array index
    // else if go inside the parsedData array and pick the item at this index according to it's key (.pizza and .note)
    console.log("parsedData[command]:", parsedData[command]);

    // if the user typed something invalid (wrong command or number), show an error
  } else {
    console.log("Order not found. Please enter a valid order number.");
  }
}

//call the function
getOrders();
