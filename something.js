//EX1 What does the following code return/print?
/*

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]
//console.log(numbers) // [10,30,20]

//Ex2 Refactor the following exercise
var obj = {
    numbers: {
    a: 1,
    b: 2}
    };

   var a = obj.numbers.a; //  var {numbers:{a , b}} = obj;
   var b = obj.numbers.b; //

//Ex3 Swap with array destructuring:
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp; // [arr[0] , arr[1]] = [arr[1] , arr[0]]; 
*/
//Ex4 Destructure an object with computed property names:
/*const propName = 'name';
    const person = {
    [propName]: 'John',
    age: 30
};

const {age , name} = person;
*/

//Ex5 Destructure a nested object with computed property names:
/*
const propName = 'address';
const person = {
name: 'John',
age: 30,
[propName]: {
street: '123 Main St',
city: 'Anytown',
state: 'CA'
}
};

const {
    name, 
    age,
    address:{
        street,
        city,
        state
    },
} = person;
*/

//Ex6 Destructure a complex object with default values, renaming, and computed property names:
/*
const propName = 'address';
const person = {
firstName: 'John',
lastName: 'Doe',
[propName]: {
street: '123 Main St',
city: "Anytown"
}
};

const 
{firstName , lastName , address:{street}} = person;
const city = person.address.city == undefined ? "haifa" : person.address.city; // same as {firstName , lastName , address:{street , city="haifa"}} = person;
*/

//EX7 Destructure an object with deeply nested properties and a function:
/*
const person = {
name: 'John',
age: 30,
address: {
street: '123 Main St',
city: 'Anytown',
state: 'CA',
coordinates: {
latitude: 37.7749,
longitude: -122.4194
}
},
getFullName() {
return `${this.name} Doe`;
}};

const {name , age , address:{street , city , state , coordinates:{latitude , longitude}},getFullName} = person;
*/

//Ex8 Destructure an array of complex objects with renamed properties and default values:
/*
const people = [
{ firstName: 'John', lastName: 'Doe', age: 30 },
{ firstName: 'Jane', lastName: 'Doe' }];


let [firstP , secP] = people;
const {firstName : fn , lastName:ln , age:la=15} = firstP;
const {firstName : sn , lastName:sl,age:sa=15} = secP;
*/

//Ex9 Destructure an object with computed property names and a function:
    const propName = 'person';
    const obj = {
    [propName]: {
        name: 'John',
        age: 30,
        getAddress() {
              return {
            street: '123 Main St',
            city: 'Anytown',
            state: 'CA'
            };
        }
    }
};

const {person:{name , age,getAddress}} = obj;
