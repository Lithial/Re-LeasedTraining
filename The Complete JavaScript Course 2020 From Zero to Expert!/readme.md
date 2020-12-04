# javascript

gonna make a couple of apps. lets go

Progress Tracker
Episode #294 - but its broken

//section 2
Javascript data types
Number
String
Boolean

Undefined - empty value
Null - also empty value
Symbol - value that is unique and cannot be changed
Bigint - larger ints than the numbers can hold

dynamic typing woo

value has type not variable
can change on the fly

let is for mutable variables
const is for immutable variables
var is not used any more - don't use this at all any more. its pre es6

type coercion is forcing a let to be a specific type

falsey values are values that are false when converted to a bool
5 falsey values
0, "", undefined, null, NaN
everything else is a truthy value

//section 3
'use strict'; top of page. this is super important
forces a bunch of restrictions to stop you breaking your code later

Arrays can be mutated even when declared with const.

//section 4
prettier and node live server are interesting
ooh prettier works on markdown. not sure how i feel about that
Recommends Codewars for getting better at coding.
You will never know everything about web dev
Also recommends 100days of code

//Section 7
can selector by id or class with . or # | . for class | # for id
DOM - document object model.
Dom is a tree

document
.querySelector('.check')
.addEventListener('click', function () {});

this is important for making buttons work
document.querySelector('.number').style lets you manipulate styles using camelCase values and strings
dont forget i set query as a snippet for document.querySelector

query.classList.add/remove can easy add and remove css classes to change looks
this can be comma seperated arrays.

//Section 8
first class functions is when functions are variables
JIT just in time compilation. code is compiled and then executed immediately.

Section 8 should be revisted with more brain or more coffee

so the backend of js is kind of interesting
scope is weird and prone to being messed up because the creator of js never thought it would get this big.

the this keyword acts how it wants and its up to each person to intuit how it works

hoisting is a byproduct of early creation and its one of those features that can't be removed because its so ingrained even though everyone hates it

function declarations get hoisted to the top of the scope but arrow functions dont so they end up undefined if you try to call them before theyre initialised

this keyword in an arrow function points to the lexical scope.
this keyword in an object points to the object
can copy functions from one object to another like theyre variables
arrow functions on objects use the this keyword of the object above them which is usually the global scope
Reiteratting why you shouldn't use var.
can cheat the this keyword in by referencing it in a variable where you want it and then calling it
arguments key word in the function lets you add more args to a function than is declared and then use those
copying objects is like pointers

Object.assign lets you copy objects by merging an empty object with the one you want to copy
but it doesnt work on objects in objects
This is called deepcloning and isnt covered until later

//section 9
array destructuring is interesting
const arr = [2,3,4];
const [x,y,z] = arr
this lets you assign the values to the arrays
you can also skip values like
[x,,y] = arr for 2 & 4
this lets you return more than one variable from a function!!

you can also destructure inside an array
const nested = [2,4,[5,6]]
const [i,,[j,k]] = nested

it works on objects as well but the variables have to be the exact name of the objects variables you want
const {name,openingHours,categories} = restaurant

you can also rename them on the fly
const {name: restaurantName, openingHours:hours, catagories:tag} = restaurant

You can also set default values using =default
and you can combine them
const {menu = [], starterMenu:starter=[]} = restaurant

Mutating variables
let a = 111;
let b = 999;
const obj = {a:23, b: 7, c: 14};
({a,b} = obj) curly braces are requred to make this work.

objs within objs
const {fri:{open,close}} = openingHours;

can do destructuring in function params
like in dart

---

The spread operator
expands the array into all its elements
for example
instead of [1,2,arr[0],arr[1],arr[2]]
you can do [1,2,...arr]
the spread operator can only be used where you put values seperated by commas because it doesnt make new values.

can also use it to join two arrays into a new array
const newArray = [...starterArr, ...mainMenu]

interables are arrays, strings maps and sets but not objects except now it can be since 2018.
means you can use spreads on strings.
can also use it to shallow copy objects instead of using obj.assign
spread is used on the right side of the array or obj

