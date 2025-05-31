/*
  BigInt Data type
  -----------------

*/

const maxSafeInt: number = Number.MAX_SAFE_INTEGER;
console.log("maximum safe number type integer: " + maxSafeInt);

const x: bigint = 9007199254740991n;
const y: bigint = 5n;
const z: bigint = 6n;

let maxSafeIntAfterAdd: bigint = x + y;
let maxSafeIntAfterMoreAdd: bigint = maxSafeIntAfterAdd + z;

console.log("maximum safe number after addition: " + maxSafeIntAfterAdd);
