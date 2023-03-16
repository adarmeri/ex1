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

const {person:{name , age}} = obj;
const {street,city,state} = obj.person.getAddress();

console.log(street);