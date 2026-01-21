import birthYr from "./Number.js";
import username from "./String.js";
const uname = username;
const bYr = birthYr;
const curAge = new Date().getFullYear() - (typeof bYr === "number" ? bYr : 1990);
console.log(`Dear ${typeof uname === "string" ? uname : "admin"}, you're ${curAge} years old now!`);
/*
  Note - To compile all the .ts files at the same time,
  - first initialize a .tsconfig file by typing "npx tsc --init" in the terminal and on the same project folder,
  - then configure the .tsconfig file as per your need,
  - then type "tsc" in the terminal to compile all the files at the same time.
*/
