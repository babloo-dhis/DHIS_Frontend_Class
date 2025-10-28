## 4. JavaScript Functions
1. Define a function that adds two numbers and returns the result.

function addNumbers(a, b) {
    console.log(a + b);
}

2. What is the difference between a function declaration and a function expression?

function declaration is a independent defined function, while in functiion expression a function is stored in a variable.

3. Write a function to check if a number is even or odd.

function checkNumber(x){
    if ((x%2)== 0){
        console.log("Number is Even");
    }
    else {
        console.log("Number is Odd");
    }

}

4. How do you call a function in JavaScript? Give an example.

function powerNumbers(a, b) {
    console.log(a ** b);
}

//function call
powerNumbers(2, 3)

5. Create a function that prints a greeting message.

function greetReader() {
    console.log("Hello Reader,This is a JavaScript Code! ");
}

6. Explain the concept of function reusability with an example.

It's simply reuse of code many times after creating it once.

function multipleNumbers(a, b) {
    console.log(a * b);
}
Now, we can use function to multiply two numbers as many times as we want without writing code again & again.