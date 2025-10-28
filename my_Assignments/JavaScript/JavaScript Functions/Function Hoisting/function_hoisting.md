## 12. Function Hoisting
1. What is function hoisting in JavaScript?

It is a situation where we call a function before creating it.

2. Demonstrate function hoisting with a function declaration.

calculate(3, 5, 6, 2, 5, 2)

function calculate(a, b, c, d, e, f){
    console.log(a + b - c * d / e ** f);
}

3. Are function expressions hoisted? Explain with code.

no, as it is declared asa variable.

console.log(add(3, 4))

let add = function(m+n){
    return m+n;
}


4. What happens if you call a function before it is declared?
5. How does hoisting affect variable declarations inside functions?

no, effect it will work as it should by function hoisting rule.

6. Explain the difference between hoisting of `var`, `let`, and `const` in functions.
