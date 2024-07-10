// let js = "amazing";
// console.log(js);
// if (js == "amazing") {
//   alert(js);
// }

// console.log(40 + 8 + 230 - 10);

/*
------------------------------------------------------
let countryName = "🇧🇩 Bangladesh 🇧🇩";
let continent = "South Asia";
let population = "170";

console.log(`Country name: ${countryName}`);
console.log(`Continent name: ${continent}`);
console.log(`Population: ${population}`);
------------------------------------------------------
*/

//----------- Primitive data types ----------------------
/*
-------------------------------------------------------------------------------
    What are primitive data types?
    Primitive data types are basic data types from which all other data types 
    are constructed.
    JavaScript primitive data types are data types that refer to a single value.
-------------------------------------------------------------------------------

// 1.Number: Floating point numbers used for decimal and integers
let age = 23;

// 2. String: Sequence of character used for text
let name = "Robin";

// 3. Boolean: Logical type can only be true or false used for taking decisions
let fullAged = true;

// 4. Undefined: Value taken by a variable that is not yet defined('empty value')
let children;

// 5. Null: Also means 'empty value'

// 6. Symbol(ES2015): Value that is unique and cannot be changed[not useful for now]

// 7. BigInt (ES2020): larger integers than the Number type can hold

// Note: JS has dynamic typing: we do not have to manually define the data type of the value stored in a variable
// instead, data types are determined automatically
fullName = "Maruf Ahmed Robin";
typeof fullName;
// outputs --> 'Maruf Ahmed Robin'
//             'string'
*/
/*
-------------------------------------------------------------------------------
                                Let , Const and var
-------------------------------------------------------------------------------

// let --> We use let keyword to declare the variable
// and later change the value.
let age = 30;
age = 31; // we change the value or mutated the variable

// const --> we use const keyword to declare the variable constant
//           which means value of that variable will not change at
//           any point of time

const birthYear = 1997;
birthYear = 1998; //Output --> TypeError: Assignment to constant variable.
// it created immutable (it can not be mutated).
// we can not declare empty const variables
// const title;
// output --> SyntaxError: Missing initializer in const declaration.

// var --> same as let keyword
*/
/*
-------------------------------------------------------------------------------
                                Basic Operator
-------------------------------------------------------------------------------

const now = 2024;
const ageRobin = now - 1997;
const ageOfNameNai = now - 2000;
console.log(ageRobin, ageOfNameNai);
console.log(ageRobin * 2, ageOfNameNai / 2, 2 ** 3); //2 ** 3 means 3 = 2 * 2 * 2
const firstName = "Maruf";
const lastName = "Robin";
console.log(firstName + " " + lastName);
*/

//--------------------------------------------------------------------------
/* 
---------------------------------------------------------------------
    Assignment operators
-------------------------------------------------------------------

let x = 20 + 10;
console.log(x);
x += 5; // x = x + 5 = 35;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
*/

/* 
--------------------------------------------------------------
    Comparison operators
    > , < , >= , <=
--------------------------------------------------------------

console.log(ageRobin > ageOfNameNai); // true

console.log(ageRobin >= 18); // true

console.log(ageRobin <= 18); // false
*/

/* 
--------------------------------------------------------------
    Precedence operators
        1. Member Access: . []
        2. Function Call: ()
        3. Postfix Increment/Decrement: ++ --
        4. Logical/Bitwise NOT: ! ~
        5. Unary Plus/Minus: + -
        6. Exponentiation: **
        7. Multiplication/Division/Modulus: * / %
        8. Addition/Subtraction: + -
        9. Bitwise Shift: << >> >>>
        10. Relational Operators: < > <= >= instanceof in
        11. Equality Operators: == != === !==
        12. Bitwise AND: &
        13. Bitwise XOR: ^
        14. Bitwise OR: -->
        15. Logical AND: &&
        16. Logical OR: -->-->
        17. Conditional (Ternary) Operator: ? :
        18. Assignment Operators: = += -= *= /= %= <<= >>= >>>= &= ^= -->=
--------------------------------------------------------------
*/