---

Rest Operator
this does the opposite of the spread operator but looks the same
Rest is used on the left side of the assignment
const [a,b,...others] = [1,2,3,4,5]
Will take the rest of the variables in the destructuring and make them into an array so itll print like [1,2,[3,4,5]]
can also do some fancy bullshit like this
const [pizza, , risotto, ...otherFood] = [...mainMenu, ...startmenu] to pull only the information you want and push the rest into another array

---

Shortcircuiting
|| &&
can use any data type, return and datatype and do short circuiting
In the case of || will return the first truthy datatype
super useful for setting default values
const guests = numGuests || 10
be careful when the expected value is 0 because 0 is falsey

&& operator
opposite of the or
returns the first falsey value or the last value

Nullish Coalllesing Operator
nullish values are null and undefined. doesnt include 0 and ""
??
only nullish values will short circuit

---

Forof loops
forof loops give you just the item in an array using
for (const item of allPlayers) {
console.log(item);
}
if you do
for (const item of allPlayers.entries()) {
console.log(item);
}
you also get the index
then you can destructure it and do
for (const [i,item] of allPlayers.entries()) {
console.log(`${i + 1}: ${item}`);
}

---

Enhanced Object Literals
With enhanced obj literals you can short hand attaching objects to other objects
Can use computation in obj property names

---

Optional Chaining
adding ? to a property means it only continues if the property exists

You can loop objects using object.key and object.values

---

Sets
Set is a collection of unique values
uses .size instead of .length
can also use .has to check if something exists in the set
.delete lets you delete a value
cant pull from it like an array because there are no indexes
its only about knowing if a value is in a set

---

Maps
const rest = new Map()
maps let you do key value pairs
can chain .set on maps
you can easily convert from objs to maps using objects.entries()

When should you use each datatype
Simple list = array or set
key value pairs = obj or map

arrays when you need an ordered list of values that might contain duplicates and when you need to manipulate data

sets when you need to work with unique values
or when high performance is really important

objects
easier to write and access
use when you need to include functions
used when working with json

maps
better perforance and can have any data type
easier to iterate
easy to compute size

strings can be searched for words and letters like arrays using indexof
slice takes 2 variables or 1 | start |end but end is excluded
negative values will pull it from the end
all string functions return strings
Remember method chaining

//section 10
you can skip default params using undefined
be specic if your changing variables in function params

First class functions
functions are values
but also objects

Higher order functions
a function that recieves another function
or one that returns another function

you can assign the this keyword
using function.call('thing to this',..otherargs)
you can also use function.apply(thing, arrOfArgs)
function.bind will create a new function where the param is always the this keyword.
bind also sets in stone all the params passed in
doing this is called partial application

Immediately invoked function expressions
(function(){
console.log("this will never run again")
})()

Closures
Happens in certain situations
A closure makes a function remember all the variables that existed at its creation
the variable a function is assigned to remembers the variables in the function even when the function is passed
we don't create these manually nor can we access these variables.

Section 11
array.slice works basically how the string one does
and can be chained

splice changes the origional array instead of making a new one.
splice is often used to remove values from an array rather than returning anything
reverse mutates the origional array
concat joins two arrays
Don't forget to look up things on mdn when you get stuck
every foreach loop has access to the item, index and array if you declare them in that order
Maps are the same with the same order (value key map)
Sets are the same but the value and key are the same and they dont have indexes
\_ for throwaway variables exists in JS
insert adjact html is interesting

map filter and reduce
map does things and returns a new array
filter filters objects by the params and makes a new array
reduce adds all the elements together into one number
find does what it says but only returns the first element in the boolean expression passed in
some lets you do includes but with a condition like checking if something in an array is above somethinge
every lets you check if every value in the array matches the critera
flat is a new method that combines arrays of arrays into one array
flat map is the more efficient one level one version for maps
sort takes 2 values. imagine them like 2 consequtive values. how theyre sorted in the callback is how the array will sort

below 0 returns a,b
above 0 returns b,a

