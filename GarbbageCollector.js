// in programing language like c++, when you create an object, you have to allocate memory and deallocate
//but in languages such as JS, Csharp and Java, we dont have this concept. so you dont have to explicitely deallocate memory.
//the jS languuage has a gabbage collector. which means it will self merge itself and find the variables that are no longer being used in our program and it will inteligently free up that memory.



//BUILT-IN MATH FUNCTIONS. 2:00:30
//In JS, we have a built-in class called MATH.
//This methods help us do mathematical calculations and is often utilized in programming interviews
//refer to developer.mozilla.org, search for math, clic on the first recommendation, read the documentations and view the various methods that are contained.
//we discuss the most comonly used ones. open up the panel and type node.
//Math.round(3.14) rounds up to 3
//Math.round(3.6) rounds up to 4

//if we always wanna round down, we say Math.floor()
//if i always wanna round up, we say Math.ceil()
//to find the maximum number, we say Math.max(1, 2)
//for minimum, Math.min(7, 3, 5, 2, 6)
//we can also raise to the power of..., we say Math.power(a, b). where a is the base and b is the power.
//we can also find square root by saying, Math.sqrt()

//one of the most useful built-in method is the random method. Math.random(), this returns a number between 0 & 1 as a random number.
//if we want to return a random number between a range, we will have to perform it differently. example below
let min = 1;
let max = 10;

// const randomNum = Math.random() * (max - min) + min;
// console.log(randomNum);
//this will always return a number between 1 and 10


//if we always wanted it to return an integer, we say
// const randomNum = Math.round(Math.random() * (max - min) + min);
// console.log(randomNum);



//STRING METHODS. 2:03:20
//So in js, we have 2types of string. one way is the string-literal with the use of single/doouble quotes or backticks; example below;
const name = "Steven";
// console.log(typeof name);

//We can also make a string using the String-Object. which i can say as below;
// const anotherName = new String('Joe');
// console.log(typeof anotherName);
//from the logout, we see that the value anotherName is an object datetype.

//with the name variable assigned to the string-literal "Steven", we can access the methods of string using dot notation or bracket notation.
//and then js engine will internally wrap that string-literal with the string-object
//so there are built-in methods that allow us to operate or manipulate strings. we will discuss some of them in this lesson.

let sentence = "A new sentence.";
const doesIncludeNew = sentence.includes('new');
//this built-in method is called "includes". and what this does is, it checks the string ("A new sentence."), to see if the string passed to as an augument('new) is found.
//if it is, then it returns true. otherwise it returns false.
// console.log(doesIncludeNew);
//from the logout, we see that it does include.



//we can access characters by index value. where the first character of the string is at the index value of 0. second character is at  the index of 1.
//ofcourse the second character is the space between the first character and the next latter. third character is at the index of 2. and so on.
// console.log(sentence[3]);
//the above logs out the character at the third index. which is 'e'.



//there is another method called "startsWith". example below
const startsWithA = sentence.startsWith('A');
//the above will return "true" if the sentence begins with the character "A".
// console.log(startsWithA);
//and as eexpected it returns true since the sentence begins with the character "A".


//for "endsWith" method, example below.
const endsWithA = sentence.endsWith('A');
// console.log(endsWithA);
//it logs out false since the sentence did not end with A.


//Another  useful method is the replace method. example below.
let updatedSentence = sentence.replace('new', 'short');
//the above will return s new sentence, replacing the word 'new' with 'short'.
// console.log(updatedSentence);


//another useful method is the trim method.
//If you are expecting a user input from an input field, its useful to use the trim method incase the user has spaces in the begining or at the end of the input.
//example below.
let sentence2 = " A very new word. ";
trimmedSentence = sentence2.trim();
// console.log(trimmedSentence);
//it logs out (" A very new word. ") with the spaces removed from  the brgining and the end.


//some other methods is trimLeft which removes the spaces from the begining of the string.
//we have trimRight which removes spaces at the end.


//one useful method that is commonly used in programming reviews is splitMethod
//with the splitMethod, we can specify a delimeter, then js will create an array, splitting the sentence. example bwlow.
const wordsInSentence = sentence.split(' ')
//the empty string(' ') is the delimeter. so whenever js encounters a  space in the sentence, it will split the string and those elements will be placed in an array.
//console.log(wordsInSentence);
//from the output, we can see how the sentence forms an array.


//two other helpful methods are two upper case and two lower case. example below
let email = 'TesTEmail@gmail.Com'
//the above is entered with mixed casing. when the email is saved in the database, we likely wanna make that all lower case or all uppeer case so when next the user logs in, they will not be restricted bassed on case sensitivity.
let lowerCaseEmail = email.toLowerCase();
//console.log(lowerCaseEmail);
//in the console, it logs out the email in lower case

let upperCaseEmail = email.toUpperCase();
console.log(upperCaseEmail);
//in the console, it logs out the email in upper case.



//there are many more methods available for strings. is best to consult developer.mozilla.org to read the documentation for strings.




