//? Arrays in JavaScript can be created using the Arrays constructors or with arrays literals (square brackets []).

//? There are multiple types for creating arrays in JavaScript but most commonly used are 3 methods which is given below

//? 1. Using Arrays constructors
// let fruits = new Array("Apple", "Orange", "Banana");

//? 2. Using Array literal
// let fruits = ["Apple", "Orange", "Banana"];

//? 3. we can also create an empty array
// let fruits = [];
// console.log(fruits);

//* ==================================
//*  Accessing Array Elements:
//* ==================================

//? Accessing Elements: Array elements are accessed using zero-based indices.
// let fruits = ["Apple", "Orange", "Banana"];
// console.log(fruits[1]);

//* ==================================
//*  Modifying Elements:
//* ==================================

//? Modifying Elements: You can modify array elements by assigning new values to specific indices.

// let fruits = ["Apple", "Orange", "Banana"];
// fruits[0] = "hudair";
// console.log(fruits);

//* ============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================
//?  Array Traversal / Iterating Over Arrays

//? 1: for of loop is also know as iterable
// let fruits = ["Apple", "Orange", "Mango", "Grapes", "Banana"];
//* for of Loop: The for...of loop is used to iterate the values of an iterable objects, such as arrays, strings, or others iterable objects.

// for (let item of fruits) {
//   console.log(item);
// }

// for (let item = 0; item < fruits.length; item++) {
//   console.log(fruits[item]);
// }

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including includes) of an object.

// for (let item in fruits) {
//   console.log(item);
// }

//? 3: forEach Method
//* Thar aar.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

// let myForEachArr = fruits.forEach((curElem, index, arr) => {
//   return curElem, index, arr;
// });
// console.log(myForEachArr);

//? 4: map function
//* map() creates a new array calling a function for every array element. map() does not change the original array.

// const myMapArr = fruits.map((curElem, index, arr) => {
// //   return `${curElem} ${index}`;
//   return index, arr, curElem;
// });

// console.log(myMapArr);

//TODO Practice Time
//! Write a program to Multiply each element with 2
// const numbers = [1, 2, 3, 4, 5];
//? forEach - Performs an action on each element
// numbers.forEach((curElem) => {
//   console.log(curElem * 2);
//* Perform an Action on each element
// });

//? map - Create a new array with transform elements
// let result = numbers.map((curElem) => {
//   return curElem * 2;
//* Creates a new array with transformed elements
// });

// console.log(result);

//* ========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CURD) - P1
//* ========================================================================

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CURD)
// let fruits = ["Apple", "Orange", "Mango", "Grapes", "Banana"];

//? 1: push(): Method that adds one or more elements to the end of an array.

// console.log(fruits.push("guava"));
// console.log(fruits);
// The Push() Method returns the new length of array.
//? 2: pop(): Method that remove the last element from an array.
// console.log(fruits.pop());
// console.log(fruits);
//? 3: unshift(): Method that adds one or more element to the beginning of an array.
// console.log(fruits.unshift("guava"));
// console.log(fruits);

//? 4: shift(): Method that removes the first element from an array.
// console.log(fruits.shift());
// console.log(fruits);

//* ========================================================================
//* what if, we want to add or remove anywhere in an elements - P2
//* ========================================================================

//? The splice() method of Array instance changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//* syntax
//? splice(start, deleteCount, item1, item2 /* ..., */ itemN)
// let fruits = ["apple", "orange", "banana", "mango"];
// fruits.splice(1, 1, "grapes");
// console.log(fruits);

//! what if you want to add the element at the end
// fruits.splice(-1, 0, "grapes");
// fruits.splice(fruits.length, 0, "grapes");
// console.log(fruits);

//* ===================================
//* Searching in an array
//* ===================================
//? 👉 Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//? 1: indexOf Method: The indexOf method returns the first index at which a given

//* syntax
//? indexOf(searchElement, fromIndex)
// console.log(numbers.indexOf(4, 5));

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.indexOf(6);
// console.log(result);
// const result1 = numbers.lastIndexOf(6);
// console.log(result1);
// const result2 = numbers.indexOf(6, 5);
// console.log(result2);

//? 3: The includes method checks whether an array includes a certain element, returning true or false.

//* Syntax
// includes(searchElement, fromIndex)
// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.includes(6);
// console.log(result);

//! Challenge Time