![arrays](https://files.slack.com/files-pri/T032U5LE7-F01FF2U6BDL/image.png)

//section 12
numbers in js are always floating point
isfinite is the best way to check if something is a number
math.floor is better than math.truc coz it deals with negatives better
n at the end of a number means bigint

Intl is a localisation library

---

node lists are static but html collections live update
queryselector is the modern way to do it
css custom variables are a thing

//Section 14
Object oriented Programming
Abstraction
Ignoring or hiding details that dont matter, allowing us to get an overvierw perspective of the thing we're implementing instead of messing with details that dont really matter to our implementation

Encapsulation.
Keeping properties and methods private inside the class so they are not accessible from outside the class. Some methods can be exposed as a public interface. (API)

Inheritance.
Makes all properties and methods of a certain class available to a child class, forming a heirachical relationship between classes. this allows us to reuse common logic and to remodel real-world relationships

Polymorphism
a child class can overwrite a method it inherited from a parent class

Classes are not hoisted
Classes are also first class citizens
The body of a class is always executed in strictmode
classes can use extends and super for inheritence
To chain methods, they have to return the obj theyre from

Mapty
Planning
User stories

- a description of the apps functionality from the users perspective
- common format As a [type of user], i want [an action] so that [a benefit]

  - As a user, i want to log my running workouts with location, distance, time, pace and steps/minute so that i can keep a log of my running
  - As a user, i want to log my cycling workouts with location, distance, time , speed and elevation gain, so i can keep a log of all my cycling
  - As a user, I want to see all my workouts at a glance, so i can easily track my progress over time
  - As a user, i want to see all my workouts on a map so that i can eailty check where i work out the most
  - As a user, I want to see all my workouts when i leave the app and come back later, so that i can keep using the app over time

Features

- A map where user clicks to add new workout
- Geolocation to display map at current location
- Form to imput the distance time pace and steps/minutes
- Form for elevation gain
- display all the workouts in a list
- Display all the workouts on the map
- Store the workout data in the browser using the local storage api.
- On page load, read the saved data from local storage and display

  Flow chart

  - Always a good idea to start a flowchart with events like page loads.
    Architecture

- not required to be complete at start
- can be worked out as you learn
  Development

//Modules
module pattern
write a function usually an iife
Make it return an object that contains the things you want exposed to the outside

most important thing is to write simple clean code
Use very descriptive names.
Use DRY
Dont use Var
Use Strong type checking ===
dont use more than 3 params in your function
return the same data type recieved
use arrow functions where it makes the code more readable

Use es6 classes
implemenet method chaining
encapsulate data and done mutate it from outside the class
do not use arrow functions as methods in regular objects

Avoid writing nested code
use early return (guard clauses)
use ternary operators where you can
Use multiple ifs instead of if/else
avoid loops where possible.

Consume promises using async await where possible
when possible run promises in parallel
handle errors and promise rejects

two different ways of writing code
Imperative

- Programmer explains how to do things.
- We explain every step to the computer
- Example step by step recipe of a cake

Declaritive

- programmer tells what to do
- we simply describe the way the computer should achieve the result
- the how gets abstracted away
- description of a cake

why do we need an architecture

- we need structure
- maintainability
- expandability

Frameworks usually do architecture for you
The components of an archtecture

- business logic
  - Code that solves the actual business problem
  - Directly realted to waht business does and what it nees
  - examples include: sending messages, storing transtaions, calculating taxes etc
- state
  - what stores all the data in the browser
  - should be the single source of truth
  - ui should be kept in sync with the state
  - state libraries exist (like redux)
- http library
  - makes and recieves ajax requests
  - optional but almost always necessary in real world apps
- application logic (router)
  - code that is only concerned about the implementaiton of application itself
  - Handles navigation and UI events
- presentation logic (ui layer)
  - code that is concerned about the visible part of the application
  - essentially displays application state

Model view controller MVC architechture

model is the business logic and state. also contains the http library

controller is the application logic.

view is the presentation logic

model and view should not know they exist
bridged by the controller
