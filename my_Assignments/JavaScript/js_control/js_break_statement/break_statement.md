
## 1. break Statement
1. What does the `break` statement do in a loop? Give an example.

It breaks the iteration process, when a given condition is meet and stops the loop from completion.

for (i=10; i>=1; i--) {
    if(i==4) {
        break;
    }
    console.log('i = ${i}');
}

2. Write a `for` loop that prints numbers 1 to 10, but stops if the number is 5.

for (j=1; j<=10; j++) {
    if(j==5) {
        break;
    }
    console.log('j = ${j}');
}

3. Use a `while` loop with a `break` statement to exit when a condition is met.

let k = 1;

while(k<=10) {
    if(k==7) {
        break;
    }
    console.log('k = ${k}');
    k++;
}

4. How can `break` be used in a `switch` statement? Provide code.

let subjectName = prompt("Enter subject Name:");

switch (subjectName) {
    case (subjectName == Science):
    remark = "Important";
    break;

    case (subjectName == Maths):
    remark = "Must";
    break;

    case (subjectName == English):
    remark = "Good";
    break;

    case (subjectName ==  Social Science):
    remark = "Just pass";
    break;
}

5. Modify a loop to search for a value in an array and exit when found using `break`.

let num = [1, 2, 3, 4, 5, 6];

for(l=0; l < num.length; l++) {
    if (l == 4) {
        break;
    }
    console.log(l);
}



6. Explain the difference between `break` and `return` in a function.
