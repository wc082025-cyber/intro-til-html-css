// colsole.log is used to print statements to our browsers built in console
// variables, datatypes, arrays (samling av forskjellige datatyper) functions

// javascript data types & variables

/* a for loop is used to "iterate" / loop through all thge values inside
of an objevt
* syntax ; for (let i = 0 ; < jsObject.length; i++) {
*       // expression
* }
*/

// functions

/**
 * prints out a greeting to user
 * @param {*} name name of the person recieving the greeting
 */

export function addnumbers(num1, num2) {
  return num1 + num2;
}

let PersonName = "john doe";

let age = 40;
let occupation = "programming";
let hobbies = ["programming", "gaming", "shopping", "movies"];
let isHappy = true;

console.assert.log(PersonName);

let person = {
  name: PersonName,
  age: age,
  occupation: "programmer",
  hobbies: ["programming", "gaming", "shopping", "movies"],
};

console.log(person);

//funksjon ulike variabler som har ulike datatyper
