// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct.
// Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// DESCRIBE the code as it would be run, then let us know what the OUTCOME of the
// console.log statement will be.


// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. If it is,
// 'yes' will be console.logged.
// OUTCOME:
// 'yes' is what is logged.

// CODE:
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// 1.
// DESCRIPTION
// We make a variable called name and make Dane the name.
// Then we check if name exactly matches Mary. If its true,
// 'Hi, Mary!' will be console.logged. If its false, then
// 'How do you do?' will be console.logged. 
// 
//
//
// OUTCOME:
//'How do you do?' is what is logged.

// CODE:
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 2.
// DESCRIPTION:
// We make a variable called secret that we dont initialize.
// we make another variable called code and set it to 123 as a number. 
// Then we check if code is exactly 123. If it is, secret is given the 
// string value 'super'. And code is multiplied by 2. We also check if 
// code is great than 250. If it is, secret is given the string value 
// 'duper'. The console logs the value of secret.
// OUTCOME:
// 'super' was console.logged.

// CODE:
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 3.
// DESCRIPTION
// We make a variable named isStudent and give it a boolean value of true. 
// We make another variable named age and set it to 34 as a 
// number. And then a final variable called zip and set it to
// 55407 as a number. Then we check if isStudent is exactly true 
// and zip is greater than 80000. If it is, 'You're a student on
// the West Coast!' will be console.logged. If it isn't true, then we check if
// isStudent is exactly false or age is less than 30. And if 
// either is true, 'What are your hobbies?' is console.logged.
// if neither are true, then we check if isStudent is exactly 
// true. If it is, then 'Welcome to Prime!' is console.logged. If
// that is not true, then 'How about the weather?' is
// console.logged.
// OUTCOME:
//'Welcome to Prime!' is console.logged

// CODE:
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

// CODE:
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 4. 
// DESCRIPTION:
// We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// CODE:
// FIX - colorOne is set to red and colorTwo is set to blue, colorOne should
// be set to blue and colorTwo should be set to red.
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
// Fix - colorTwo should also be set to purple.
  colorOne = 'purple';
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 5.
// DESCRIPTION:
// We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// CODE:
/*
let temp = 40;
const time = 4;
// FIX The logical operator should be set to && instead of the ||.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 6.
// DESCRIPTION:
// We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// CODE:
/*
let age = 21;
const minAge = 21;

// FIX minAge <= age check s if minAge is less than or equal to age
// and the instructions state to check if minAge is greater than or equal
// to age and so the fix is minAge >= age.
if(minAge <= age) {
  // FIX this logs 'no entry' but the instructions say if the conditions
  // evaluates to true, log 'enter'.
  console.log('no entry');
} else {
 // FIX This logs 'enter' but the instructions doesn't have an else
// statement and should only log 'enter' if the condition 
// minAge >= age evaluates to true.
  console.log('enter');
}
*/
