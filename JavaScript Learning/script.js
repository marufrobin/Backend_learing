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
        14. Bitwise OR: |
        15. Logical AND: &&
        16. Logical OR: ||
        17. Conditional (Ternary) Operator: ? :
        18. Assignment Operators: = += -= *= /= %= <<= >>= >>>= &= ^= |=
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
*/
const developerName = "Maruf Robin";
const jobTitle = "Lead App Developer";
const experience = "1.5 years";

const fullString = `${developerName} ${jobTitle} ${experience}`;
console.log(fullString);
