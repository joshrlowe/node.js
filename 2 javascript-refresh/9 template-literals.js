const name = "Josh";
const age = 23;

// Using template literals to embed expressions and variables in strings
console.log(`My name is ${name} and I am ${age} years old.`);

// Template literals allow for multi-line strings and embedded expressions
const multiLineString = `This is a string
that spans multiple
lines.`;

console.log(multiLineString);

// Template literals can also include expressions
const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);

/* Explanation:
 * Template literals, also known as template strings, are enclosed by backticks (` `) instead of single or double quotes.
 * They allow for string interpolation, multi-line strings, and embedded expressions.
 * Template literals improve readability and reduce the need for concatenation.
 */
