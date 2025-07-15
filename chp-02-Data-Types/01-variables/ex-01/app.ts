/*
  -------------------------------
    Variable Declaration
  -------------------------------

  What is a variable?
    A variable is a name storage where we can store values that are required for our program.
*/

const first_name = "Niladri";
const last_name = "Saha";
let age = 32;
const _email = "sahaniladri734@gmail.com";
const phoneNumber = "+918420520384";
let $ctc = 40000

console.log(`Name: ${first_name} ${last_name}
Age: ${age}
Email Id: ${_email}
Phone number: ${phoneNumber}
CTC (in dollers): ${$ctc}`);

// updating variable values
age = age + 1;
$ctc = $ctc + 2000;

console.log(`\nUpdated info:\nName: ${first_name} ${last_name}
Age: ${age}
Email Id: ${_email}
Phone number: ${phoneNumber}
CTC (in dollers): ${$ctc}`);

// trying to assign values of different data types to a variable
let gotPromotionIn5Years = false;

console.log(`\nOld info:\nName: ${first_name} ${last_name}
Age: ${age}
Email Id: ${_email}
Phone number: ${phoneNumber}
CTC (in dollers): ${$ctc}
Did get promotion in last 5 years? ${gotPromotionIn5Years}`);

// making intentional errors by assigning values of another data types
gotPromotionIn5Years = "true";
$ctc = $ctc + "1000";

console.log(`\nUpdated info:\nName: ${first_name} ${last_name}
Age: ${age}
Email Id: ${_email}
Phone number: ${phoneNumber}
CTC (in dollers): ${$ctc}
Did get promotion in last 5 years? ${gotPromotionIn5Years}`);
