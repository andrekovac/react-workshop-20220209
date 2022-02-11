/* eslint-disable */
// !-----------------------
// ! Object property access
// !-----------------------

// ? 🐒 [Questions]: Answer the following questions:
// ?
// ? 1. What are the three different ways in JS to access object properties?
// Your answer:
//
//
//
//
// ? 2. When using the `dot property accessor` the property has to be an `identifier`.
// ?    Use https://developer.mozilla.org/en-US/docs/Glossary/Identifier to explain what an identifier is.
// Your answer:
//
//
//

// -----------------------------------------------------------------------------

// !---------------
// ! var, let, const
// !---------------

// ! Scope (var)

let newWord = "hello";
const testScope = () => {
  newWord = "goodbye";
};

testScope();
console.log(newWord);

if (true) {
  // word;
  word = "hello";
}

// let myName = { name: "Andre" };

// myName.name = null;

// myName.age = 18;

// myName = { name: "Lisa", age: 56 };

// let myNumber = "Name: " + myName.name;

// const isMale = false;
// let myNumber2 = `Name: ${() => {
//   if (isMale) {
//     return "Andre";
//   } else {
//     return "Lisa";
//   }
// }}`; // ternary operator

// // myNumber;
// myNumber2;

const num1 = { a: 3 };
const num2 = { ...num1 };

console.log(num1 == num2);
console.log(num1 === num2);

const myObject = { myNumber: 0 };
const myNumber = myObject.myNumber;
console.log(myObject.myNumber);

const logName = () => {
  // return myNumber || 16;
  return myNumber ?? 56;
};

console.log(logName());

const myFalseFunction = () => false;

console.log(myFalseFunction);

if (myFalseFunction()) {
  console.log("Test");
}

if ((() => false)()) {
  console.log("Test");
}

const test2 = function () {
  return false;
};
if (test2) {
  console.log("Test2");
}

// word;

// ! Scope (var)
if (1 == 1) {
  var word = "hello";
  const word3 = "bye";
}
// word; // "hello"
// word3;

// ? 🐒 [Question]: Explain the different results for `var` and `const`
// Your answer:
//
//

// ! Re-assignment (const)

const mySum = (one, two, three) => {
  return one + two + three;
};

const returnValue = {};
returnValue.sds = mySum(2, 6, 1); // assignment
console.log(returnValue.sds);

// ? 🐒 [Question]: Why is this assignment to property of a `const` possible?
// Your answer:
//
//

// -----------------------------------------------------------------------------

// !-------------------------------
// ! Array destructuring and spread
// !-------------------------------

// ! Array spread
// !-------------

const coordinates = [39, 21]; // lat, lng

// Extract second argument only
const [, lng] = coordinates; // equivalent to: `const lng = coordinates[1];`

// ! Spread function arguments
// !--------------------------

const values = [1, 2, 3];
// Elegant solution with spread operator:
const result = mySum(...values);
// Verbose solution without spread operator:
const resultVerbose = mySum(values[0], values[1], values[2]);

console.log(result);

// ------------------------

const newPerson = {
  name: "Andre",
  age: 35,
};
const newPerson2 = {
  name: "Lisa",
  age: 34,
};

let { age: myAge } = newPerson;

myAge = 14;

console.log(myAge);
console.log(newPerson.age);

// // const [,,p3] = persons;
// let p3 = persons[2];

// p3 = "Horst";
// p3
// console.log(persons);

const persons = { a: 1, b: 2, c: 3 };

const personsCopy1 = persons; // only new reference
const personsCopy2 = { ...persons }; // shallow copy

personsCopy1[0] = 5;
persons;

personsCopy2[2] = 88;
persons;

const myNumbers = [1, 2, 3, 4, 5];

const myNumbersWithoutFour = myNumbers.filter((n) => n !== 4);
myNumbersWithoutFour;

// ! Array destructuring (nested)
// !----------------------

const myArray = [1, [2, 3]];
const [, [, third]] = myArray;
console.log(third);

// ! Array destructuring (fake useState function)
// !----------------------

// Attention: This is a fake `useState` function
// It's not how React.useState function is implemented
const useStateCustom = (initialValue) => {
  const stateValue = initialValue;
  const setStateValue = (newValue) => {
    stateValue.count = newValue.count;
  };
  return [stateValue, setStateValue];
};

// Array destructuring
const [count, setCount] = useStateCustom({ count: 0 });

setCount({ count: 5 });
console.log(count);

// ! Object destructuring (nested)
// !----------------------

const props = { data: { a: [1, 2, 3], b: [4, 5, 6] } };
const {
  data: { a: dataA },
} = props; // nested destructuring + renaming of `a` to `dataA`

console.log(dataA);

// -----------------------------------------------------------------------------

// !---------------------------------------------------------------------
// ! nullish coalescing operator (??) and optional chaining operator (?.)
// !---------------------------------------------------------------------

let greeting = { say: "hi", dontSay: 9 };
console.log(greeting.say?.toUpperCase() ?? "not available"); // "HI"
console.log(greeting.dontSay.toUpperCase?.() ?? "not available"); // "not available"

// ? 🐒 [Question]: Explain this interplay of nullish coalescing operator (??) and optional chaining operator (?.)
// Your answer:
//
//

// -----------------------------------------------------------------------------

// !---------------
// ! Type Coercion
// !---------------

// This section is here to demonstrate that the implicit type coercion in JavaScript
// can be very unpredictable. You don't have to (shouldn't) try to understand all of the examples.

// ? 🐆 [Task]: Guess the result of each line first and then uncomment the `console.log` statement:

const one = true + 3 + false;
console.log(one);

const two = 1 + 2 + 5 + " hello world" + 5 + 3 + 43;
console.log(two);

const three = 1 + true;
console.log(three);

const four = "hello" + true;
console.log(four);

const five = {} + {};
console.log(five);

const six = {} === {};
console.log(six);

const seven = [1, 2] == "1,2";
console.log(seven);

// !--------------------------------
// ! Object.is() comparison operator
// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// !--------------------------------

const eight = Object.is(+0, -0);
// console.log(eight);

const nine = +0 === -0;
// console.log(nine);

const car1 = { wheels: 4 };
const car2 = car1;
const ten = Object.is(car1, car2);
// console.log(ten);

car1.wheels = 5; // mutate original car1 object
const eleven = Object.is(car1, car2);
// console.log(eleven);

const twelve = Object.is(car1, { wheels: 5 });
// console.log(twelve);

console.log(Object.is({ a: "blue" }, { a: "red" }));

// Bonus: Really crazy example:
// https://stackoverflow.com/questions/7202157/why-does-return-the-string-10
