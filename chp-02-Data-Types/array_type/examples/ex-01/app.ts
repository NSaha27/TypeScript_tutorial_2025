/*
  **********************************
    ARRAY DATATYPE
  **********************************
*/

// we can explicitly mention what type of data an array can have
const clients: string[] = ["John Doe", "Will Smith", "Scott Boland"];

const birthYears: number[] = [1992, 2002, 1998];

console.log(`My clients are : ${clients.join(", ")}`);
console.log(`Their birth years are :
${clients[0]} was born in ${birthYears[0]}
${clients[1]} was born in ${birthYears[1]}
${clients[2]} was born in ${birthYears[2]}`);

// if after explicitly mentioning datatype of an array we assign a value of different datatype into it, it will return an error
// birthYears.push("2003");  // this will return an error

// to declare an array of multiple datatype values -
const studentMarksIsPassed: (string | number | boolean)[] = [
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

console.log(`Student Marks Details:
Student 1:
Name: ${studentMarksIsPassed[0]}
Marks: ${studentMarksIsPassed[1]}
Is passed: ${studentMarksIsPassed[2]}

Student 2:
Name: ${studentMarksIsPassed[3]}
Marks: ${studentMarksIsPassed[4]}
Is passed: ${studentMarksIsPassed[5]}

Student 3:
Name: ${studentMarksIsPassed[6]}
Marks: ${studentMarksIsPassed[7]}
Is passed: ${studentMarksIsPassed[8]}

Student 4:
Name: ${studentMarksIsPassed[9]}
Marks: ${studentMarksIsPassed[10]}
Is passed: ${studentMarksIsPassed[11]}
`);
