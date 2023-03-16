//Ex6 Destructure a complex object with default values, renaming, and computed property names:

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
const city = person.address.city == undefined ? "haifa" : person.address.city;
 // same as {firstName , lastName , address:{street , city="haifa"}} = person;