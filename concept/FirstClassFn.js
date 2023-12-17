// A "first-order function" typically refers to a function that takes one or more arguments and returns a value.
// In programming languages like JavaScript, functions are first-class citizens, meaning they can be passed around like any other value.

function add(x, y) {
  return x + y;
}

const result = add(3, 4);
console.log(result);

// In Javascript, functions are first class objects.
// First-class functions means when functions in that
//  language are treated like any other variable.

// For example, in such a language, a function can be passed as an
// argument to other functions, can be returned by another function and can be
// assigned as a value to a variable. For example, in the below example,
// handler functions assigned to a listener

// 1. assigned to variable
const func = function (x) {
  return x * 2;
};
const vale = func(1);
console.log(vale);

// 2. passes as an argu to another function

function a(op, val) {
  return op(val);
}

const results = a(func, 3);

console.log(results);

// 3. Returned from a function
function multiply(factor) {
  return function (x) {
    return x * factor;
  };
}

const double = multiply(9);
const resultes = double(5);

console.log(resultes);

// 4. Stored in data structures
const functionArray = [
  function (x) {
    return x + 1;
  },
  function (x) {
    return x * 2;
  },
];

const result1 = functionArray[0](5);
const result2 = functionArray[1](0);

console.log(result1, result2);