/*
--------------------------------------------------------------
    Arithmetic Operators
    In this example, 
    multiplication (*) has a higher precedence than addition (+). 
    So, 3 * 4 is evaluated first, and then the result is added to 2.

    Output: 14
--------------------------------------------------------------

let result = 2 + 3 * 4;
console.log(result);
*/

/*
--------------------------------------------------------------
    Comparison Operators
    Here, > and <= have the same precedence, 
    but the logical AND (&&) has a higher precedence. 
    So, the comparisons are evaluated before the logical AND.

    Output: true
--------------------------------------------------------------

let comparisonResult = 5 > 3 && 2 <= 4;
console.log(comparisonResult);
*/

/*
--------------------------------------------------------------
    Ternary Operator
    The ternary operator (? :) 
    has a lower precedence than most other operators. 
    It's often used for conditional expressions.
    
    Output: Eligible
--------------------------------------------------------------

let age = 20;
let eligibility = age >= 18 ? "Eligible" : "Not Eligible";
console.log(eligibility);
*/

/*
--------------------------------------------------------------
    Grouping with Parentheses
    Parentheses can be used to explicitly specify the order of evaluation. 
    In this case, (2 + 3) is evaluated first, and then 
    the result is multiplied by 4.
    
    Output: 20
--------------------------------------------------------------

let resultWithParentheses = (2 + 3) * 4;
console.log(resultWithParentheses);
*/

/*
--------------------------------------------------------------
    Assignment Operators
    The compound assignment operator (*=) has a lower precedence than 
    the addition operator (+). So, 3 + 2 is evaluated first, 
    and then the result is multiplied by 5 and assigned to x.
    
    Output: 25
--------------------------------------------------------------

let number = 5;
number *= 3 + 2;
console.log(number);
*/
/* Challenge 🙂 
const massMark = 78;
const heightMark = 1.69;
const massJhon = 92;
const heightJhon = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJhon = massJhon / (heightJhon * heightJhon);

console.log(BMIMark);
console.log(BMIJhon);

const markHigherBMI = BMIMark > BMIJhon;
console.log(markHigherBMI);
*/
/*
-------------------------------------------------------------------------------
                         String and Template literals
-------------------------------------------------------------------------------

const developerName = "Maruf Robin";
const jobTitle = "Lead App Developer";
const experience = "1.5 years";

// Template literals
const fullString = `${developerName} ${jobTitle} ${experience}`;
const fullString2 = `${developerName}
 ${jobTitle}
  ${experience}`;

console.log(fullString);
console.log(fullString2);
*/

/*
-------------------------------------------------------------------------------
                         if/else statement
-------------------------------------------------------------------------------


const age = 17;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Robin is old enough for driving.");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Robin is not old enough for driving.Wait another ${yearsLeft} years.`
  );
}

const birthYear = 1991;
let century;

// variable that is declare inside the if/else statement
//can not accessible from outside

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
-------------------------------------------------------------------------------
                         CHALLENGE #2
-------------------------------------------------------------------------------

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI (${BMIMark.toFixed(
      1
    )}) is higher than John's (${BMIJohn.toFixed(1)})!`
  );
} else {
  console.log(
    "John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!"
  );
}
*/

