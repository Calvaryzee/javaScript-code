//FILTERING AN ARRAY 2:50:13
//one of the most versatile built-in method for arrays in js is the filter method.
//this method is designed to go through an array and extract elements that meet a specific condition.
//returning a new array that comprise only those elements.
//its particularly useful for creating subsets of an array that matches certain criteria
//so let's consider an array of numbers
const numbers = [1, 2, 3, 4, 5, 6];
//if we wanna filter the arrays so that we only have the even numbers, we can use the filter method.
const evenNumbers = numbers.filter(number => number % 2 === 0);
//so the filter method works by accepting a callBack function. and this function acts as a test often called a predicate function, then returns a boolean value. true or false.
//for each of the element in the original array, the filter method calls this callBack function. and if the callBack function returns true for an element, that element is included in the new array returned by filter.
//if false, the element is excluded.

//so from the above we know that for each element o fthe array if number % 2 === 0 is true, the element will be included in the new array 'evenNumbers'.
console.log(evenNumbers)//even numbers form our new array.



//LETS LOOK AT A MORE COMPLEX EXAMPLE INVOLVING AN ARRAY OF OBJECTS WHICH IS A MOST COMMON USE-CASE 2:51:34



