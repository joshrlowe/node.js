const hobbies = ["Sports", "Cooking", 1, true, {}];

// Creating a copy of the array using slice
const copiedArray = hobbies.slice();
hobbies.push("Programming");
console.log(copiedArray); // Output: ["Sports", "Cooking", 1, true, {}]
console.log(hobbies); // Output: ["Sports", "Cooking", 1, true, {}, "Programming"]

/*
Using the spread operator (...) to create a new array, copying all elements from hobbies, then placing
them in the surrounding array. This implements an immutability pattern by creating a new array with all 
old values such that if a new value is added to hobbies, spreadCopiedArray will not be affected.
This helps avoid errors by using a copy-then-edit approach.
*/
const spreadCopiedArray = [...hobbies];
console.log(spreadCopiedArray); // Output: ["Sports", "Cooking", 1, true, {}, "Programming"]

// The spread operator pulls out all the properties of the object and creates a new object with them.
const person = { name: "Josh", age: 23 };
const copiedPerson = { ...person };
console.log(copiedPerson); // Output: { name: "Josh", age: 23 }

/*
The rest operator is the opposite of the spread operator. It collects an arbitrary number of remaining 
elements into an array.
*/
const colors = ["red", "green", "blue", "yellow", "purple"];

const [firstColor, secondColor, ...remainingColors] = colors;
console.log(firstColor); // Output: red
console.log(secondColor); // Output: green
console.log(remainingColors); // Output: ['blue', 'yellow', 'purple']

// Using the rest operator makes a function flexible to accept any number of arguments
const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3)); // Output: [1, 2, 3]
console.log(toArray(1, 2, 3, 4)); // Output: [1, 2, 3, 4]
