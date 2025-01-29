//the constuctor property
//every object in Javascript has a constructor function.
//the constructor function is the one used to construct an object and it is called implicitly whenever we create a new object.
//we use the term "instantiate" whenever we create a new object... as in, we instantiated a new object.
//look at  the object below
let person = {
    name: 'Steven'
};
//in the object syntax above, "person" references the object inside{}.
//now there is a built-in property for all objects called "constructor" which we can access either through dot notation or bracket notation.
//lets consoleLog that.

//console.log(person.constructor);
//in our console, we can see in the log out that it references a constructor function "object". so object is the constructor function for this object(person).
//pls continue in your note.(1:47:20).

//when we do as below
// let newObj = {};....(that is an empty object literal with curly braces)
//internally, js sees the above as
//let newObj = new Object();
//the two syntases mean the same thing.
//but the first syntax which use the object literal syntax is syntatic sugar. this means the first one is a shorter way of writing the same code.


//in Js, we also have new string. see below:
new String(); //that is a string object. but instead of that we use the string literal as in the name steven. "Steven".
//we also have:
new Boolean(); //that is a boolean object. but we use: true, false instead.
new Number(); // thats a number object. but we just use: 1, 2, 3... instead. we just use number literals.
//so every object has a constructor property. which refers to the constructor function used to create that object.
// what is the constructor property?
//this is a property that exists for all object in JS. you can access it with either the dot notation or the bracket notation.
//And it references the constructor function used to instantiate to create that object.


//Functions are Objects.
//in JS, unlike other programming languages, functions are objects. example below:
function add(num1, num2) {
    return num1 + num2;
}
//so the above function is actually an object in JS. so it is an object in memory.
//lets see an Example of that.
//so we can actually assign the function "add" to another variable.
const n = add;
//so n references the function "add" in memory. it references the object.
// console.log(n.constructor);

//we can actually call and envoke this function. lets do that below. we say;
//console.log( n(2, 2));
//you can see how we invoked it and passed in two arguments. then we log it out and it gives us the expected value 4.


//so the function "add" that we defined has members. meaning that it has properties and methods just like objects do.
//it has a lenght property which defines the number of parameters that the function "add" accepts.
//to get the property, we console log that just like below.
//console.log( add.length );


//Now we define a constructor function. remember we wanna show several reasons why functions are objects.
// function programmer(name) {
//     this.name = name;
//     this.writeCode = function() {
//         console.log("code in JavaScript");
//     }
// }
//now we can check the properties of this function. the lenght property
//console.log(programmer.length);
//we can see that the function can only accept only one property "name".

//we can still check the constructor function by using its syntax as below.
//console.log(programmer.constructor);
//it refrences a constructor function: "FUnction". thats a "function Object".

//We will use different syntax to still demostrate how functions are object.
//Remember fro line20 above we have object object, string object, boolean object, number object which we instantiate using the "new" keyword.
//In that same way, we have the function object. which we instantiate using the "new" keyword too. example below:
const programmer = new Function('name' , `
    this.name = name;
    this.writeCode = function() {
    console.log("code in JavaScript");
    }
`);
//So we have just used the "new function" syntax to instantiate a "function object", assigning it to the value "pregrammer".

//Remember that to use a constructor function, we utilize a special keyword called "New" to instantiate/call the constructor function or pass the urguments of name(only one parameter). we say:
const newProgrammer = new programmer('Steven');
//we consoleLog our new programmer below:
console.log(newProgrammer);

//to call  the method in a constructor function, we use the syntax below;

newProgrammer.writeCode();

//Question:
//Explain how functions are objects in JS
//Internally, functions are represented as objects in JS. meaning they have properties and method.
