//41:39
//this is a conditional operator that allows us to write clearner code.
// let age = 16;
// const canDrive = age >= 16 ? true : false;
// console.log(canDrive);
//the ? is the ternary operator.

//LOGICAL OPERATORS
//We use logical operators to make decisions based on multiple conditions. there are 4 logical operators
//the OR Operator (||), the AND Operator (&&), the NOT Operator (!), and the NULL COALESCING Operator(??).
//there are 4 possible combinations with 2 operators
//for OR Operator
// console.log(true || true); //true
// console.log(false || true); //true
// console.log(true || false); //true
// console.log(false || false); //false

let hasReservation = true;
let acceptingWalkIns = false;

const hasAccessToTable = hasReservation || acceptingWalkIns;
console.log(hasAccessToTable);

//for the AND Operator
//AND returns true if all the operands are true.
// console.log(true || true); //true
// console.log(false || true); //false
// console.log(true || false); //false
// console.log(false || false); //false

let age = 16;
let hasCar = true;

const canDrive = age >= 16 && hasCar;
console.log(canDrive);
//46:50