/*
--------------------------------------------------------------------------
                         Type conversion and coercion
--------------------------------------------------------------------------


// type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18); //output: 2009
console.log(inputYear + 18); // output: 199118

console.log(Number("Robin"));
console.log(typeof NaN);

console.log(String("14"), 14);
console.log(typeof String("14"), typeof 14);

// type coercion
// Type coercion is the automatic conversion of values between different data types during operations.
// JavaScript is a loosely-typed language, which means that variables can change types as needed.

let result = "5" + 3; // JavaScript coerces the number to a string
console.log(result); // Output: "53"

// Implicit type coercion is performed automatically by JavaScript during operations, as seen in the example above.
// Explicit type conversion involves using functions or methods to consciously change the data type

// Implicit type coercion
let implicitResult = "5" * 1; // JavaScript coerces the string to a number
console.log(implicitResult); // Output: 5

// Explicit type conversion
let explicitResult = Number("5"); // Convert string to number
console.log(explicitResult); // Output: 5

console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

// Truthy and Falsy Values:
// Type coercion is often encountered when dealing with truthy and falsy values.
// Values like 0, "", null, undefined, NaN are considered falsy, and other values are truthy.
let value = "Hello";
if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}


let height = 1;
if (height) {
  console.log("Height define kora ase vai!");
} else {
  console.log("Height koi sala?");
}

*/

/*
--------------------------------------------------------------------------
                         Equality operators == vs. ===
--------------------------------------------------------------------------

const age = 23;
const fullName = "23";
const years = 23;

console.log(age == fullName); // Equal: true (equal to)
console.log(age === fullName); // Equal:false (equal value and equal type)

console.log(age != fullName); // Equal: false (not equal)
console.log(age !== fullName); // Equal: true (not equal value or not equal type)

const favorite = prompt("What's your favorite number?");
console.log(favorite);
*/

/*
--------------------------------------------------------------------------
                         Boolean Logic
--------------------------------------------------------------------------
*/
/*
    AND -> Both true
    or -> anyone true
    Not operator "!" -> Inverts the true/false value
*/

// const hasDriverLicense = true;
// const hasGoodVision = false;

// console.log(hasDriverLicense -->--> hasGoodVision);
// console.log(hasDriverLicense && hasGoodVision);
// console.log(!hasGoodVision);

// const shouldDrive = hasDriverLicense && hasGoodVision;
// if (shouldDrive) {
//   console.log("Robin is able to drive.");
// } else {
//   console.log("Someone else should drive....");
// }

/*
CHALLENGE #3
  There are two gymnastics teams: Dolphins and Koalas. 
  They compete against each other 3 times. The winner with the highest 
  average score wins a trophy!

Your tasks:
  1. Calculate the average score for each team, using the test data 
    included below. The average score for Dolphins should be assigned 
    to the scoreDolphins variable, and the average score of Koalas should 
    be assigned to the scoreKoalas variable.

  2. Compare the team's average scores to determine the winner of the 
    competition, and print to the console:
    "Dolphins win the trophy" if Dolphins win, or
    "Koalas win the trophy" if Koalas win, or
    "Both win the trophy" if their average scores are equal.

TEST DATA: 
  Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy");
// } else if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else {
//   console.log("Koalas win the trophy");
// }

/*
--------------------------------------------------------------------------
                         Switch case 
--------------------------------------------------------------------------
*/

// const day = "Tuesday";
// switch (day) {
//   // day === "Tuesday"
//   // Switch use for check equality
//   case "Monday":
//     console.log("I will go Dhaka.");
//     console.log("Coding meetup.");
//     break;
//   case "Tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "Friday":
//     console.log("Learning coding");
//     break;
//   case "Saturday":
//     console.log("Learning ML");
//     break;
//   case "Sunday":
//     console.log("learning IOS publish.");
//     break;
//   default:
//     console.log("Sleeping...");
// }

/*
--------------------------------------------------------------------------
                         Statements and Expressions
--------------------------------------------------------------------------
*/

// const shouldPrint = true;

// //work
// console.log(`my name is ${shouldPrint?"robin":"maruf"}`);

// // Not work

// console.log(`my name is ${if (shouldPrint) {
//   'robin'
// } else"maruf"}`);

/*--------------------------------------------------------------------------
                         The conditional (Ternary) Operator
                         (writing if/else in a single line.)
                         (Ternary operator is really a expression)  
--------------------------------------------------------------------------*/

// const age = 23;
// console.log(age >= 18 ? "Adult" : "child");

// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Child");
// }
/*
CHALLENGE #4
  Steven needs a very simple tip calculator for whenever 
  he goes to eat in a restaurant. In his country, it's usual to 
  tip 15% if the bill value is between 50 and 300. If the value is different, 
  the tip is 20%.
Your tasks:
    Calculate the tip, depending on the bill value. Create a variable 
    called tip for this. It's not allowed to use an if...else statement 
    (if it's easier for you, you can start with an if...else statement, 
    and then try to convert it to a ternary operator).

    Print a string to the console containing the bill value, the tip, and 
    the final value (bill + tip).
Example: 
    The bill was 275, the tip was 41.25, and the total value 316.25.
Note: 
    Use the values of the bill and tip variables to construct this string. 
    Don't hard-code them 🙂
TEST DATA: 
    Test with different bill values: 275, 40, and 430
HINT: 
    To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT 2: 
    Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

// const bill = 275;

// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

/*
--------------------------------------------------------------------------
                         JavaScript version releases
                         ES5,ES6+ and ESNext  
--------------------------------------------------------------------------
*/

/* 
Year -->	ECMA	-->  Browser
--------------------------------------------------------------------------
1995 -->	  	  -->  JavaScript was invented by Brendan Eich
1996 -->	  	  -->  Netscape 2 was released with JavaScript 1.0
1997 -->	  	  -->  JavaScript became an ECMA standard (ECMA-262)
1997 -->	ES1 	-->  ECMAScript 1 was released
1997 -->	ES1 	-->  IE 4 was the first browser to support ES1
1998 -->	ES2 	-->  ECMAScript 2 was released
1998 -->	  	  -->  Netscape 42 was released with JavaScript 1.3
1999 -->	ES2 	-->  IE 5 was the first browser to support ES2
1999 -->	ES3 	-->  ECMAScript 3 was released
2000 -->	ES3 	-->  IE 5.5 was the first browser to support ES3
2000 -->	  	  -->  Netscape 62 was released with JavaScript 1.5
2000 -->	  	  -->  Firefox 1 was released with JavaScript 1.5
2008 -->	ES4 	-->  ECMAScript 4 was abandoned
2009 -->	ES5 	-->  ECMAScript 5 was released
2011 -->	ES5 	-->  IE 9 was the first browser to support ES5 *
2011 -->	ES5 	-->  Firefox 4 was released with JavaScript 1.8.5
2012 -->	ES5 	-->  Full support for ES5 in Safari 6
2012 -->	ES5 	-->  Full support for ES5 in IE 10
2012 -->	ES5 	-->  Full support for ES5 in Chrome 23
2013 -->	ES5 	-->  Full support for ES5 in Firefox 21
2013 -->	ES5 	-->  Full support for ES5 in Opera 15
2014 -->	ES5 	-->  Full support for ES5 in all browsers
2015 -->	ES6 	-->  ECMAScript 6 was released
2016 -->	ES6 	-->  Full support for ES6 in Chrome 51
2016 -->	ES6 	-->  Full support for ES6 in Opera 38
2016 -->	ES6 	-->  Full support for ES6 in Safari 10
2017 -->	ES6 	-->  Full support for ES6 in Firefox 54
2017 -->	ES6 	-->  Full support for ES6 in Edge 15
2018 -->	ES6 	-->  Full support for ES6 in all browsers 
**/

//----------------------------------------------------------------
// -------------------- Activate Strict mode ---------------------
//----------------------------------------------------------------
// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }

// if (hasDriversLicense) {
//   console.log("I can drive :D");
// }

//----------------------------------------------------------------
// ------------------------ Function -----------------------------
//----------------------------------------------------------------

// function logger() {
//   console.log("Hello, From function");
// }
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// fruitProcessor(5, 0);

// console.log(fruitProcessor(4, 5));

// const applesJuice = fruitProcessor(3, 0);

// console.log(applesJuice);
// const calAge3 = (brithYear) => 2024 - brithYear;

// console.log(calAge3(1997));

