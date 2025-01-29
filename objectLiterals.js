// const dog = {
//     name: 'Max',
//     breed: 'Dachshund',
//     age: 5,
//     weightInPounds: 12,
//     //Above, we have only stored key:value pairs representing properties.
//     //we can also add functions below
//     eat: function() {
//         console.log('Chomp!');
//     },
//     //the above is an annonymous function. thats one way of writing functions.
//     bark () {
//         console.log('Woof!');
//     }
//     //the above is a method. when we have a function within an object, its called a method.
// }

//the above example emcapsulated state&behavior. the key:value pairs form the state while the function and method form the behavior.
//So incapsulation involves grouping together data and the methods that manipulate the data into a single unit while hidimg or abstrcting away the internal details from outside interferance or misuse.

//Factory functions
//so far we have being using functions to perform some operations and return a primitive value. the value being a number, string or boolean value
//but we can also use function to return an object.
//we create a function then we specify parameters that allow us to costumize the properties of a the object.
//example below

// function getDog(name, breed, age, weightInPounds) {
//     return {
//         name: name,
//         breed: breed,
//         age: age,
//         weightInPounds,
//         eat() {
//             console.log('Chomp!');
//         },
//         bark() {
//             console.log('Woof!');
//         }

//     }
// }
// const anotherDog = getDog('marley', 'Chocolate lab', 3, 60);
//so rather than having to duplicate codes and coping and pasteing, we can still get that same functionality all in one line by using a reusable function(Factory FUnction). just like what we have done above.
//to output that we say
//console.log(anotherDog);
//the object is logged out.

//Factory Functions provide an efficient way for us to create a new object. the name of the function will use camelCase notation(getDog) and it can accept parameter variable(name, breed, age, wweightInPounds).
//these parameter variables can help costumize the values of the object being returned.
//the benefit is that it reduces code duplication and the need to copy and paste.


//Constructor Functions
//factory function is not the common way of creating multiple objects. rather we use constructive functions.
//the purpose of a constructive function is to construct the initial state of an object.
//example of a Constructive function below.
function Dog(name, breed, age, weightInPounds) {
    //observe that "Dog" is in pascal notation and is a noun. whereas for the example of Factory function above, "getDog" is in camelCase notation and is a verb.
    //so internally, when using a constructive function, there is a special keyword called "this" which is assigned(=) to an object literal "{};"
    //this = {};
    //then we will add property to "this"
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInPounds =  weightInPounds;
    //"this.name=name". here what we are doing is: we are assigning "this" current object, specifying a key which is the first "name" and assigning it to a value which is the second "name".
    //the value will be the augument that will be passed in.
    
    //then we specify our methods below.
    this.eat = function() {
        console.log(this.name + ': Chomp!');
    }
    this.bark = function() {
        console.log(this.name + ': Woof!');
    }
    //and this will explicitly return the "this" keyword.
    //return this;
    //the "this" key represents this current object.
    //So this convension of making an upperCase and using pascal notation tells other programmers that this is a constructive function. and its a common convention used in JavaScript

}
//so to use a constructor function, we utilize a special keyword called "New".
//Example below
const anotherDog = new Dog('Marley', 'Lab', 6, 60);
//so when we say that we instantiate a new dog object, and the variable name "anotherDog" references the new object that we just created.(...that we just instantiated).
//lets talk about the "new" keyword.
//the "new" keyword is syntatic sugar. which means it provides a modern and clean syntax and does 3things under the hood.
//when we use the "new" keyword with the constructive function, it creates an empty JS object({}), it then sets the "this" keyword to point to the empty object(this ={};) in memory, and then it returns the "this" keyword and does so implicitly.
//so now we log out our object.

console.log(anotherDog);