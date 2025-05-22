let userID: string = "NILADRISAHA31";
let userEmail: string = "sahaniladri31@gmail.com";
let userPsw: string =
  "ed36f06da2cfb1010210d323341ae7ef46f53447de09c2bb3307a336fbd2d69a";

console.log(`User ID: ${userID}
User Email ID: ${userEmail}
User Password (hashed): ${userPsw}`);

// let userContact: string = 8420520484; // will throw an error, as 'number' cannot be get assigned to type 'string'
let userContact: string = "" + 8420520484; // explicit type conversion, from number to string
console.log(`User Contact No.: ${userContact}`);

let hasDrivingLicense: string = false.toString(); // explicit type convertion, from boolean to string
console.log(`Has he a driving license? ${hasDrivingLicense}`);
