function add(num1: number, num2: number): number {
  return num1 + num2;
}

function subtract(num1: number, num2: number): number {
  let result = num1 - num2;
  if (num1 < num2) {
    result = Math.abs(result);
  }
  return result;
}

function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

function divide(dividant: number, divisor: number): number {
  return dividant / divisor;
}

function percentage(num: number, prctg: number) {
  return (num * prctg) / 100;
}

export { add, divide, multiply, percentage, subtract };
