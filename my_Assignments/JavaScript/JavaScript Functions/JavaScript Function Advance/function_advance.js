// ### 1. **String Character Frequency**
// Write a function that counts the frequency of each character in a string.

function charFrequency(str) {
    const freq= {};//Object for frequency store

    for (i=0; i < str.length; i++) {
        const char = str[i];

        if (freq[char]) {
            freq[char]++;
        }
        else {
            freq[char] = 1;
        }

    }
    return freq;
}

let myStr = "Banana";
console.log(charFrequency(myStr));

// ### 2. **Title Case Converter**
//Create a function that converts a sentence to title case (first letter of each word capitalized).

function titleCase(sen) {
    return sen.split(" ")
              .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
              .join(); 
}

let sentence = "digihelp it services llp";
console.log(titleCase(sentence));

// ### 3. **Palindrome Number Checker**
// Write a function that checks if a given number is a palindrome.

function palindromeNumber (num) {
    
    if (typeof num !== "number") {
        return "Invalid Numbeer";
    }
    const numStr = String(num);

    const rev = numStr.split("").reverse().join();

    return numStr = rev;
}


// ### 4. **Count Words in Sentence**
// Create a function that counts the number of words in a sentence.

function countWords (sen) {
    const trimmedSen = sen.trim();

    if(!trimmedSen) {
        return 0;
    }

    const words = trimmedSen.split(/\s+/);
    return words.length;
    
}


// ### 5. **Simple Interest Calculator**
// Write a function to calculate simple interest given principal, rate, and time.

function calculateSimpleInterest(principal, ratepercent, timeyear) {

    const interest = (principal * ratepercent * timeyear)/100;

    return {principal, ratepercent, timeyear, interest, Amount: principal + interest }
}

// ### 6. **Compound Interest Calculator**
// Implement a function to calculate compound interest.

function compoundInterest(principal, ratepercent, timeyers, Compoundperyear) {

    const r = ratepercent/100;
    const n = Compoundperyear;
    const t = timeyers;
    const amount = principal * Math.pow(1 + r/n, n*t);
    const interest = amount - principal;

    return {principal, ratepercent, timeyers, Compoundperyear, interest, amount};
      
}

// ### 7. **Leap Year Checker**
// Write a function to determine if a given year is a leap year.

