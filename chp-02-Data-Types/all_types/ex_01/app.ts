/*
-------------------------------------------------------------------
-------------------------------------------------------------------
NUMBER TYPE - All integers and floating point numbers in typescript
are under this category.
Every number in typescript is considered as a floating point number
and gets stored in the memory as a floating point number.

-------------------------------------------------------------------
-------------------------------------------------------------------
*/

let prodID = 101;
let purchasingYear = 2025;
let price = 1089.78;

// purchasingYear = "2026"; // will throw error (Type 'string' is not assignable to type 'number')
price = 1249.32;

console.log(prodID, typeof prodID);
console.log(purchasingYear, typeof purchasingYear);
console.log(price, typeof price);