# javascript

gonna make a couple of apps. lets go

Progress Tracker
Episode #88

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
