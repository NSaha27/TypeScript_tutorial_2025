"use strict";
// example 1 (check if a number is prime or not)
/*
function isPrime(num: number) {
  let prime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime ? `${num} is a prime number` : `${num} is not a prime number`;
}

const num1: number = 25;
const num2: number = 31;

console.log(isPrime(num1));
console.log(isPrime(num2));
*/
// example 2 (find net product amount)
/*
const gst_rate: number = 12;
const discount_rate: number = 20;

function calcNetAmountDiscGst(price: number, discount: number, gst: number) {
  const discAmt = (price * discount) / 100;
  const gstAmt = ((price - discAmt) * gst) / 100;
  const netAmt = price - discAmt + gstAmt;
  return { amount: netAmt, discount: discAmt, gst: gstAmt };
}

const motoG57Price = 20000;
const iphone17Price = 66000;
const iphone17ProPrice = 70000;

const motoG57 = calcNetAmountDiscGst(motoG57Price, discount_rate, gst_rate);
const iphone17 = calcNetAmountDiscGst(iphone17Price, discount_rate, gst_rate);
const iphone17Pro = calcNetAmountDiscGst(
  iphone17ProPrice,
  discount_rate,
  gst_rate,
);

console.log(`Cart details:
  Motorola Moto G57:
    Gross Amt:       Rs. ${motoG57Price}
    Discount (${discount_rate}%):  Rs. ${Math.round(motoG57.discount)}
    GST (${gst_rate}%):       Rs. ${Math.round(motoG57.gst)}
    ----------------------------------
    Net Amt:         Rs. ${Math.round(motoG57.amount)}
    ----------------------------------

  Apple iPhone 17:
    Gross Amt:       Rs. ${iphone17Price}
    Discount (${discount_rate}%):  Rs. ${Math.round(iphone17.discount)}
    GST (${gst_rate}%):       Rs. ${Math.round(iphone17.gst)}
    ----------------------------------
    Net Amt:         Rs. ${Math.round(iphone17.amount)}
    ----------------------------------

  Apple iPhone 17 Pro:
    Gross Amt:       Rs. ${iphone17Price}
    Discount (${discount_rate}%):  Rs. ${Math.round(iphone17Pro.discount)}
    GST (${gst_rate}%):       Rs. ${Math.round(iphone17Pro.gst)}
    ----------------------------------
    Net Amt:         Rs. ${Math.round(iphone17Pro.amount)}
    ----------------------------------
  `);
*/
// octal, hexadecimal, and binary data types
/*
const oct: number = 0o0101;
const hexa: number = 0x17;
const bin: number = 0b1001;

console.log(oct);
console.log(hexa);
console.log(bin);
*/
// type inference (auto type detection)
let num1 = 108;
num1 = 121;
// num1 = "Niladri";
console.log(num1);
