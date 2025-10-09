// ### 5. Switch Statement
// **a.** Print the name of a month for numbers 1-12 using a switch statement.  

// let monthNum = prompt("Enter a month number");

// switch (monthNum) {
//     case 1: {
//         console.log("January");
//     }
//     break;

//     case 2: {
//         console.log("Feburary");
//     }
//     break;
//      case 3: {
//         console.log("March");
//     }
//     break;
//      case 4: {
//         console.log("April");
//     }
//     break;
//      case 5: {
//         console.log("May");
//     }
//     break;
//      case 6: {
//         console.log("June");
//     }
//     break;
//      case 7: {
//         console.log("July");
//     }
//     break;
//      case 8: {
//         console.log("August");
//     }
//     break;
//      case 9: {
//         console.log("September");
//     }
//     break;
//      case 10: {
//         console.log("October");
//     }
//     break;
//      case 11: {
//         console.log("November");
//     }
//     break;
//      case 12: {
//         console.log("December");
//     }
//     break;

//     default: {
//         console.log("Enter a valid month number");
//     }
//     break;
// }


// **b.** Write a program to print the day of the week for numbers 1-7.

let dayNumber = prompt("Enter a day number");

let dayNum = Number(dayNumber);

switch (dayNum) {
    case 1: 
        console.log("Monday");
    break;
    case 2:
        console.log("Tuesday");
    break; 
     case 3:
        console.log("Wednesday");
    break; 
     case 4:
        console.log("Thursday");
    break; 
     case 5:
        console.log("Friday");
    break; 
     case 6:
        console.log("Saturday");
    break; 
     case 7:
        console.log("Sunday");
    break;  
    default: 
        console.log("Enter a valid Day Number");
    break;      
}