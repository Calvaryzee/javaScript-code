//INTRO TO ARRAYS. 2:14:04
//Arrays are commonly used data structure which provides a collection element in other words a list of items
//in js, each index position known as element can be of any data type. however in real life application, all the elements are usually of the same data type.

//Some of the most commonly used built-in methods for Arrays includes.
//Adding Elements

// const numbers = [5, 4, 3, 2, 1]
//since we have used const to declear this array, we cant reassign 'numbers' to any other value. so the variable 'numbers', references the array in memory.
//and an array is an object. meaning it conatins key:value pairs. the keys here being the index which starts from 0 and ends at 4 in this case. the values are 5, 4, 3, 2, 1.
//though we cant reassign, but we can modify the array

//For Adding element, there are three scenarios. we can add from the end or from the beginning or somewhere in the middle.
//for adding to the end, we will use the ".push()" method.
// numbers.push(7);
// console.log(numbers); //from the console, we can see that "7" is added at the end to the elements in the logged out array.
//using the push method, we can add multiple arguments. lets say numbers.push(7, 8, 9);. and the elements will be added.


//for adding values to the front of the array, we will use the ".unshift()" method.
// numbers.unshift(25, 26);
// console.log(numbers); //the console logs out an updated array with 25 & 26 included in the beginning of the elements.


//For adding to the middle of an array, we will use the ".splice()" method.
// numbers.splice(1, 0, 15, 14);
//the above means, start from the first index position(1), delete nothing(0), then add 15 & 14 from left to right.
// console.log(numbers);// the console ofcourse logs out an updated array.



//FINDING ELEMENTS(PRIMITIVE)
//Arrays can store both primitive and reference data types. by reference datatype we mean objects.
//three main methods to check if an array contains a primitive value. and they are:
//.indexOf(), .lastIndexOf() and .includes().

// const numbers = [5, 4, 3, 2, 1];
//now we wanna find the index of the value "3". i can say:

// const indexOfThree = numbers.indexOf(3); //and this will return the index that 3 is found at starting from left to right.
//if the value that we passed in, in this case 3, is not found in the array, it will return the value -1.
// console.log(indexOfThree);// it returns index 2.
//we can also use bracket notation to achive the same thing. console.log(numbers[indexOfThree]);.


//if we have a duplicate value, remember index number always searchs from left to right. so if we had:
// const numbers = [5, 4, 3, 2, 1, 3];
//here we will use lastIndexOf
// const lastIndexOfThree = numbers.lastIndexOf(3); // we are expecting 5 to be the last index.
// console.log(lastIndexOfThree); //the console logs out 5.



//now we try for a case where we search for a value that does not exist.
// const indexOfTen = numbers.lastIndexOf(10);
// console.log(indexOfTen); //the console returns -1.
//if we try to access this by bracket notation, we will get the value "undefined".

//whenever we use .indexOf or .lastIndexOf, we typically do a conditional statement and checking to ensure the value is not -1 before using it to access that element.
//so we can do
// if (indexOfTen === -1) {
//     console.log('10 is not found in the Array');

// }
//so we can utilise .indexOf or .lastIndexOf with our conditional statement.


//now if we are not utilizing that index value in other to access or change that element, then we can just use the include method which will return a boolean value of true or false depending if that value is found in the array.
// if(numbers.includes(10)) {
//     console.log('10 is included in the array');
// } // the console logs out nothing

//we can also use exclamation mart(!) which reades if the value 10 is not found...
// if(!numbers.includes(10)) {
//     console.log('10 is not included in the array');
// }



//HOW WOULD YOU CHECK IF AN ARRAY CONTAINS A PRIMITIVE VALUE? 
//ANSWER: There are 3main methods we can use, they are: .indexOf(), .lastIndexOf() and .includes().



//FINDING ELEMENTS (REFERENCE TYPE). 2:21:13
//Consider an array of objects below:
const employees = [
    {
        id: 1,
        name: 'Jim'
    },

    {
        id: 2,
        name: 'Micheal Scott'
    },

    {
        id: 3,
        name: 'Pam'
    },

];
//So with this array of objects, using the includes method or indexOf, wont help us find an element as comparing two different
//objects, even if they have the same property, wont be equal as those objects have different memory addresses.
//so instead we will use the .find() method.

// const employee = employees.find()
//the argument to be passed in the (find()) will be a function. in this context, the function will be refered to as a call-back function.
//we call it a callBack function because, we pass in a function as an argument, and it will be involked at a later time.

//this particular type of callBack function for the find() method is refered to as a predicate function.
//meaning that it will return true or false.

//previously i mentioned that functions are objects. so this is what enables us to pass functions around as arguments in JavaScript.

//so we will defined an annonymous function, it will accept an argument(e) that is we specify e as the parameter variable,
//then we add our curly braces and end it with the semi icon.

//now within the codeBlock(curly braces), a predicate function has to return a true or false value.

// const employee = employees.find(function(e) {
//     return e.name === 'Jim'
// });
// console.log(employee);
//so the find() method will return the first element that matches.


//we also have the .findIndex() method.
//this acts the same way except instead of returning the object, it will return the index where the object is found at.
// const employee = employees.findIndex(function(e) {
//     return e.name === 'Jim'
// });
// console.log(employee);



//ARROW FUNCTIONS AS PREDICATE. 2:23:39
//previously we used an annonymous function in order to defined a callBack function. however there is another more modern syntax that is more commonly used and is easy to read and interpret.
//this syntax is known as Arrow Function.

//Recall that traditional functions will look like
// function add(num1, num2) {
//     return num1 + num2;
// } //the above is known as function decoration.

//Another syyntax to accomplish the same thing is the arrow function
// const add = (num1, num2) => {
//     return num1 + num2;
// }

//so remember functions are objects in Javascript. and all of that is being assigned to the "add" variable.
//Arrow function syntax is commonly used for callBack functions.
//when you have an arrow function that has just one statement in the codeBlock(curlyBraces), then you can simplify it.
//you can remove the curlyBraces and put everything on one line
// const add = (num1, num2) => return num1 + num2;

//you can also remove the 'return' statement, because the arrow function knows implicitly that you are returning the expression that follows the arrow.
//const add = (num1, num2) => num1 + num2;
//and the above provides a cleaner syntax to use when using predicate.

//so, instead of this;
// const employee = employees.find(function(e) {
//     return e.name === 'Jim'
// });

//we could just have this;
const employee = employees.find( (e) => e.name === 'Jim'); //this is a cleaner way to accomplish the same thing.
console.log(employee); //console logs out the first element that has the name Jim.

//Question
//how would you defined a function for the .find() method?
//the .find() method is a method that exist for the array class and its used in order to find an object.
//for the argument, you will specify a function. in this case, it will be a predicate function. meaning that it would result to true or false.
//you could use either an annonymous function or an arrow function in order to impliment this.

//what is an arrow function?
//an Arrow function is an alternative syntax to the function declearation syntax.

