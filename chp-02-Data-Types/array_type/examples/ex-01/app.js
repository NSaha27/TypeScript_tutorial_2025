/*
  **********************************
    ARRAY DATATYPE
  **********************************
*/
// we can explicitly mention what type of data an array can have
var clients = ["John Doe", "Will Smith", "Scott Boland"];
var birthYears = [1992, 2002, 1998];
console.log("My clients are : ".concat(clients.join(", ")));
console.log("Their birth years are :\n".concat(clients[0], " was born in ").concat(birthYears[0], "\n").concat(clients[1], " was born in ").concat(birthYears[1], "\n").concat(clients[2], " was born in ").concat(birthYears[2]));
// if after explicitly mentioning datatype of an array we assign a value of different datatype into it, it will return an error
// birthYears.push("2003");  // this will return an error
// to declare an array of multiple datatype values -
var studentMarksIsPassed = [
    "Arnab Roy",
    83,
    true,
    "Tista Dutta",
    89,
    true,
    "Niladri Saha",
    90,
    true,
    "Rajorshi",
    32,
    false,
];
console.log("Student Marks Details:\nStudent 1:\nName: ".concat(studentMarksIsPassed[0], "\nMarks: ").concat(studentMarksIsPassed[1], "\nIs passed: ").concat(studentMarksIsPassed[2], "\n\nStudent 2:\nName: ").concat(studentMarksIsPassed[3], "\nMarks: ").concat(studentMarksIsPassed[4], "\nIs passed: ").concat(studentMarksIsPassed[5], "\n\nStudent 3:\nName: ").concat(studentMarksIsPassed[6], "\nMarks: ").concat(studentMarksIsPassed[7], "\nIs passed: ").concat(studentMarksIsPassed[8], "\n\nStudent 4:\nName: ").concat(studentMarksIsPassed[9], "\nMarks: ").concat(studentMarksIsPassed[10], "\nIs passed: ").concat(studentMarksIsPassed[11], "\n"));
