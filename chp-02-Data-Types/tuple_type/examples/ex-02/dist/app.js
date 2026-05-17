"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// declaration of an array
const members = ["Niladri", "Tista", "Arnab", "Mitin", "Sujit"];
members.push("Manas", "Madhuja", "Abhisek"); // Array can grow
console.log(members);
members.splice(3, 2); // Array can shrink
console.log(members);
// declaration of a tuple
const member1 = [
    1,
    "Niladri Saha",
    33,
    "niladri.saha31@gmail.com",
    true,
];
const member2 = [
    2,
    "Tista Dutta",
    30,
    "tista.dutta007@gmail.com",
    false,
];
// trying to add an element to the Tuple
member1.push("Howrah"); // will assign into the Tuple but this is a wrong process
member2.push("Hooghly");
console.log(member1);
console.log(member2);
// Trying to remove an element from a Tuple
member1.splice(4, 1);
member2.splice(4, 1);
console.log(member1);
console.log(member2);
