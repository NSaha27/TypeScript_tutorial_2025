/*
  NUMBER DATA TYPE
  - declare a number data type variable and use it
  - type inference
  - other data type to number data type conversion
*/

/*
// declare number data type variables and error detection
const prodID: number = 101;
let prodPrice: number = 125.8;
// let discountRate: number = "20"; // will throw a typeError
let discountRate: number = 20;
let taxRate: number = 12.02;

const discount = (prodPrice * discountRate) / 100;
const tax = ((prodPrice - discount) * taxRate) / 100;

console.log(`Product details:
------------------------------------
Product ID:            ${prodID}
------------------------------------

Gross Amt($):          ${prodPrice}
Discount($):        (-)${Math.round(discount)}
Tax($):             (+)${Math.round(tax)}
------------------------------------
Net Amt($) (approx.):  ${Math.round(prodPrice - discount + tax)}
------------------------------------
`);
*/

/*
// type inference (auto type detection)
const num = 52;
const num2 = 17;
const total = num + num2;
console.log(total);
*/

// type conversion
const prodID: number = Number("123");
const isProdVerified: number = Number(true);

console.log(prodID, isProdVerified);