// const personRetirement = (personAge, personName) => {
//   const retirementYear = 59 + personAge;
//   const yearLeftToRetire = retirementYear - 2024;
//   return `${personName} born in ${personAge} will retire at the age 65 in ${retirementYear} and only ${yearLeftToRetire} years`;
// };

// console.log(personRetirement(1997, "Robin"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   console.log(apples, oranges);
//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//   return juice;
// }

// fruitProcessor(5, 0);

// console.log(fruitProcessor(4, 5));

//----------------------------------------------------------------
// ------------------------ Challenge -----------------------------
//----------------------------------------------------------------

// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// const scoreDolphins = calcAverage(96, 108, 89);
// const scoreKoalas = calcAverage(88, 91, 110);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins * 2 <= avgKoalas) {
//     console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else {
//     console.log("No team wins...");
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);
/*
--------------------------------------------------------------------------
                         Array 
--------------------------------------------------------------------------
*/
// start--->> introduction of array
// const friend1 = "Maruf";
// const friend2 = "Ahmed";
// const friend3 = "Robin";

// const friends = ["Maruf", "Ahmed", "Robin"];

// console.log(friends);

// const years = new Array(1997, 1996, 1995, 1994, 1993);

// console.log(years);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = "Marlin";
// console.log(friends);
// const newArray = ["my", 1997, friends];
// console.log(newArray);

// const calcAge = function (brithYear) {
//   return 2024 - brithYear;
// };

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
// console.log(ages);
// // END--->> introduction of array

// // START--->> Basic array operations(Methods)

// // push method add value at the end of the array
// // and also returns the new length of the array
// const newLength = friends.push("My name");
// console.log(friends);
// console.log(newLength);

// // add element to the beganing of the array
// friends.unshift("Hi");
// console.log(friends);

// //Remove elements
// // array pop method remove elements at last index
// // pop method returns the removed element
// const removeElement = friends.pop();
// console.log(friends);
// const removeElement2 = friends.pop();
// console.log(friends);
// console.log(removeElement);
// console.log(removeElement2);

// // use shift remove elements from first of the array
// // it returns which elements it removed
// const removeElement3 = friends.shift();
// console.log(friends);
// console.log(removeElement3);

// // indexOf method returns which index the given elements are in
// const elementLocation = friends.indexOf("Maruf");
// console.log(elementLocation);

// // in indexOf returns -1 when elements not available
// // but using includes method returns true or false
// // and it's sticly typed
// friends.push(23);
// console.log(friends.includes("Ahmed")); // true
// console.log(friends.includes("23")); // false
// console.log(friends.includes(23)); // true

// // END--->> Basic array operations(Methods)

/*
CHALLENGE #2

Steven wants you to improve his tip calculator, using the same rules as 
before — tip 15% of the bill if the bill value is between 50 and 300, 
and if the value is different, the tip is 20%.

Your tasks:

    Write a function calcTip that takes any bill value as an input and 
    returns the corresponding tip, calculated based on the rules above 
    (you can check out the code from the first tip calculator challenge 
    if you need to). Use the function type you like the most. Test the 
    function using a bill value of 100.

    And now let's use arrays! So, create an array called bills containing 
    the test data below.

    Create an array called tips containing the tip value for each bill, 
    calculated from the function you created before.

    BONUS: Create an array totals containing the total values, so the 
    bill + tip.

TEST DATA: 125, 555, and 44.
*/

// const bill = 275;

// // let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const calcTip = (bilValue) =>
//   bilValue >= 50 && bilValue <= 300 ? bilValue * 0.15 : bilValue * 0.2;

// // console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = bills[0] + tips[0] + bills[1] + tips[1] + bills[2] + tips[2];
// console.log(bills);
// console.log(tips);
// console.log(total);
	/*
	--------------------------------------------------------------------------
                          JavaScript Fundamentals - part-2
                              Introduction of Objects  
	--------------------------------------------------------------------------
	*/
	


