//recall we have 8 different data type in js.
//the reference data type also known as th ecomplex datatype or object datatype. so arrays and functions also fall into the object category.
//the reason we differenciate the datatyoes is because of how they are allocated in memory.
//lets consider primitive datatype first

// let a = 10;
// let b = a;

// a = 20;
// console.log(a);
// console.log(b);
//from the above, we initialized a to 10, then we initialized b and assigned it to the variable a, the we reassigned a to 20,
//on consoling the both of them, we see they output different value.
//both a and b are assigneed to a number which is a primitive datatype. on logging them out we see they are two indipendent variables.
//meaning that they are assigned to different memory addresses.
//primitive values are passed by copy. not by reference.

//for reference type, lets see the example below.
// let a = {value: 20};
// let b = a // thta is, 'b' is assigned to the reference variable 'a' which is assigned to an object.

//now lets try to change the property of 'a'. lets change the content of the "value" using the syntax.
// a.value =100;

//now we output both of them.
// console.log(a);
// console.log(b);
//on logging them out we see they have the same value. despite only updating the value of "a". recall we did not update the value of "b".
//this is because they are both referencing the same object in memory. they are both referencing the same memory address.

//To summarise, Primitive values are copied by their values while objects values which also includes arrays are copied by their reference.
//this is an important concept and will make more sense through practice.


//1:53:54. Enumerating peoperties of an object.
//recall
let numbers = [1, 2, 3, 4, 5];
//for iterating over the elements of an array, we use the for-of loop
// for (const elements of numbers) {
//     console.log(elements);
// }


//for iterating over the values of the keys of an object, recall we use the for-in loop.
const dog = {
    name: "max",
    age: 5,
    eyeColor: "blue"
};

// for(const key in dog) {
//     console.log(dog[key]);
// }

//so we have another syntax for enumerating over the keys and the values of an object.
// const keys = Object.keys(dog);
//so object is a built-in class in js and it has properties and methods.

//THE LAST SYNTAX RETURNS ALL THE KEYS IN THE OBJECT AS AN ARRAY.
// console.log(keys);
//so this outputs all the keys of the object as an array.


//Then we alsoo have object.values in otheer to get all the values stored "as an array".
// const values = Object.values(dog);
// console.log(values);


//we can also get the properties. thats the key-value pair , each stored as an element "in the array". will look like a nested array.
// const entries = Object.entries(dog);
// console.log(dog);


//WE WILL USE A DIFFERENT SYNTAX TO ACCOMPLISH THE SAME THING. WHICH IS ENUMERATING OVER AN OBJECT.
// for(const key of Object.keys(dog)) {
    //am using for-of because we are iterating over an array.
    // console.log(key);
// }
//so the above iterates over the array


//to output all the values, we say

// for(const value of Object.values(dog)) {
//     console.log(value);
// }

//this outputs all the values


//now we do for entries. that is; enumerating over the properties of an object. we say

// for(const entry of Object.entries(dog)) {
//     console.log(entry);
// }

//here we see the key-value pairs displayed as an array.

//this particular syntax may come in handy when doing programming in views.
//during cases when tou need to enumerate over an object.




//CLONING AN OBJECT
//recall
let a = {value: 10};
// let b = a;

// b.value = 20;

// console.log(a);
// console.log(b);
//recall how for an object, if we update one of the variables, it affects the other since they both reference the same object.
//they both have a value of 20 on logging them out.
//if we want to have a case where if we change the value of one of these variables it dosent affect the other, then we need to have two independent variables.
//And that can be accomplished by creating a clone of an object.
//so we know that objects are passed by reference. so we need to use a build-in method called Object.assign
//instead of saying let b = a, we innitialize it to an object literal. just like below.
// let b = {};

// Object.assign(b, a)
//by so doing, all the properties and methods of "a" will be copied to "b". and this will create two indipendent variables.
//b will now have a clone of the object that a references.

//if we now reassign b aa we wanted to do previously, we have;
// b.value =20;

// console.log(a);
// console.log(b);
//on the output you will see they reference two different objects with different values. changing one, does not affect the other.



//WE ALSO HAVE ANOTHER SYNTAX THAT ALLOWS US TO ACCOMPLISH THIS KNOWN AS THE SPREAD OPERATOR
//it uses 3dots as in elipses and this will create a copy if the object. see it below.
 let b = {...a};
 b.value =20;

 console.log(a);
 console.log(b);



