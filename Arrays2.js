//REMOVING ELEMENTS. 2:26:17
//so once again, lets create an array
// const numbers = [1, 2, 3, 4, 5]
//recall to add elements to the array, we have .push() [to add to the end], .unshift() [to add to the beginning] and .splice() [to add to somewhere in the middle].
//For removing elements, we have
//.pop(), to remove from the end
//.splice, to remove from somewhere in the middle
//.shift(), to remove from the beginning.
//we show example of each of them.
// const lastElement = numbers.pop() //this will remove the last element in the array "numbers". in this case its 5. stored in the variable "lastElement".
//lets output the last element.
// console.log(`lastElement: ${lastElement}`);


//if i wanna remove the first element, i will say
// const firstElement = numbers.shift()
// console.log(`firstElement: ${firstElement}`);// recall that we used backticks(``) and template literals here.
// console.log(firstElement);
// console.log(numbers);


//we can add a space between the two outputs in the console. that is lastElement and firstElement. by adding \n to the first console.
//i.e; console.log(`lastElement: ${lastElement} \n`);
//this will create a space between lastElement and firstElement in the console.
//when js encounters \n, he knows that it means to create a new line.

//if i wanna remove from the middle of an array, i'd use the splice method. recall .splice() method is also used to add to the middle of an array.
//so .splice() method is used both to add or remove from the middle of an array.

// const middleElement = numbers.splice(1, 1) // for the arguments passed into the bracket, the first agument tells us the index to start from. the second argument tells us how many number of elements to remove starting from the index number chosen.
// console.log(`middleElement: ${middleElement}`);




//EMPTYING AN ARRAY
//we've covered how to add and remove elements from an array. now if we wanted to clear all the elements of an array, there are different ways that we can do that.
//one way is to use a while-loop. we can say
// while (numbers.lenght > 0)
//     numbers.pop(); // so it appear we remove from the end.
//but if the number of element in the array was large, this will be an inefficient way to do so.


//We look at it from a different way
//recall we covered the numbers.lenght property. we can also use this property to assign a value.
//so if we assign numbers.lenght to 0, this will clear the elements of the array.
// numbers.length = 0;
// console.log(numbers);// from the console, we can see that the array is empty.


//Now we will use the splice() method which can be used for adding and removing elements.
// const deletedNumbers = numbers.splice(0, numbers.length);
// console.log(`deletedNumbers: ${deletedNumbers}`);


//Now, another way we can do that is simply defining numbers to a new array.
// numbers = [];
//so remember an array is an object. so when we assign the above to a new array, the previous one will be garbbage collected.
//but since i used the const keyword to initially assign numbers, that means i cannot reassign it.
//unless i change the const to "let"


//another thing to be aware of.
//if we had; let anotherArray = numbers; then both numbers and anotherArray will be referencing the same array in memory. so none will be garbbage collected.




//COMBINING OR SLICING ARRAYS.
//Let us say we have two arrays and we wanna combine them into one array.

// const exampleNumbersA = [1, 2, 3];
// const exampleNumbersB = [4, 5, 6];
//now i can combine them using the concat method.
// const combinedArray = exampleNumbersA.concat(exampleNumbersB);
// console.log(combinedArray); // from the console, we can see it has created a new array.


//Now we can also slice the array. meaning we can specify the start index and the end index. and it will return a new array with the elements found within that range.
//the slice method will not affect the original array.
// const firstSlice = combinedArray.slice(0, 4); //the second agument is exclusive. meaning, not included. here the second agument is 4.
// console.log(firstSlice);
//if you are perfoming with primitive values, then the elements will be passed by copy. However, if you are dealing with objects, then the elements will be passed by reference.

//QUESTION
//How would you combine two arrays?
//How woould you get a slice of an array?





//THE SPREAD OPERATOR
//This is another way to combine two arrays
//we have discussed this before. the spread operatot can be used to copy the property of an object or the elements of an array.
//so rather than using the concat method, i can say...
// let combined = [...exampleNumbersA, ...exampleNumbersB];
// console.log(combined); //the console logs out a combined array.
//this syntax also provides more flexibility than the concat method as we can add elements in between the two values.
//meaning i can say something like; [...exampleNumbersA, 9, ...exampleNumbersB, 10]; and it will add both 9 and 10 at their respective places.



//Also, rememebr this. lets say
// let a = [1, 2];
// let b = a; //so arrays are objects. which means they are passed by reference. both a and b will reference the same array in memory.
//we can also utilize the spread operator in other to make a copy of an array. so instead of saying let b = a, we say;
// let b = [...a]; //so this creates a new array and spreads the content using (...).
// console.log(b); //we can see that from the console.


