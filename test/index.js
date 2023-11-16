// var myName = "Robin";
// for (let index = 0; index < 6; index++) {
//   setTimeout(
//     function () {
//       console.log(myName);
//     },
//     1000
//   );
// }
// setTimeout(
//   function () {
//     for (let i = 0; i < 6; i++) {
//       console.log(myName);
//     }
//   },
//   60000
// );
/*
      Arrow Function
*/
/*
const names = ["Maruf", "Ahmed", "Robin"];
const fullName = names.map(function (name) {
  return `${name} Ahmed`;
});
const fullName1 = names.map((name) => {
  return `${name} coooool`;
});
//only for one parameter
const fullName2 = names.map(name => `${name} coooool`)

//without any parameter 
const fullName3 = names.map(()=> ' cool')

console.log(fullName3);
console.log(names);
*/
/*
const examName = "Math Mid Exam";
const student = ["Student1", "Student2", "Student3", "Student3", "Student4"];

const resultBoard = student.map((result, i) => ({name: result, examName, place: i + 1}))
console.table(resultBoard)
const age  = [22,2351,2,1,56,656,4,46,11,584,,213,1,4];
*/
/*
Map: returns an array of pieces of information from the original
     array. In the callback function, return the data you wish 
     to be part of the new array. 
Filter: returns a subset of the original array based on custom
      criteria. In your callback function, return a boolean
      value to determine whether or not each item will be
      included in the new array. 
Reduce: can be used to return almost anything.
      It is often used to return a single number, like an sum,
      but it can also be used to combine the logic of Map 
      and Filter to return an array of values matching certain
      criteria. This can remove unnecessary iterations.
*/
// const oldMapperFunction = age.filter(age => age >= 50)
// console.log(oldMapperFunction)
// const oldMapperFunction = age.reduce(age => age >= 50)
// console.log(oldMapperFunction)
