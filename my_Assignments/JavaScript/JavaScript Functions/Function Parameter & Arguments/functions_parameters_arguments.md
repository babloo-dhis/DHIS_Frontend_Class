## 5. Function Parameters and Arguments
1. What are parameters and arguments in functions?

Parameters are variable used during creating fuction which will take values later on function call & Arguments are the values giver during finction call to the variables.

2. Write a function that takes two parameters and multiplies them.

function multipleNumbers(a, b) {
    console.log(a * b);
}

3. How do you pass arguments to a function? Show with code.

function powerNumbers(a, b) {
    console.log(a ** b);
}

//function call & arguments pass
powerNumbers(2, 3)

4. What happens if you call a function with fewer arguments than parameters?

it will show error.

5. Create a function with three parameters and call it with different arguments.

function addNumbers(a, b, c) {
    console.log(a - b*c);
}

//function call
addNumbers(200, 5, 3)

6. Explain the difference between positional and named arguments in JavaScript.
