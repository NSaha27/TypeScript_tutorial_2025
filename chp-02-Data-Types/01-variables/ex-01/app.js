/*
  -------------------------------
    Variable Declaration
  -------------------------------

  What is a variable?
    A variable is a name storage where we can store values that are required for our program.
*/
var first_name = "Niladri";
var last_name = "Saha";
var age = 32;
var _email = "sahaniladri734@gmail.com";
var phoneNumber = "+918420520384";
var $ctc = 40000;
console.log("Name: ".concat(first_name, " ").concat(last_name, "\nAge: ").concat(age, "\nEmail Id: ").concat(_email, "\nPhone number: ").concat(phoneNumber, "\nCTC (in dollers): ").concat($ctc));
// updating variable values
age = age + 1;
$ctc = $ctc + 2000;
console.log("\nUpdated info:\nName: ".concat(first_name, " ").concat(last_name, "\nAge: ").concat(age, "\nEmail Id: ").concat(_email, "\nPhone number: ").concat(phoneNumber, "\nCTC (in dollers): ").concat($ctc));
// trying to assign values of different data types to a variable
var gotPromotionIn5Years = false;
console.log("\nOld info:\nName: ".concat(first_name, " ").concat(last_name, "\nAge: ").concat(age, "\nEmail Id: ").concat(_email, "\nPhone number: ").concat(phoneNumber, "\nCTC (in dollers): ").concat($ctc, "\nDid get promotion in last 5 years? ").concat(gotPromotionIn5Years));
// making an intentional error by assigning value of another data type
gotPromotionIn5Years = "true";
$ctc = $ctc + "1000";
console.log("\nUpdated info:\nName: ".concat(first_name, " ").concat(last_name, "\nAge: ").concat(age, "\nEmail Id: ").concat(_email, "\nPhone number: ").concat(phoneNumber, "\nCTC (in dollers): ").concat($ctc, "\nDid get promotion in last 5 years? ").concat(gotPromotionIn5Years));
