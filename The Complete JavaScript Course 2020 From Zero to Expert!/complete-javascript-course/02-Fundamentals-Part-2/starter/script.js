'use strict'; //important. do this all the time

// //LECTURE: Functions
// function describeCountry(country, population, capitalCity) {
//     console.log(`${country} has ${population} people and its capital city is ${capitalCity}`);
// }

// let finland = describeCountry("Finland", "6 Million", "Helsinki");
// let australia = describeCountry("Australia", "10 Million", "Canberra");
// let newZealand = describeCountry("New Zealand", "4 Million", "Wellington");

// //LECTURE: Function Declarations vs. Expressions

// //function declaration
// function percentageofWorldOne(population) {
//     //(pop / total) * 100
//     return (population / 7900) * 100;
// }
// console.log(percentageofWorldOne(4))
// console.log(percentageofWorldOne(10))
// console.log(percentageofWorldOne(1441))

// //function expression
// let percentageofWorldTwo = function (population) {
//     //(pop / total) * 100
//     return (population / 7900) * 100;
// }
// console.log(percentageofWorldTwo(4))
// console.log(percentageofWorldTwo(10))
// console.log(percentageofWorldTwo(1441))

// //Arrow Function
// const percentageofWorldThree = population => (population / 7900) * 100;

// console.log(percentageofWorldThree(4))
// console.log(percentageofWorldThree(10))
// console.log(percentageofWorldThree(1441))

// //LECTURE: Functions Calling Other Functions
// function describePopulation(country, population) {
//     return `${country} has ${population} million people, which is about ${percentageofWorldOne(population)}% of the world.`
// }
// console.log(describePopulation("New Zealand", 4))
// console.log(describePopulation("Australia", 10))
// console.log(describePopulation("China", 1441))

// //CODING CHALLENGE ONE
// let calcAverage = (scoreOne, scoreTwo, scoreThree) => { (scoreOne + scoreTwo + scoreThree) / 3 }

// function checkWinner(dolphinsAverage, koalasAverage) {
//     if (dolphinsAverage >= koalasAverage && dolphinsAverage > koalasAverage * 2) {
//         return `Dolphins Win ${dolphinsAverage}:${koalasAverage}`
//     } else if (dolphinsAverage <= koalasAverage && koalasAverage > dolphinsAverage * 2) {
//         return `Koalas Win ${koalasAverage}:${dolphinsAverage
//             }`
//     } else {
//         return `No one wins`
//     }
// }
// console.log(checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49)))
// console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)))


// //LECTURE: Introduction to Arrays

// const population = [4, 10, 1441, 6]
// console.log(population.length)
// console.log(`${population.length === 4}`)

// const percentages = [percentageofWorldOne(population[0]), percentageofWorldOne(population[1]), percentageofWorldOne(population[2]), percentageofWorldOne(population[3])]
// console.log(percentages)

// //LECTURE: Basic Array Operations (Methods)

// const neighboursArray = ['Fiji', 'Samoa', 'Hawaii', 'Australia'];
// console.log(neighboursArray)

// neighboursArray.push('Utopia');
// console.log(neighboursArray)

// neighboursArray.pop();
// console.log(neighboursArray)

// if (!neighboursArray.includes('Germany')) {
//     console.log('Probably not a european country')
// }
// neighboursArray[neighboursArray.indexOf('Fiji')] = 'The republic of Fiji'
// console.log(neighboursArray)
// //CODING CHALLENGE TWO
// function calcTip(billValue) {
//     let tip;
//     return (billValue >= 50 && billValue <= 300) ? billValue * 0.15 : billValue * 0.20
// }
// const billValues = [125, 555, 44]
// const tips = []
// const total = []
// for (let i = 0; i < billValues.length; i++) {
//     console.log(calcTip(billValues[i]));
//     tips.push(calcTip(billValues[i]));
//     total.push(billValues[i] + tips[i]);
// }
// console.log("tips:", tips);
// console.log("totals:", total);

// /*  return `The bill was ${billValue} the tip was ${tip}. the total bill was ${billValue + tip}`*/
// //LECTURE: Introduction to Objects
// const myCountry = {
//     country: "",
//     capital: "",
//     language: "",
//     population: "",
//     neighbours: [],
//     describe: function () {
//         console.log(`${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
//     },
//     checkIsland: function () {
//         this.isIsland = (this.neighbours.length == 0) ? true : false;
//     }
// }
// myCountry.capital = "Wellington";
// myCountry.country = "New Zealand";
// myCountry.language = "English";
// myCountry.population = 4;
// myCountry.neighbours = [];

// //LECTURE: Dot vs. Bracket Notation
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry.population);
// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);
// //use bracket notation for when you have to compute to pull the value
// //LECTURE: Object Methods
// //done above

// //CODING CHALLENGE 3
// const mark = {
//     name: 'mark smith',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi;
//     }
// }
// const john = {
//     name: 'john miller',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi;
//     }
// }


// const higherBMI = (mark.calcBMI() > john.calcBMI()) ? john : mark;
// if (higherBMI == mark) {
//     console.log(`${john.name}'s bmi (${john.bmi}) is higher than ${mark.name}'s bmi (${mark.bmi}))`)
// }
// else { console.log(`${mark.name}'s bmi (${mark.bmi}) is higher than ${john.name}'s bmi (${john.bmi}))`) }

// //LECTURE: Iteration: The for Loop
// // for (let i = 0; i < 50; i++) {
// //     console.log(`Voter number ${i} is currently voting`);
// // }
// //LECTURE: Looping Arrays, Breaking and Continuing
// const populations = [10, 1441, 332, 83];
// const percentagesTwo = [];
// for (let i = 0; i < populations.length; i++) {
//     const percentOfPop = percentageofWorldOne(populations[i]);
//     percentagesTwo.push(percentOfPop);
// }
// console.log(percentagesTwo);

// //LECTURE: Looping Backwards and Loops in Loops
// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia'],
// ];
// for (let i = 0; i < listOfNeighbours.length; i++)
//     for (let y = 0; y < listOfNeighbours[i].length; y++)
//         console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

// const percentagesThree = [];
// let i = 0;
// while (i < populations.length) {
//     const percentageOfPop = percentageofWorldOne(populations[i]);
//     percentagesThree.push(percentageOfPop);
//     i++
// }
// console.log(percentagesThree);

//CODING CHALLENGE 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(billValue) {
    let tip;
    return (billValue >= 50 && billValue <= 300) ? billValue * 0.15 : billValue * 0.20
}
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}
console.log(bills, tips, totals);
function calcAverageForBills(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}
console.log(calcAverageForBills(totals));