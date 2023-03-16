//Ex4 Destructure an object with computed property names:
const propName = 'name';
    const person = {
    [propName]: 'John',
    age: 30
};

const {age , name} = person;
