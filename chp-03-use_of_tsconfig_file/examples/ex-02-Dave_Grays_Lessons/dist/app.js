"use strict";
let username = "NILADRISAHA";
let fullName = "Niladri Saha";
let age = 32;
let isAdult = age >= 18;
let contactEmail = "niladrisaha32@gmail.com";
let clients = [{ cliName: "Manish Aggarwal", cliContactNo: "+918747923144" }, { cliName: "Anjali Arora", cliContactNo: "+919163431087" }];
// checking whether the conversion is done or not, if there is an error
let hobbies = ["Playing Flute", "Gardening"];
console.log(`Username: ${username}
Full Name: ${fullName}
Age: ${age}
Is adult?: ${isAdult}
Email ID: ${contactEmail}
Clients: ${clients.join(",\n")}
Hobbies: ${hobbies.join(", ")}`);
