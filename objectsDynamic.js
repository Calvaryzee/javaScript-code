//Objects in JS are dynamic in that we can add or remove a property at any given time.
const person = {
    name: 'steven'
};
//console.log(person);

person.favoriteFood = 'tacos';
//console.log(person);
//it logs out an updated object.
//we can also update it using bracket notation.
person['favoriteFruit'] = 'chocolate';
// console.log(person);

//we can also delete properties
//we delete propreties using the "delete" keyword

delete person.favoriteFood;
//console.log(person);

//we can also add methods on the file.
person.eat = function() {
    console.log('start eating');
}

//then we can envoke it just like below(person.eat())
//then the parenthesis() is to envoke and call that method.
person.eat();

//using the const keyword means we cannot re-assign "person" to another value.
//but we can still change the properties within the object literal.