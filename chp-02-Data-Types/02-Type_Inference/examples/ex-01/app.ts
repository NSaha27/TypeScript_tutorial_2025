/**
 **************************************************
  TYPE INFERENCE
  
  (TS automatically infered the datatype of a variable with the datatype of the value it was initialized with)

 **************************************************
 */

 // Number Type
 let num1: number = 18;
 let num2: number = 12.5;

//  let num3: number = "27"; // will throw an error

// console.log(`sum is : ${num1 + num2}`);
// console.log(`subtraction is : ${num1 - num2}`);

// String Type
let title: string = "TypeScript";
let para1: string = "Hello World!"; // with double quotes
let para2: string = 'Welcome to the world of ${title}.'; // with single quotes. Value of "title" cannot be extracted as the para is not declared with template literal.
let para3: string = `${para1}
${para2}
We are happy to have you here, please go through all the chapters for better understanding of ${title}`; // with template literal. Value of "title" can be extracted

// console.log(para2);
// console.log();
// console.log(para3);

// trying to assign a boolean value to para1 [will throw an error]

// para1 = true;
// console.log(para1);

// DECLARING FUNCTION WITH PARAMETERS (INCLUDING TYPE-INFERENCE) IN TYPESCRIPT

function findSum(p1: number, p2: number){
  return p1 + p2;
}

function findAverage(...args: number[]){
  let sum = 0;
  for(let arg of args){
    sum += arg;
  }
  return sum / args.length;
}

console.log(`summation of 17.68 and 8.32 is : ${findSum(17.68, 8.32)}`);
console.log();
console.log(`Average of 8, 15, 29, 3, 41, 56, 13 is : ${Math.round(findAverage(8,15,29,3,41,56,13))}`);