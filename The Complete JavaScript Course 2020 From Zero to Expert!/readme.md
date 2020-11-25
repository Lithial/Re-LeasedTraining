# javascript

gonna make a couple of apps. lets go

Progress Tracker
Episode #97

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
