const userName = "Josh";
let userAge = 22;
const userHasHobbies = true;

// Arrow function to summarize user information
/*
const functionName = (parameters) => {
    // function body
};
*/
const summarizeUser = (name, age, hasHobbies) => {
  return `Name is ${name}, age is ${age}, and the user has hobbies: ${hasHobbies}`;
};

// Calling the summarizeUser function
console.log(summarizeUser(userName, userAge, userHasHobbies));

// No need for a code block when there is only one statement in the function
const add = (a, b) => a + b;
console.log(add(1, 2));

// Parentheses are optional for a single parameter
const addOne = (a) => a + 1;
console.log(addOne(1));

// Parentheses are required if there are no parameters
const greet = () => "Hello, world!";
console.log(greet());
