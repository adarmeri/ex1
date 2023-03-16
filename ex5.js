//Ex5 Destructure a nested object with computed property names:

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

