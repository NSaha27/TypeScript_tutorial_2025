function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    let result = num1 - num2;
    if (num1 < num2) {
        result = Math.abs(result);
    }
    return result;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(dividant, divisor) {
    return dividant / divisor;
}
function percentage(num, prctg) {
    return (num * prctg) / 100;
}
export { add, divide, multiply, percentage, subtract };
//# sourceMappingURL=math.js.map