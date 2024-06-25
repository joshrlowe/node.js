const person = {
  name: "Josh",
  age: 23,
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

// Extracting information from a JavaScript object

// Define a function to print the name property from a person object
const printName = (person) => {
  console.log(person.name);
};

// This works, but it's inefficient because we pass the entire person object just to use the name property.

// Using destructuring to extract only the name property:
const printNameDestructured = ({ name }) => {
  console.log(name);
};

// We can destructure multiple properties from the object:
const printNameAndAge = ({ name, age }) => {
  console.log(name, age);
};

// Destructuring properties into variables:
const { name, age } = person;
console.log(name, age); // Output: Josh 23

// Destructuring arrays:
const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); // Output: Sports Cooking

// Note: Elements in arrays do not have names, so we can use any variable names when destructuring.
