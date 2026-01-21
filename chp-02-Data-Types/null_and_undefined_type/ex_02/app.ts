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
const username: string | null = "NILADRISAHA31";
const aplName: string | null = "Niladri Saha";
const aplQlf: string | null = "B.Com(Hons.)";
const aplExperience: number | null = 4;
const aplContactNumber: string | null = "8420520344";
const aplContactEmail: string | null = "niladri.saha31@example.com";
const postAlloted: string | null = null;

console.log(`
Details of the applicant:
Username: ${typeof username === "string" ? username.trim() : "N.A."}
Name: ${typeof aplName === "string" ? aplName.trim() : "N.A."}
Qualification: ${typeof aplQlf === "string" ? aplQlf.trim() : "N.A."}
Experience (in years): ${typeof aplExperience === "number" ? aplExperience : 0}
Contact Number: ${typeof aplContactNumber === "string" ? "+91" + aplContactNumber.trim() : "N.A."}
Email ID: ${typeof aplContactEmail === "string" ? aplContactEmail.trim() : "N.A."}
Post alloted: ${typeof postAlloted === "string" ? postAlloted : "No post is alloted yet!"}
`);

// undefined type
let bookName: string | undefined = undefined;
let bookAuthor: string | undefined = undefined;
let bookPublication: string | undefined = undefined;
let bookPubOrReprintYear: number | undefined;
let bookPrice: number | undefined;

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

let eventName;

console.log(typeof eventName);

eventName = null;

console.log(typeof eventName);
