/*
NULL and UNDEFINED DATA TYPES
-----------------------------
we will be convering the following topics
- declaration
- difference between null and undefined data types
- type inference
- type conversion
*/
// null type
var username = "NILADRISAHA31";
var aplName = "Niladri Saha";
var aplQlf = "B.Com(Hons.)";
var aplExperience = 4;
var aplContactNumber = "8420520344";
var aplContactEmail = "niladri.saha31@example.com";
var postAlloted = null;
console.log("\nDetails of the applicant:\nUsername: ".concat(typeof username === "string" ? username.trim() : "N.A.", "\nName: ").concat(typeof aplName === "string" ? aplName.trim() : "N.A.", "\nQualification: ").concat(typeof aplQlf === "string" ? aplQlf.trim() : "N.A.", "\nExperience (in years): ").concat(typeof aplExperience === "number" ? aplExperience : 0, "\nContact Number: ").concat(typeof aplContactNumber === "string" ? "+91" + aplContactNumber.trim() : "N.A.", "\nEmail ID: ").concat(typeof aplContactEmail === "string" ? aplContactEmail.trim() : "N.A.", "\nPost alloted: ").concat(typeof postAlloted === "string" ? postAlloted : "No post is alloted yet!", "\n"));
// undefined type
var bookName = undefined;
var bookAuthor = undefined;
var bookPublication = undefined;
var bookPubOrReprintYear;
var bookPrice;
bookName = "Wings of Fire";
bookAuthor = "Dr. Arun Tiwari";
bookPublication = "Orient Publication";
bookPrice = 349.0;
console.log(typeof bookName, bookName);
console.log(typeof bookAuthor, bookAuthor);
console.log(typeof bookPublication, bookPublication);
console.log(typeof bookPubOrReprintYear, bookPubOrReprintYear);
console.log(typeof bookPrice, bookPrice);
// difference between null and undefined data types
/*
  UNDEFINED - When a variable is initialized without any value assigned to it, "undefined" is the value basically assigned in it. We can assign any type of value in it later. The data type of undefined is "undefined".
  NULL - When a variable is initialized with "null", it means, the variable gets an empty value i.e. "null". The data type of "null" is object.
*/
var eventName;
console.log(typeof eventName);
eventName = null;
console.log(typeof eventName);