function leapYearChecker(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// ### 8. **Days Between Dates**
// Create a function that calculates the number of days between two dates.

function daysBetweenDates(d1, d2) {

    if ( isNaN(d1) || isNaN(d2)) {
        return Error("Invalid Dates"); 
        
    }
    const msPerDay = 1000*24*60*60; 
    const daysDiff = Math.abs(d2 - d1);
    return Math.floor(daysDiff/msPerDay);
}

// ### 9. **Password Strength Checker**
// Write a function to check if a password meets strength requirements (length, uppercase, lowercase, number, special character).

function passwordStrengthChecker(password){

    const lengthOk = password.length >= 8;
    const upper = /[A-Z]/.test(password);
    const lower = /[a-z]/.test(password);
    const digit = /[0-9]/.test(password);
    const special = /[!@#$%^&*(),.?":{}|<>\\[\];'`~_\-+=/]/.test(password);
    const score = [lengthOk, upper, lower, digit, special].filter(Boolean).length;

    let strength;
    if (score === 5) strength = "Very Strong";
    else if (score >= 4) strength = "Strong";
    else if (score >= 3) strength = "Medium";
    else if (score === 2) strength = "Week";
    else strength = "Very Week";

    return {lengthOk, upper, lower, digit, special, score, strength};
}

// ### 10. **Email Validator**
// Implement a function to validate if a string is a valid email address.

//function 

// ### 11. **Phone Number Formatter**
// Write a function to format a 10-digit number as a phone number (e.g., (123) 456-7890).

// ### 12. **BMI Calculator**
// Create a function to calculate BMI and return the category (Underweight, Normal, Overweight, Obese).

function bmiCalculator (weight, height) {

    if (weight <=0 || height <=0) {
        return "Invalid Weight or Weight" ;
    }

    const bmi = weight/(height*height);

    let category;
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese"; 

    return {bmi : Number(), category};
}

// ### 13. **Tax Calculator**
// Write a function to calculate tax based on income and tax brackets.

function calculateTax (income) {
    const taxbrackets = [
        {limit: 250000, rate: 0},
        {limit: 500000, rate: 0.2},
        {limit: 1000000, rate: 0.5},
        {limit: Imfinity, rate: 0.7}
    ]

    let tax = 0;
    let previousLimit = 0;

    for(i=0; i < taxbrackets.lengths; i++) {
        const bracket = taxbrackets[i];

        if (income > bracket.limit) {
            tax += (bracket.limit - previousLimit) * bracket.rate;
        }
        else {
            tax += (income - previousLimit) * bracket.rate;
            break;
        }
    }
    return tax;
}

// ### 14. **Currency Converter**
// Implement a function to convert an amount from one currency to another using a given exchange rate.

function currencyConverter (amount, rate) {

    return Number((amount*rate).toFixed(4));
}

// ### 15. **Temperature Converter**
// Write a function to convert temperatures between Celsius, Fahrenheit, and Kelvin.

// function convertTemperature(value, unitFrom, unitTo) {
//   let celsius;

//   // Convert the input value to Celsius first
//   switch (unitFrom.toLowerCase()) {
//     case 'celsius':
//     case 'c':
//       celsius = value;
//       break;
//     case 'fahrenheit':
//     case 'f':
//       celsius = (value - 32) * 5 / 9;
//       break;
//     case 'kelvin':
//     case 'k':
//       celsius = value - 273.15;
//       break;
//     default:
//       throw new Error('Invalid unitFrom specified. Please use "celsius", "fahrenheit", or "kelvin".');
//   }

//   // Convert from Celsius to the target unit
//   switch (unitTo.toLowerCase()) {
//     case 'celsius':
//     case 'c':
//       return celsius;
//     case 'fahrenheit':
//     case 'f':
//       return (celsius * 9 / 5) + 32;
//     case 'kelvin':
//     case 'k':
//       return celsius + 273.15;
//     default:
//       throw new Error('Invalid unitTo specified. Please use "celsius", "fahrenheit", or "kelvin".');
//   }
// }

function temperatureConverter (value, unitFrom, unitTo) {
    let celsius;

    switch (unitFrom.toLowerCase()) {
        case 'celsius' :
        case 'c':
            celsius = value;
        break;
        case 'fahrenheit' :
        case 'f':
            celsius = (value - 32)* 5/9;
        break;
        case 'kelvin':
        case 'k':
            celsius = value - 273.15;
        break;
        default:
            throw new Error  ('Invalid unitFrom specified. Please use "celsius", "fahrenheit", or "kelvin".');                       
    }

    switch(unitTo.toLowerCase()) {
        case 'celsius':
        case 'c':
            return celsius;
        break;
        case  'fahrenheit' :
        case 'f':
            return (celsius * 9/5) + 32;
        break;
        case 'kelvin':
        case 'k':
            return celsius + 273.15;
        break;
        default:
            throw new Error  ('Invalid unitFrom specified. Please use "celsius", "fahrenheit", or "kelvin".');         
    }
}

// ### 16. **Object Property Counter**
// Given an object, write a function to count the number of properties.

function propertyCount(obj) {

    return Object.keys(obj).length();
}

// ### 17. **Object Deep Cloner**
// Create a function to deep clone an object.



// ### 18. **Find Longest Word in String**
// Write a function to find the longest word in a sentence.

function longestWord (sentence) {
    const words = sentence.split(/\s+/).filter(Boolean);

    let longest= "";
    for(let w of words) {
        if (w.length > longest.length) {
            longest = w;
        }
    }
    return longest;
}

// ### 19. **Capitalize First Letter**
// Create a function to capitalize the first letter of a string.

function capitalizeFirstLetter (letter) {

    return letter[0].toUpperCase() + letter.slice(1)
}

// ### 20. **Bank Account Simulation**
// Write a function to simulate a bank account with deposit, withdraw, and balance check operations (using an object).

//function 

// ### 21. **Movie Filter by Genre**
// Given an array of movie objects, write a function to filter movies by genre and rating.

// ### 22. **To-Do List Manager**
// Write functions to add, remove, and mark tasks as completed in a to-do list object.

// ### 23. **Find Missing Digit in Number Sequence**
// Given a string of digits with one missing, write a function to find the missing digit.

// ### 24. **Generate Random Password**
// Create a function to generate a random password of specified length.

// ### 25. **Calculate Age from Birthdate**
// Write a function that calculates age from a given birthdate string.

// ### 26. **Flatten Nested Object**
// Write a function to flatten a nested object (one level deep).

// ### 27. **Group Objects by Property**
// Given an array of objects, write a function to group them by a specified property.

// ### 28. **Event Scheduler**
// Create a function to schedule events and check for time conflicts (using objects).

// ### 29. **Weather Data Analyzer**
// Given an object of daily temperature data, write a function to find the hottest and coldest days.

// ### 30. **String Compression**
// Write a function that compresses a string using run-length encoding (e.g., "aaabb" → "a3b2").
