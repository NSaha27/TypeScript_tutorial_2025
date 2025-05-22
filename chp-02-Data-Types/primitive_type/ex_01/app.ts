/*
  Data Types
  ---------------------------------------------------------------------
  number - Any interger or float value
  string - Any text value
  boolean - Either true or false value
  null - empty value i.e. no value at all
  undefined - has a value which is yet to be defined or uninitialized value
  bigint - has a value greater than number type value
  symbol - have unique memory addresses whether have same values or not
*/

// number type data
const num1: number = 28;
const num2: number = 31;

console.log(`summation is ${num1 + num2}`);

const price: number = 56.25;
const discount: number = 10;

console.log(
  `net amount is Rs.${((price * (100 - discount)) / 100).toFixed(2)}/-`
);

// string type data
const email: string = "niladri.saha31@gmail.com";
const password: string = "niladri.saha@12345";

if (email === "niladri.saha31@gmail.com" && password === "niladri_saha@12345") {
  console.log("log in successful!");
} else {
  console.log("invalid login credentials!");
}

// boolean type data
const isAnIndian: boolean = true;
const hasVoterID: boolean = true;
const hasDrivingLicense: boolean = false;

if (isAnIndian && hasVoterID && hasDrivingLicense) {
  console.log("eligible to drive cars in India!");
} else {
  console.log("non-eligible to drive cars in India!");
}

// null type data
let dramaTitle: null = null;
let dramaDescription: null = null;
let dramaDateTime: null = null;
let dramaParticipants: null = null;

// dramaTitle = "Ghore o Baire"; // will throw error

// undefined type data
let userName: undefined = undefined;
let userPsw: undefined = undefined;

userName = "NILADRISAHA"; // unassignable to variable userName as it is of undefined type
userPsw = "niladri.saha@12345"; // unassignable to variable userPsw as it is of undefined type
