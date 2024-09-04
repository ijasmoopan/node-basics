// const person = { name: "Test" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person, 20));


const person = {
  name: 'Test',
  sayHi: (age) => `${person.name} is ${age}`,
  sayHii: function (age) {
    return  `${this.name} is ${age}`
  }
};

console.log(person.sayHi(10));
console.log(person.sayHii(20));
