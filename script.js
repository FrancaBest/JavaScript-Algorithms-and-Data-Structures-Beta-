// Learning javaScript 

console.log("Running Javascript")
console.log(1 + 2)
console.log(2+4+10);
function a() { return 100 }
console.log(a());
function n() {return 40000}
console.log(n());

//Building a pyramid Generator

console.log("    #   ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ######## ");
console.log("########## ");

// Variable naming follows specific rules: names can include letters, numbers, dollar signs, and underscores, but cannot contain spaces and must not begin with a number.

// let character;

// Assigning a value to a variable at the moment of its declaration is known as initialization.

let character = "Hello";
console.log(character);

character = "World";
console.log(character);

// Camel case means that the first word in the name is entirely lowercase, but the following words are all title-cased. Here are some examples of camel case:

let variableOne;
let secondVariable;

// You can also assign the value of a variable to another variable. For example:

let secondCharacter;
secondCharacter = "Text" ;
console.log(secondCharacter);

secondCharacter = character;
console.log(secondCharacter);

// count variables, hen using a number value, you do not use quotes.

let count = 8;
console.log(count);

console.log(count + 100 );
console.log(count - 3);
console.log(count * 20);
console.log(count / 2);

// An array is a non-primitive data type that can hold a series of values e.g.

let array = [];
let rows = ["Franca", "Banku", "Agbor"];

// You can access the values inside an array using the index of the value. An index is a number representing the position of the value in the array, starting from 0 for the first value.

console.log(rows[0]);
console.log(rows[1]);
console.log(rows[2]);

// Arrays are special in that they are considered mutable. This means you can change the value at an index directly

rows[2] = 10;
console.log(rows);

let cities = ["London", "New York", "Paris"];
console.log(cities);

cities[2] = "Germany";
console.log(cities);



// You can make use of the .length property of an array - this returns the number of elements in the array. 

console.log(rows.length);
console.log(rows.length -1);
console.log(rows.length -2);

// You can also add new values to an array using the.push() method.
rows.push(100)
console.log(rows);  

