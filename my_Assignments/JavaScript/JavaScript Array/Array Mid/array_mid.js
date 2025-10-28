// 1. Create an array of 10 numbers and print only the even numbers.
let arr = [12, 7, 9, 4, 22, 15, 8, 33, 50, 3];
console.log("Even numbers:", arr.filter(num => num % 2 === 0));

// 2. Function to return sum of all elements.
function sumArray(array) {
  return array.reduce((sum, num) => sum + num, 0);
}
console.log("Sum:", sumArray(arr));

// 3. Find the largest number.
console.log("Largest:", Math.max(...arr));

// 4. Find the smallest number.
console.log("Smallest:", Math.min(...arr));

// 5. Reverse array without reverse().
let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) reversed.push(arr[i]);
console.log("Reversed:", reversed);

// 6. Remove duplicate values.
let withDuplicates = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(withDuplicates)];
console.log("Unique values:", unique);

// 7. Function to check if value exists.
function exists(array, value) {
  return array.includes(value);
}
console.log("Exists (22):", exists(arr, 22));

// 8. Count occurrences of a value.
function countOccurrences(array, value) {
  return array.filter(v => v === value).length;
}
console.log("Occurrences of 4:", countOccurrences(withDuplicates, 4));

// 9. Merge two arrays.
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let merged = a1.concat(a2);
console.log("Merged:", merged);

// 10. Sort ascending.
console.log("Ascending:", [...arr].sort((a, b) => a - b));

// 11. Sort descending.
console.log("Descending:", [...arr].sort((a, b) => b - a));

// 12. Find index of a value.
console.log("Index of 15:", arr.indexOf(15));

// 13. Replace negative numbers with zero.
let withNeg = [5, -2, 10, -8, 7];
let replaced = withNeg.map(num => num < 0 ? 0 : num);
console.log("No negatives:", replaced);

// 14. Filter out numbers > 50.
function filterGreaterThan50(array) {
  return array.filter(num => num <= 50);
}
console.log("<= 50:", filterGreaterThan50(arr));

// 15. Print strings starting with 'A'.
let strArr = ["Apple", "Banana", "Avocado", "Cherry", "Apricot"];
console.log("Starts with A:", strArr.filter(s => s.startsWith('A')));

// 16. Find average.
function average(array) {
  return sumArray(array) / array.length;
}
console.log("Average:", average(arr));

// 17. Remove last element.
let arr17 = [...arr];
arr17.pop();
console.log("After pop:", arr17);

// 18. Remove first element.
let arr18 = [...arr];
arr18.shift();
console.log("After shift:", arr18);

// 19. Insert element at beginning.
let arr19 = [...arr];
arr19.unshift(99);
console.log("After unshift:", arr19);

// 20. Insert element at end.
let arr20 = [...arr];
arr20.push(100);
console.log("After push:", arr20);

// 21. Split array into two halves.
function splitArray(array) {
  let mid = Math.ceil(array.length / 2);
  return [array.slice(0, mid), array.slice(mid)];
}
console.log("Split:", splitArray(arr));

// 22. Find second largest number.
let sortedDesc = [...new Set(arr)].sort((a, b) => b - a);
console.log("2nd largest:", sortedDesc[1]);

// 23. Find second smallest number.
let sortedAsc = [...new Set(arr)].sort((a, b) => a - b);
console.log("2nd smallest:", sortedAsc[1]);

// 24. Rotate array right by one.
function rotateRight(array) {
  let last = array.pop();
  array.unshift(last);
  return array;
}
console.log("Rotate right:", rotateRight([...arr]));

// 25. Rotate array left by one.
function rotateLeft(array) {
  let first = array.shift();
  array.push(first);
  return array;
}
console.log("Rotate left:", rotateLeft([...arr]));

// 26. Find all pairs whose sum = given number.
function findPairs(array, target) {
  let pairs = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) pairs.push([array[i], array[j]]);
    }
  }
  return pairs;
}
console.log("Pairs sum = 26:", findPairs(arr, 26));

// 27. Remove all falsy values.
function removeFalsy(array) {
  return array.filter(Boolean);
}
console.log("No falsy:", removeFalsy([0, 1, false, 2, '', 3, null, undefined, NaN]));

// 28. Flatten one-level nested array.
function flatten(array) {
  return [].concat(...array);
}
console.log("Flatten:", flatten([[1, 2], [3, 4], [5]]));

// 29. Intersection of two arrays.
function intersection(a, b) {
  return a.filter(x => b.includes(x));
}
console.log("Intersection:", intersection([1, 2, 3, 4], [3, 4, 5, 6]));

// 30. Union of two arrays.
function union(a, b) {
  return [...new Set([...a, ...b])];
}
console.log("Union:", union([1, 2, 3], [3, 4, 5]));
