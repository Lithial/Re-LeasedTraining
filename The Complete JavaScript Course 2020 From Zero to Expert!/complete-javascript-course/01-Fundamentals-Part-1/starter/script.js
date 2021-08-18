// let js = 'amazing'

// console.log(40 + 8 + 23 - 10);

// console.log("Jonas")
// console.log(23)

//dont use name as a variable

//dont use capital leters

//be specific


//LECTURE: Values and Variables
const country = 'New Zealand'
const continent = 'Australasia'
let population = 4500000;
console.log(country);
console.log(continent);
console.log(population);

//LECTURE: Data Types

const isIsland = true;
let language;
console.log(typeof (isIsland));
console.log(typeof (language));
console.log(typeof (population));
console.log(typeof (country));

//LECTURE: let, const and var
language = "english";
//isIsland = false; //this wont change because its const

//LECTURE: Basic Operators
let halfPopulation = population / 2;
let populationPlusOne = population + 1;
let moreOrLessThanFinland = population > 6000000 ? true : false;
let moreOrLessThanAverage = population > 33000000 ? true : false;
console.log(halfPopulation);
console.log(populationPlusOne);
console.log(moreOrLessThanFinland);
console.log(moreOrLessThanAverage);

let description = `${country} is in ${continent} and its ${population} speak ${language}`;
console.log(description);

//coding challenge 1 & 2:
let markHeight, markWeight, johnHeight, johnWeight, markBMI, johnBMI, markHigherBMI;

//test data 1
markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);

markHigherBMI = markBMI > johnBMI;
console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);
if (markHigherBMI) {
    console.log(`Marks bmi (${markBMI}) is higher than Johns bmi (${johnBMI})`)
} else {
    console.log(`John's bmi (${johnBMI}) is higher than marks bmi(${markBMI})`)
}
//test data 2
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);

markHigherBMI = markBMI > johnBMI;
console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);
if (markHigherBMI) {
    console.log(`Marks bmi (${markBMI}) is higher than Johns bmi (${johnBMI})`)
} else {
    console.log(`John's bmi (${johnBMI}) is higher than marks bmi(${markBMI})`)
}

//LECTURE: Strings and Template Literals

description = `${country} is in ${continent} and its ${population} speak ${language}`;
console.log(description);


//LECTURE: Taking Decisions: if / else Statements
if (moreOrLessThanAverage) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is below average`);
}
//the second part is irrelevant because we're tiny

//LECTURE: Type Conversion and Coercion
/*
1:4 - yes
2:11 - no this does the math in the first part and then concats the strings in the second part
3:23 - yes
4:false - yes
5:17 - no this converts the string in order
*/
console.log('9' - '5')
console.log('19' - '13' + '17')
console.log('19' - '13' + 17)
console.log('123' < 57)
console.log(5 + 6 + '4' + 9 - 4 - 2)

//LECTURE: Equality Operators: == vs. ===
// let numNeighbours = prompt('How many neighbours does your country have?')
// if (Number(numNeighbours) === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border' in case");
// } else {
//     console.log("No borders");
// }
// === is checking type as well as value.

//LECTURE: Logical Operators

if (language === "english" && population < 50000000 && !isIsland) {
    console.log(`'You should live in ${country}`);
} else {
    console.log(`${country} is not for you`);
}

//LECTURE: The switch Statement
//language = "mandarin"
switch (language) {
    case "chinese":
    case "mandarin":
        console.log('MOST number of native speakers!');
        break;
    case "spanish":
        console.log('2nd place in number of native speakers');
        break;
    case "english":
        console.log('3rd place');
        break;
    case "hindi":
        console.log('Number 4');
        break;
    case "arabic":
        console.log('5th most spoken language');
        break;
    default:
        console.log("Great language too :D");
        break;
}

//LECTURE: The Conditional (Ternary) Operator
population > 33000000 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);
//population = 50000000;
population > 33000000 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);


//CODING CHALLENGE 3

let dolphinsScoreOne, dolphinsScoreTwo, dolphinsScoreThree, koalasScoreOne, koalasScoreTwo, koalasScoreThree, dolphinsAverage, koalasAverage;
//Test data 1
dolphinsScoreOne = 96;
dolphinsScoreTwo = 112;
dolphinsScoreThree = 123;
koalasScoreOne = 109;
koalasScoreTwo = 95;
koalasScoreThree = 106;
dolphinsAverage = (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree) / 3;
koalasAverage = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;

if (dolphinsAverage === koalasAverage) {
    console.log(`Its a draw`);
} else if (dolphinsAverage < koalasAverage) {
    console.log(`Koalas win`);
} else {
    console.log(`Dolphins win`);
}
//Test data bonus one
dolphinsScoreOne = 97;
dolphinsScoreTwo = 112;
dolphinsScoreThree = 101;
koalasScoreOne = 109;
koalasScoreTwo = 95;
koalasScoreThree = 123;
dolphinsAverage = (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree) / 3;
koalasAverage = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;
if (dolphinsAverage === koalasAverage) {
    console.log(`Its a draw`);
} else if (dolphinsAverage < koalasAverage && koalasAverage > 100) {
    console.log(`Koalas win`);
} else if (dolphinsAverage > koalasAverage && dolphinsAverage > 100) {
    console.log(`Dolphins win`);
} else {
    console.log(`No one win`);
}
//Test data bonus two
dolphinsScoreOne = 97;
dolphinsScoreTwo = 112;
dolphinsScoreThree = 101;
koalasScoreOne = 109;
koalasScoreTwo = 95;
koalasScoreThree = 106;
dolphinsAverage = (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree) / 3;
koalasAverage = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;

if (dolphinsAverage === koalasAverage && dolphinsAverage > 100) {
    console.log(`Its a draw`);
} else if (dolphinsAverage < koalasAverage && koalasAverage > 100) {
    console.log(`Koalas win`);
} else if (dolphinsAverage > koalasAverage && dolphinsAverage > 100) {
    console.log(`Dolphins win`);
} else {
    console.log(`No one win`);
}

//CODING CHALLENGE 4
let billValue;
let tip;
let tipPercentage;
let ret;
billValue = 275;
tipPercentage = (billValue >= 50 && billValue <= 300) ? 0.15 : 0.20
tip = billValue * tipPercentage;
ret = `The bill was ${billValue} the tip was ${billValue * tipPercentage}. the total bill was ${billValue + tip}`
console.log(ret)
billValue = 40;
tipPercentage = (billValue >= 50 && billValue <= 300) ? 0.15 : 0.20
tip = billValue * tipPercentage;
ret = `The bill was ${billValue} the tip was ${billValue * tipPercentage}. the total bill was ${billValue + tip}`
console.log(ret)
billValue = 430;
tipPercentage = (billValue >= 50 && billValue <= 300) ? 0.15 : 0.20
tip = billValue * tipPercentage;
ret = `The bill was ${billValue} the tip was ${billValue * tipPercentage}. the total bill was ${billValue + tip}`
console.log(ret)
