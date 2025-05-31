"use strict";
/*
  BigInt Data type
  -----------------

*/
const maxSafeInt = Number.MAX_SAFE_INTEGER;
console.log("maximum safe number type integer: " + maxSafeInt);
const x = 9007199254740991n;
const y = 5n;
const z = 6n;
let maxSafeIntAfterAdd = x + y;
let maxSafeIntAfterMoreAdd = maxSafeIntAfterAdd + z;
console.log("maximum safe number after addition: " + maxSafeIntAfterAdd);
