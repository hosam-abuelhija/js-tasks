/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/

let x = 250
const y = 0.025
const a = x*y
console.log (a)

/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

const num = [1, 7, 9, 45];
const names = ["str", "alex", "moh"];
const the = ['the', 'fox', 'over', 'lazy', 'dog'];
console.log (num, names, the);

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits=["Tomato","Banana","Watermelon"];
let b = fruits.indexOf("Banana");
let t = fruits.indexOf("Tomato");
console.log (b, t);
/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

const food = ["pizza", "burger"];
const sports = ["basketball", "table tennes", "diving"];
const movie = ["leon the professional", "interstellar"];
console.log(food, sports, movie);

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
const gg = ["t","u","g","x"];
var l = gg [0];
console.log (l)

/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
const kk = ["t","u","g","x"];
var q = kk[kk.length-1];
console.log(q)

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9]
array.shift();
array.shift();
array.shift();
array.unshift(8);
array.unshift(6);
array.unshift(4);
array.unshift(3);
array.unshift(1);
array.push(10)
console.log(array)
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5];
console.log(array2.push(1));
console.log(array2.unshift(2));
console.log(array2.shift());
console.log(array2.pop());
/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
arr1 = arr1.map(value => value + 4);
arr1.sort()
arr1 = arr1.map(value => value - 4);
console.log(arr1)