## 7. Function Expression
1. What is a function expression? Give an example.

let wish = function(name) {
    return "Good Morning" + name;
}

console.log(wish("vijay"));

2. Assign a function to a variable and call it.

let greet = function(name) {
    return "Hello" + name;
}

console.log(greet("vijay"));

3. How do function expressions differ from function declarations?

Function stored in a variable is called function expression.

4. Write a function expression that calculates the factorial of a number.

let factorial = function(x) {
    if (x==0) {
        return 1;
    }
    else 
    return x * factorial(x-1);
}

console.log(factorial(5));

5. Can function expressions be anonymous? Show with code.
6. Use a function expression as a callback in an array method.
