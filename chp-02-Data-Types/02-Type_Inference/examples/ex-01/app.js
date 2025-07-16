/**
 **************************************************
  TYPE INFERENCE
  
  (TS automatically infered the datatype of a variable with the datatype of the value it was initialized with)

 **************************************************
 */
// Number Type
var num1 = 18;
var num2 = 12.5;
//  let num3: number = "27"; // will throw an error
// console.log(`sum is : ${num1 + num2}`);
// console.log(`subtraction is : ${num1 - num2}`);
// String Type
var title = "TypeScript";
var para1 = "Hello World!"; // with double quotes
var para2 = 'Welcome to the world of ${title}.'; // with single quotes. Value of "title" cannot be extracted as the para is not declared with template literal.
var para3 = "".concat(para1, "\n").concat(para2, "\nWe are happy to have you here, please go through all the chapters for better understanding of ").concat(title); // with template literal. Value of "title" can be extracted
// console.log(para2);
// console.log();
// console.log(para3);
// trying to assign a boolean value to para1 [will throw an error]
// para1 = true;
// console.log(para1);
// DECLARING FUNCTION WITH PARAMETERS (INCLUDING TYPE-INFERENCE) IN TYPESCRIPT
function findSum(p1, p2) {
    return p1 + p2;
}
function findAverage() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        sum += arg;
    }
    return sum / args.length;
}
console.log("summation of 17.68 and 8.32 is : ".concat(findSum(17.68, 8.32)));
console.log();
console.log("Average of 8, 15, 29, 3, 41, 56, 13 is : ".concat(Math.round(findAverage(8, 15, 29, 3, 41, 56, 13))));
