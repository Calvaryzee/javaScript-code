//SORTING ARRAYS   2:41:19
//in programming, sorting is a common operation.
//js Arrays comes with a built-in sort method that allows you to easily sort the array elements.
//By default, when you call sort on an array containing strings or numbers, it sorts the elements in assending order.
//Lets see the explanation.

// let characters = ['c', 'd', 'b', 'a'];
//in other to sort these elements, we simply need to call the built-in sort method; .sort().
// characters.sort();
// console.log(characters); //the console logs out the elements of characters sorted in assending order.



//another useful method in the array data structure is the .reverse() method.
//this can be used to reverse the order of the element.
//again;
// characters.reverse();
// console.log(characters);// from the console, we can see that the output has being updated with the order reversed.


//if we switch back to the sort method, this approach works seamlessly for arrays containing strings or numbers.
//but when we have an array of objects, we need to provide a callBack function to the sort method.
//this function defines the sorting logic based on the properties of the object in the array.

//lets consider an array of the employee objects;
// let employees = [
//     {id: 1, name: 'Jane'},
//     {id: 2, name: 'Steven'},
//     {id: 3, name: 'Andrew'},
//     {id: 4, name: 'Terry'},
// ];
//Here, we can see these objects are ordered based on the id.
//However, if we want to sort it based on the names, then we need to specify a callBack function.
//in that callBack function, we will specify two parameters, which represents two elements. in this case, two objects being compared.
//so if we do;
// employees.sort((a, b) => {
//     const lowerCaseA = a.name.toLowerCase();//in this codeBlock, we implimen our callBack function. first we make it all lower case using the 'name' property of that object. then add toLOwwerCase which is a built-in method for strings
//     const lowerCaseB = b.name.toLowerCase();

//     if (lowerCaseA < lowerCaseB) return -1; //then we perform the comparism using the comparism operator
//     //the above means if the comparism is true, the object 'a' will come before the object 'b'.
//     if (lowerCaseA > lowerCaseB) return 1; //which means that `a` comes after the object-b
//     return 0;

//     //so this callBack function will be used to sort the objecta in our array.

// })//we can name the parameters whatever we want. in this case, we name them a and b.
//then we specify the arrow function, and then curlyBraces.
//so in the callBack function, we will compare values based on one of the objects's properties.
//in this case, we will use the name property.
//the callBack function returns a number that determines the sort order.
//Returning a negetive value means the first argument which in this case is 'a', comes before the second agument 'b'.
//Returning 0 means the are considered equal in any sort order
//Returning a positive value means the first agument 'a' comes after the second.

//so since we will be sorting based on the name property, we will be performing a comparison based on these characters(Jane,Steven,Andrew, Terry).

//CHARACTERS ARE STRINGS WITH A SINGLE CHARACTER.
//Now characters are internally represented as numbers in computer based on the ASCII values. this means capital letters are considered less than lower case letters
//to handle case sensitivity, its a good practice to convert strings to the same case for comparism
//in the codeBlock we impliment our callBack function. first we make it all lowercase


//so for example, if we consider the object `a` to be this first object above({id: 1, name: 'Jane'},) and we consider `b` to be the object just after object-a({id: 2, name: 'Steven'}),
//we are comparing the two name property Jane and Steven and because we determine Jane to come before the name Steven, reteurning a negetive value means that object-a comes before object-b
//And we compare two elements at a time.

//so now if we console.log employees, we will see that they are sorted alphabetically based on the name property
// console.log(employees)//from the console we see the objects are sorted alphabetically.



//QUESTION
//HOW WOULD YOU SORT THE ELEMENTS OF AN ARRAY?





//TESTING ELEMENTS IN ARRAY 2:46:07
//in js, arrays can be equipped with several powerful methods that allow us to process and evaluate the data witin them efficiently.
//two such methods are .every() and .some()
//both of which are used to ttest the elements in our array against a condition.

//lets explore how each of these methods work and when to use them.
//starting with the .every() method.
//the .every() method tests whether all elements in the array passed the test implimented by the providing function.
//it reutrns true if every element in the array satisfies the specified conditions. and false otherwise.
//this method is perfect for scenarios when you need to ensure that the entire collection meets a certain criteria.
//for example lets check if every number in the array is even. lets instantiate an array of numbers.

// const numbers = [2, 4, 6, 8, 10];
//below we decide to store the result in the variable 'areAllEven'. which will hold a boolean value.
// const areAllEven = numbers.every(number => {
//     return number % 2 === 0

// } ); //from here, this is assigned to the result of numbers.every()
// console.log(`areAllEven: ${areAllEven}`);
//so when we have .every(), it accepts a callBack function which is a predicate. so this callBack function must return true or false.
//and it can accept up to three parameters
//the first parameter is the current element of the array
//the second parameter is the index of where the element is stored
//and the third parameter is the original array
//of all these three parameters, only the first one is monitory. the other two are optional.

//in this case we only need the first parameter. so lets name it 'number'.
//then we use the arrow function syntax (=>) with the curlyBraces{},
//then we will return, when that number marginal2 is equal to zero, then we know that its even.
//then we use template string`` and string interporlation${} to consoleLog areAllEven

//now because our codeBlock consists of just one statement(statement within the curlyBraces), we can decide to put everything on one line and it will look like below;
//const areAllEven = numbers.every(number =>   return number % 2 === 0);
//if we run it again, we will get the same result.




//Now lets consider the .some() method 2:48:02
//on the flipSide, the .some() method checks if at least one element in the array passes the test provided by the providing  function
//it returns true as soon as one element satisfies the condition. making it useful for scenarios when you are looking for the presence of an element that meets a specific requirement.
//lets instsntiate an array and say;

const numbers = [1, 3, 5, 7, 8, 9];
const hasOneEvenNumber = numbers.some(number => number % 2 === 0);
console.log(`hasOneEvenNumber: ${hasOneEvenNumber}`);//we get the value "true" because the array has a value of 8 in it.
//so once again, this predicate callBack function accepts up to three parameters
//in this case we only need the first one which is the element we are operating on. and we will name it 'number'


//its important to note that both .every() and .some() method operate on arrays. in a way that they stop precessing elements as soon as the outcome is determined
//for .every(), it stops and returns false as soon as it encounters an element that does not meet the condition.
//.some() stops and returns true at the first instance of an element that satisfies the condition.
//these methods are incredibly useful for array processing in js providing a concise and readable way to evaluate conditions across the array element.
//whether you are checking for consistency with .every() or searching for possobilities with .some(), these methods are for elegent solutions to common programming scenarios.


//QUESTIONS
//What is the .every() method and how does it work?

