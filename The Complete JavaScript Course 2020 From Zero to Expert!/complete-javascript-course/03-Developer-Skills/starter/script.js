// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 5;

// let things = 'yes';

// const calcAge = birthyear => 2037 - birthyear;
// console.log(x);
//CODING CHALLENGE 1

//function printforcast that takes in arr and logs the string like
//"... temp1 in 1 days... temp2 in 2 days ... temp3 in 3 days..."
//test data 1: [17,21,23]
//test data 2: [12,5,-5,0,4]
//problem break down
/*
for each day add to the string the temperature and the word day + i

*/

function printForcast(arr) {
  let message = '';
  for (let i = 0; i < arr.length; i++) {
    message += `... ${arr[i]}°C in ${i + 1} days`;
  }
  return message;
}
let testDataOne = [17, 21, 23];
let testDataTwo = [12, 5, -5, 0, 4];

console.log(printForcast(testDataOne) + ' ...');
console.log(printForcast(testDataTwo) + ' ...');
