//Ex8 Destructure an array of complex objects with renamed properties and default values:

const people = [
{ firstName: 'John', lastName: 'Doe', age: 30 },
{ firstName: 'Jane', lastName: 'Doe' }];

let [firstP , secP] = people;
const {firstName : fn , lastName:ln , age:la=15} = firstP;
const {firstName : sn , lastName:sl,age:sa=15} = secP;

