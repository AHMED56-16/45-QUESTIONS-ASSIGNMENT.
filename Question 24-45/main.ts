// Equality with strings
console.log("Tests for equality and inequality with strings:");
console.log("apple" == "apple"); 
console.log("apple" == "Apple"); 

// Using the lower case function
console.log("Tests using the lower case function:");
console.log("Apple".toLowerCase() == "apple"); 

// Numerical tests
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:");
console.log(10 > 5); 
console.log(2 < 1); 
console.log(10 >= 10); 
console.log(2 <= 1); 

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); 
console.log(true || false); 

// Test whether an item is in a array
let fruits:string[] = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); 

// Test whether an item is not in a array
console.log("Is 'mango' in fruits?");
console.log(fruits.includes("mango")); 