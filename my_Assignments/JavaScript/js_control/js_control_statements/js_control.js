// alert("Welcome to JavaScript");

// ### 1. If Statement

// **a.** Write a program to check if a number is greater than 100. 

// let num = prompt("Please Enter a Number");

// if (num > 100) {
//     console.log("yes, Given number is greater than 100");
// }

// **b.** Display "Eligible for discount" if a purchase amount is above 500.

// let price = prompt("Please Enter Amount price");

// if (price > 500) {
//     console.log("You are Eligible for Discount!");
// }

// ### 2. If...Else Statement

// **a.** Write a program to check if a person is eligible for driving (age ≥ 18). 

// let personAge = prompt("Please Enter age of person, for eligibility check");

// if (personAge >= 18) {
//     console.log("Person is eligible to drive.");
// } else {
//     console.log("Not, Eligible to Drive");
// }

// **b.** Print "Positive" if a number is greater than zero, otherwise print "Not Positive".

// let num = prompt("Please Enter a number");

// if (num > 0) {
//     console.log("Positive");
// } 
// else {
//     console.log("Not Positive");
// }

// ### 3. If...Else If...Else Statement

// **a.** Print "Positive", "Negative", or "Zero" for a given number.  

let num1 = prompt("Please enter a number");

if (num1 > 0) {
    console.log("Positive");
}
else if (num1 < 0) {
    console.log("Negative");
}
else if (num1 == 0) {
    console.log("Zero");
    //  not working
}
else {
    console.log("Not a valid number");
}

// **b.** Check the grade of a student:
// - If marks ≥ 90: "A"
// - Else if marks ≥ 75: "B"
// - Else if marks ≥ 50: "C"
// - Else: "Fail"

// let marks = prompt("Please Enter your marks");

// if (marks >= 90) {
//     console.log("Your Grade is A");
// }
// else if (marks >= 75) {
//     console.log("Your Grade is B");
// }
// else if (marks >= 50) {
//     console.log("Your Grade is C");
// }
// else {
//     console.log("You are Fail");
// }

// ### 4. Nested If Statement

// **a.** Write a program to check:
// - If age ≥ 18 → print "Adult"
// - Else if age ≥ 13 → print "Teenager"
// - Else → print "Child"

// let age = prompt("Enter your Age");

// if (age >= 18) {
//     console.log("Adult");
// }
// else if (age >= 13) {
//     console.log("Teenager");
// }
// else {
//     console.log("Child");
// }

// **b.** Check if a number is even, and if so, also check if it is greater than 50.

// let num6 = prompt("Please Enter a number");

// let num2 = Number(num6);
// // not working
// if ((num2 % 2) == 0) {
//     console.log("Number is even ");

//     if (num2 > 50) {
//         console.log("Number is greater than 50");
//     }
//     else {
//         console.log("Number is less than 50");
//     }
// }
// else {
//     console.log("Number is Odd");
// }

