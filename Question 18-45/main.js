//Store the locations in a array. Make sure the array is not in alphabetical order.
var placesName = (['Kingdom of Saudi Arabia', 'England', 'United Arab Emirates', 'Qatar', 'India']);
// Print your array in its original order.
console.log(placesName);
//Print your array in alphabetical order without modifying the actual list.
var orderedList = placesName.slice();
var inAlphabaticalOrder = orderedList.sort();
console.log(inAlphabaticalOrder);
//Show that your array is still in its original order by printing it.
console.log(placesName);
// Print your array in reverse alphabetical order without changing the order of the original list.
var reverseAlphabaticalOrder = orderedList.reverse();
console.log(reverseAlphabaticalOrder);
//Show that your array is still in its original order by printing it again.
console.log(placesName);
//Reverse the order of your list. Print the array to show that its order has changed.
var reverseArray = placesName.reverse();
console.log(reverseArray);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
var reverseArray2 = reverseArray.reverse();
console.log(reverseArray2);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
var sortedArray = placesName.sort();
console.log(sortedArray);
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var sortedArray2 = sortedArray.reverse();
console.log(sortedArray2);