//QUESTION
//WHAT IS THE SPREAD OPERATOR?
//The spread operator refers to using 3dots(...) in order to copy over an object. this could be refered to an object literal and copy them over the property
//it can also refer to the elements of the array.(this defination is not clear to me yet. lol)






//ITERATING OVER AN ARRAY. 2:34:48
//to iterate over an array, you can use the for-of-loop that we covered previously. Recall;
// const numbers = [1, 2, 3, 4, 5];
// for (let number of numbers)
//     console.log(number);


//now there is another built-in method in every array class known as .forEach(). the agument you will pass into the method is a callBack function.
//so, if we say;
// numbers.forEach((number) => {
//     console.log(number);
// });//in the agument, we can pass in the arrow function. specifying the 'number' then the arrow(=>)
//if we output that, we get the same result.

//since the codeBlock(curly braces) only includes one statement, we can put everything on one line to simplify it.
//it will then look like this
// numbers.forEach((number) => console.log(number));
//if the arrow function only has one parameter, you can remove the parenthesis around it. 
//in this case, the only parameter is "number". so it should look this way below;
// numbers.forEach(number => console.log(number));


//The forEach method also accepts an optional certain parameter, which takes into account the index position in the array for the current element.
//so if we add the bracket back and decide to impliment the index of each element, then we can utilize that when we console log it. we should have;
//we use tamplate string(``) in the console.loh
// numbers.forEach((number, index) => console.log(`At index, ${index}: ${number}`));


//QUESTION
//How would you iterate through an array?





//JOINING ARRAYS
//To transform an array into a string, the join method can be utilized.
//so if we initialize an array, lets say;
// const numbers = [1, 2, 3, 4, 5];
// const joinedNumbers = numbers.join(', '); //the join method allows us too specify a seperator as an agument, and this seperator will be placed in between the elements.
//Here comma(,) is our seperator. (' ') signifys taking in a string while comma is our seperator.
// console.log(joinedNumbers);
//From the console, the array has being outputted as a string where every element is seperated by comma.





//on the flipside, the SPLIT method is available for strings. enabling the reversal of this process by transforming a string into an array.
//this will not alter the original string. rather, it will return an array.
const courseName = 'JavaScript for beginners';
//then we can split up the words into parts. then we can say;
// const part = courseName.split(' '); // in the agument, we specified the seperator as an empty string( )
//so because we specified an empty string as a seperator, js will go from left to right of (JavaScript for beginners) and whenever it encounters an empty string, it will perform a split.
//so the string will be converted into an array. JavaScript will be at the 0 index. for will be at index 1. and beginners will be at index 2.
// console.log(part);

//To show example of how this can be useful, consider the term of a URL(Uniform Resource Locator) slug.
//so this refers to having a discriptive path in your url
//the url slugs words are seperated by hyphen. so  in order to perform a url slug, we can use the join method as per transforming an array into a string, and the seperator will be a hyphen(-).

//so lets say 'JavaScript for beginners' is what we wanna include in our url. and ofcourse we already performed a split and stored it in the array 'part'. at such 'part, is an array
//we now use the join method to transform the array into a string(constructing our urlSlug) using hyphen as our seperator. we can say;
// const urlSlug = part.join('-');
// console.log(urlSlug); // the console loges out (JavaScript-for-beginners).


//Let's say you wanna make every word in the sentence lowercase, the simplest way to do that will be to use the toLower case method in the string class.
//so before performing the split, we can do the below
// const lowercaseCourseName = courseName.toLowerCase();
//then we can utilise the variable " lowercaseCourseName " for performing the split
// const part = lowercaseCourseName.split(' ');
// const urlSlug = part.join('-');
// console.log(urlSlug);





//Method Chaining 2:39:46
//We can clear up our code even more.
//We can clean up the two lines below by utilizing something called METHOD CHAINING. thereby forming the two lines into one line,

//const lowercaseCourseName = courseName.toLowerCase();
//const part = lowercaseCourseName.split(' ');

//the above line can be formed into;

// const lowercaseCourseName = courseName.toLowerCase();
// const part = lowercaseCourseName.split(' ');
// const part = courseName.toLowerCase().split(' ');   // courseName.toLowerCase is still in the string data type.
//the above enables us toimpliment the same functionality in one line

//often time when we do method chaining, we will add the method calls to their own line. so;
const part = courseName
    .toLowerCase()
    .split(' ');
//so when performing method chaining, and calling one method after another, we are often to put each method on their own line and we are above to do this because they are all the same datatype.
//in this case, the string data type.

const urlSlug = part.join('-');
console.log(urlSlug);


//QUESTION
//How does the join method work?