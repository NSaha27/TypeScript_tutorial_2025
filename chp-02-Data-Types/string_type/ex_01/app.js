var userID = "NILADRISAHA31";
var userEmail = "sahaniladri31@gmail.com";
var userPsw = "ed36f06da2cfb1010210d323341ae7ef46f53447de09c2bb3307a336fbd2d69a";
console.log("User ID: ".concat(userID, "\nUser Email ID: ").concat(userEmail, "\nUser Password (hashed): ").concat(userPsw));
// let userContact: string = 8420520484; // will throw an error, as 'number' cannot be get assigned to type 'string'
var userContact = "" + 8420520484; // explicit type conversion, from number to string
console.log("User Contact No.: ".concat(userContact));
var hasDrivingLicense = false.toString(); // explicit type convertion, from boolean to string
console.log("Has he a driving license? ".concat(hasDrivingLicense));
