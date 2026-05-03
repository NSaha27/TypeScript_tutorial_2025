"use strict";
/*
function add(num1: number, num2: number): number {
  return num1 + num2;
}
function subtract(num1: number, num2: number): number {
  let result;
  if (num1 >= num2) {
    result = num1 - num2;
  } else {
    result = Math.abs(num1 - num2);
  }
  return result;
}
function multiply(num1: number, num2: number): number {
  return num1 * num2;
}
function divide(num1: number, num2: number): number {
  return num1 / num2;
}

// calculations
console.log("addition of 12 and 9 is", add(12, 9));
console.log("subtraction of 5 from 25 is", subtract(25, 5));
console.log("subtraction of 17 from 62 is", subtract(17, 62));
console.log("multiplication of 20 and 5 is", multiply(20, 5));
console.log("division of 7.5 from 150 is", divide(150, 7.5));
*/
// working with strings
const users = [];
const user1 = {
    username: "NILADRISAHA",
    first_name: "Niladri",
    last_name: "Saha",
    gender: "male",
    aadhaar: 402372156449,
    phone: "+918420530244",
    email: "niladri.saha31@example.com",
};
const user2 = {
    username: "TISTADUTTA",
    first_name: "Tista",
    last_name: "Dutta",
    gender: "female",
    aadhaar: 843251607946,
    phone: "+919163104196",
    email: "tista.dutta007@example.com",
};
let numOfUsers;
// add user1 to the users list
numOfUsers = users.push(user1);
console.log("The number of users in the list is", numOfUsers);
// add user2 to the users list
numOfUsers = users.push(user2);
console.log("The number of users in the list now is", numOfUsers);
console.log();
console.log(users);
