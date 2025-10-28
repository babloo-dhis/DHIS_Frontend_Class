## 8. Arrow Function (ES6 Feature)
1. What is an arrow function? Write a simple example.

it is a shorter way to write a function.

let multiple = (n) => n*n;

console.log(multiple(n));

2. Convert a regular function to an arrow function.

function addNumbers(a, b) {
    console.log(a + b);
}

let calculate = (a, b, c) => a+b*c;

console.log(calculate(2, 5, 4));

3. Write an arrow function that adds two numbers.

let add = (a, b) => a+b;

console.log(add(2, 5));


4. How does `this` behave differently in arrow functions?
5. Use an arrow function inside `map` to double array values.
6. Explain the syntax differences between arrow functions and regular functions.

function addNumbers(a, b) {
    console.log(a + b);
}

let calculate = (a, b, c) => a+b*c;

console.log(calculate(2, 5, 4));

3. Write an arrow function that adds two numbers.

let add = (a, b) => a+b;

console.log(add(2, 5));
