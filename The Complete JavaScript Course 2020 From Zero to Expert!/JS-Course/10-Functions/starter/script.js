'use strict';

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //es5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(bookings);
// };

// createBooking('LH123');
// createBooking('LH123', 3);
// createBooking('LH123', undefined, 3);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas',
//   passport: 5646543246546,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 5646543246546) {
//     alert('Check in');
//   } else {
//     alert('wrong passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };
// newPassport(jonas);
// checkIn(flight, jonas);
///////////////////////////////////////
// Functions Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// const transformer = function (str, fn) {
//   console.log(`origional string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`transformed by ${fn.name}`);
// };

// transformer('javascript is the best', upperFirstWord);
// transformer('javascript is the best', oneWord);
// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const greet = greeting => {
//   return name => {
//     console.log(`${greeting}, ${name}`);
//   };
// };
// const greeterHey = greet('hey');

// greeterHey('James');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}, name` });
//   },
// };
// lufthansa.book(239, 'James');
// lufthansa.book(635, 'Mike smith');
// console.log(lufthansa);
// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// //doesnt work
// //book(231, 'Sara smith');
// book.call(eurowings, 231, 'Sara smith');
// console.log(eurowings);
// book.call(lufthansa, 231, 'Mary smith');
// console.log(lufthansa);

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// const buyPlane = lufthansa.buyPlane;
// //bind the this to the right plane
// const lufByPlane = buyPlane.bind(lufthansa);
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //partial application
// //used to preset variables in functions. kind of like overloading
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.23);

// console.log(addVat(200));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVat2 = addTaxRate(0.23);
// console.log(addVat2(200));

//CODING CHALLENGE 1
/*
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/

// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//   //this creates an array of 4 0s
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let str = `${this.question} \n`;
//     for (const s of this.options) {
//       str += `${s} \n`;
//     }
//     str += `(Write option number)`;

//     const answer = Number(prompt(`${str}`)) || -1;
//     if (answer >= 0 && answer <= this.options.length) {
//       this.answers[answer]++;
//     }
//     console.log(this.answers);
//     return this.displayResults(null);
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     } else {
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'array');

// //[5, 2, 3]
// //[1, 5, 3, 9, 6, 1]
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
