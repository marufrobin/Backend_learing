// let number = 3;

// function makeSquare(number) {
//   return number * number;
// }

// const functionValue = makeSquare(number);
// console.log(functionValue);

// function describePerson(name, age, isStudent) {
//   return `${name} is ${age} years old and is ${
//     isStudent ? "a Student." : "not a student."
//   }`;
// }

// let result = describePerson("John", 25, true);
// console.log(result);

// const favoriteFruit = ["Mango", "Banana", "Orange"];

// function addFruit(fruitName) {
//   favoriteFruit.push(fruitName);
//   console.log(favoriteFruit.join(","));
// }

// addFruit("Apple");
// addFruit("Jackfruit");

// function calculateArea(length, width) {
//   if (typeof length != "number" || typeof width != "number") {
//     return "Input number is not number value.";
//   } else {
//     return length * width;
//   }
// }

// let result = calculateArea(5, "10");
// console.log(result);

// function calculateSum(a, b) {
//   if (a == null || b == null) {
//     return "Both arguments are required";
//   }
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Both arguments must be numbers";
//   }
//   return a + b;
// }

// let result = calculateSum(10, 20);

// console.log(result); // Output should be "Both arguments must be numbers"
// var x = 10;

// function exampleFunction() {
//   console.log(x); // undefined
//   var x = 20;
//   console.log(x); // 20
// }

// exampleFunction();
// console.log(x); // 10

// function convertToNumber(input) {
//   try {
//     return Number(input);
//   } catch (error) {
//     return NaN;
//   }
// }

// console.log(convertToNumber("nothing"));

// function calculateSum(arrayOfNumber) {
//   try {
//     if (typeof arrayOfNumber == "object") {
//       console.log(typeof arrayOfNumber);

//       let result = 0;
//       arrayOfNumber.forEach((element) => {
//         result += element;
//       });
//       console.log(result);
//     }
//   } catch (error) {
//     console.error("Error hoise");
//   }
// }
// calculateSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// let double = (num) => num * 2;

// console.log(double(6));

// function createCounter() {
//   let counter = 0;
//   return function counter(params) {
//     return ++counter;
//   };
// }

// console.log(createCounter().counter());

// function greet(name) {
//   console.log(`Hello, ${name}`);
// }

// greet("Alice"); // Output should be "Hello, Alice"

// function getName(name = "Robin") {
//   return `My name is ${name}`;
// }

// console.log(getName());

// function repeat(fn, n) {
//   return n * fn;
// }

// const repeatVariable = repeat(function () {}, 2);
// console.log(repeatVariable);

// function delay() {
//   return setTimeout(() => {
//     console.log("Robin");
//   }, 1500);
// }

// delay();

// function debounce(fn, delayTime) {
//   return setTimeout(() => {
//     fn();
//   }, delayTime);
// }
// function execute() {
//   debounce(function () {
//     console.log("My name");
//   }, 1300);
// }
// execute();

// function multiply(a, b) {
//   return Number(a) * Number(b);
// }

// let product = multiply(5, "3");
// console.log(product); // Output should be 15
