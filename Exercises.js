// Create a function that takes in an array as a parameter and iterates through all the elements of the array displaying all the even numbers.
function allEvenNumbers(array) {
    for(const element of array){
        if(element % 2 ===0)
            console.log(element);
    }
}
allEvenNumbers([1,2,3,4,5,6,7,8,9,10]);

//for odd numbers, we say
function allOddNumbers(array) {
    for(const element of array){
        if(element % 2 ===0){
            continue;
        }
            console.log(element);
    }
}
allOddNumbers([1,2,3,4,5,6,7,8,9,10]);