const person = {
  name: "Josh",
  age: 23,
  // Using a regular function, therefore "this" refers to the person object
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
  // Using an arrow function, therefore "this" refers to the global object (or undefined in strict mode)
  globalGreet: () => {
    console.log(`Hi, I am ${this.name}`);
  },
};

this.name = "Global Josh"; // Setting a global name

person.greet(); // "Hi, I am Josh"
person.globalGreet(); // "Hi, I am Global Josh"
