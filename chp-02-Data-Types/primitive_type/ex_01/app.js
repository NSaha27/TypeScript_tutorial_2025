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
var num1 = 28;
var num2 = 31;
console.log("summation is ".concat(num1 + num2));
var price = 56.25;
var discount = 10;
console.log("net amount is Rs.".concat(((price * (100 - discount)) / 100).toFixed(2), "/-"));
// string type data
var email = "niladri.saha31@gmail.com";
var password = "niladri.saha@12345";
if (email === "niladri.saha31@gmail.com" && password === "niladri_saha@12345") {
    console.log("log in successful!");
}
else {
    console.log("invalid login credentials!");
}
// boolean type data
var isAnIndian = true;
var hasVoterID = true;
var hasDrivingLicense = false;
if (isAnIndian && hasVoterID && hasDrivingLicense) {
    console.log("eligible to drive cars in India!");
}
else {
    console.log("non-eligible to drive cars in India!");
}
// null type data
var dramaTitle = null;
var dramaDescription = null;
var dramaDateTime = null;
var dramaParticipants = null;
// dramaTitle = "Ghore o Baire"; // will throw error
// undefined type data
var userName = undefined;
var userPsw = undefined;
userName = "NILADRISAHA"; // unassignable to variable userName as it is of undefined type
userPsw = "niladri.saha@12345"; // unassignable to variable userPsw as it is of undefined type
