// Currying is the process of taking a function with
// multiple arguments and turning it into a sequence of
// functions each with only a single argument.

const unary = (a, b, c) => a + b + c;

console.log(unary(1, 2, 3));

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
const result1 = curryUnaryFunction(1);
console.log(result1(2)(3)); // Output: 6

// Calling curryUnaryFunction with '1' and '2' returns a function: c => 3 + c
const result2 = curryUnaryFunction(1)(2);
console.log(result2(3)); // Output: 6

// Calling curryUnaryFunction with '1', '2', and '3' returns the number 6
const result3 = curryUnaryFunction(1)(2)(3);
console.log(result3); // Output: 6
