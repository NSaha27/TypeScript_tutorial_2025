import { add, divide, multiply, percentage, subtract } from "./math.js";
// performing add, subtract, and multiply
const num1 = 19;
const num2 = 81;
console.log(`the result of addition of ${num1} and ${num2} is`, add(num1, num2));
console.log(`the result of subtraction of ${num1} from ${num2} is`, subtract(num1, num2));
console.log(`the result of multiplication between ${num1} and ${num2} is`, multiply(num1, num2));
const num3 = 512;
const num4 = 16;
console.log(`the result of division of ${num3} by ${num4} is ${divide(num3, num4)}`);
const num5 = 25;
console.log(`the result of ${num5}% of ${num3} is ${percentage(num3, num5)}`);
//# sourceMappingURL=app.js.map