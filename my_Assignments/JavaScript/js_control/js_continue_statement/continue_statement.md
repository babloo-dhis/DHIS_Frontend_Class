## 2. continue Statement 
1. What is the purpose of the `continue` statement in loops?

To skip an element in the given statementand continue with rest.

2. Write a loop that prints all odd numbers between 1 and 10 using `continue`.

for (i=1; i<=10; i++){
    if((i % 2) == 0) {
        continue;
    }
    console.log(i);
}

3. Use `continue` to skip printing numbers divisible by 3 in a loop.

let j = 1;

while (j <= 30) {
    if ((j % 3) == 0) {
        continue;
    }
    console.log(j);
    j++;
}

4. How does `continue` behave differently in `for` and `while` loops?
5. Refactor a loop to skip empty strings in an array using `continue`.
6. Combine `break` and `continue` in a loop to control flow.