const months = ["Jan", "march", "April", "June", "July"];

//? 1: Add Dec at the end of the array?
// months.splice(months.length, 0, "Dec");
// console.log(months);

//? 2: What is the return value of splice method?
// When used to add elements, the splice method returns empty array ([])

//? 3: Update march to March (update)?
// const indexToUpdate = months.indexOf("march");
// months.splice(indexToUpdate, 1, "March");
// console.log(months);

//? 4: Delete June from an array?
// const indexToDelete = months.indexOf("June");
// months.splice(indexToDelete, 1);
// console.log(months);

//* =================================
//* Filer in an Array
//* =================================

//? Search + Filter
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

//? find Method: The find method is used to find the first element in an array that satisfies a provider testing function. It returns the first matching element undefined if no element is found.

// const result = numbers.find((curElem, index, array) => {
//   return curElem > 5;
// });

// console.log(result);

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfied the provided testing function. If no elements satisfy the testing function, -1 is returned.

// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

// const result = numbers
//   .map((curElem) => curElem * 5)
//   .findIndex((curElem) => curElem > 25);
// console.log(result);

//* 3: filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// Syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.filter((curElem) => {
//   return curElem > 4;
// });
// console.log(result);

// UseCase: In E-Commerce website when we want to Remove or Delete any product from addToCart page/
//! Ex. le'ts say user want to delete value 6.
// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// const updatedCart = numbers.filter((curElem) => {
//   return curElem !== value;
// });

// console.log(updatedCart);

//! Practice time
//! Example 2: Filtering Products bu Price
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "SmartWatch", price: 150 },
// ];

// //? Filter products with price less than or equal to 500
// const filterProducts = products.filter((curElem) => {
//   //   console.log(curElem.price <= 500);
//   return curElem.price <= 500;
// });
// console.log(filterProducts);

//! Filter unique Values
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// let uniqueValue = numbers.filter((curElem, index, arr) => {
//     // console.log(index);
//     // console.log(arr.indexOf(curElem));
//     return arr.indexOf(curElem) === index;
// });

// console.log(uniqueValue);
// console.log([ new Set(numbers)]);

//* ====================================
//* How to Sort and Compare an Array
//* ====================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.
// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9];
// numbers.sort();
// console.log(numbers);

//? compare callback function
//* Syntax
// if(a>b) return 1 => switch the order
// if (b>a) return -1 => Keep the order

//? For ascending order
// const sortedNumbers = numbers.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

//? For descending order
// const sortedNumbers = numbers.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (b > a) {
//     return 1;
//   }
// });
// console.log(sortedNumbers);

//* ===============================
//* Very Important Array Methods
//* ===============================

//? Map(), Filter(), Reduce(),
// map() creates a anew array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

//! Using map to square each number and create a new array
// const numbers = [1, 2, 3, 4, 5];
// const squareNumbers = numbers.map((curElem) => {
//   return curElem * curElem;
// });
// console.log(squareNumbers);

//! 1: Using the map method, write a function that takes an array strings and return a new array each string is capitalized.
// Original array of strings
// const words = ["apple", "banana", "cherry", "date"];
// const capitalizedStrings = words.map((curElem) => {
//   return curElem.toUpperCase();
// });
// console.log(capitalizedStrings);

//! 2: Using map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.
// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers
//   .map((curElem) => {
//     if (curElem % 2 === 0) {
//       return curElem * curElem;
//     }
//   })
//   .filter((curElem) => curElem !== undefined);
// console.log(result);

// const evenSquare = numbers
//   .map((curElem) => (curElem % 2 === 0 ? curElem * curElem : undefined))
//   .filter((curElem) => curElem !== undefined);
// console.log(evenSquare);

//! 3: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".

// const names = ["hudair", "saad", "younis"];
// const prefixName = names.map((curElem) => `Mr. ${curElem}`);
// console.log(prefixName);

//? Reduce
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator values with the result. The reduce method takes a callback function as its function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
// // Your logic here
// // Return the updated accumulator value
// }, initialValue);

// callback: A function that is called once for each element in the array.
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element begin processed in the array.
// index (optional): The index of the current element begin process.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

const productPrice = [100, 200, 300, 400, 500];

const totalPrice = productPrice.reduce((accum, curElem) => {
  return accum + curElem;
}, 0);

console.log(totalPrice);
