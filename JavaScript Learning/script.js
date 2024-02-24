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
*/
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
