// JavaScript Arithmetic Operators
// if you want to work on one problem at a time you can go into the numbers.spec.js file and add .only
// to the describe block like so describe.only("basic addition")
// dont forget to remove it and add it to the next test

function addition(a,b) {
  // returns the sum of both numbers
  return(a+b)
}

function multiplication(a,b) {
  //returns the multiplied sum of two values
  return a*b
}
function division(a,b) {
  // returns a divided sum of two values
  return(a/b)
}
function subtraction(a,b) {
  // returns a subtracted sum of two values
  return a-b
}
function modulus(num1,num2) {
  //returns the remainder
  return num1%num2
}

function lowerThan() {
  // returns a value lower than the other
}

function greaterThan() {
  // returns a value greater than the other
}
function increment() {
  // returns a number incremented by one
}

function decrement() {
  // returns a number decremented by one
}

//Assignment Operators

function assignment() {
  // returns a reassigned number, you cannot use divide here.
}
function additionAssignment() {
  // returns an added number and reassigns it
}
function subtractionAssignment() {
  // returns a subtracted number and reassigns it
}

function multiplicationAssignment() {
  // returns a multiplied number and reassigns it
}
function divisionAssignment() {
  // returns a multiplied number and reassigns it
}
function remainderAssignment() {
  // returns the remainder and reassigns it
}
function digitCount(n) {
  // returns the number of digits in a number
}
module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulus,
  lowerThan,
  greaterThan,
  increment,
  decrement,
  assignment,
  additionAssignment,
  subtractionAssignment,
  multiplicationAssignment,
  divisionAssignment,
  remainderAssignment,
  digitCount
};
