const userName = "Josh"; // User's name, immutable
let userAge = 22; // User's age, mutable
const userHasHobbies = true; // Indicates if user has hobbies, immutable

/* Explanation of Variable Declarations:
 * - const: Declares a read-only named constant, local scope.
 * - let: Declares a block-scoped variable, optionally initializing it to a value.
 * - var: Declares a variable, optionally initializing it to a value, function scoped or globally scoped if declared outside of any function.
 */

// Attempt to reassign a constant variable will lead to an error:
// userName = 'Joshua'; // Error: Assignment to constant variable.

userAge = 23; // Updating age since it's declared with 'let' and can be changed.

// Function to create a summary of user information using template literals
function summarizeUser(name, age, hasHobbies) {
  return `Name is ${name}, age is ${age}, and the user has hobbies: ${hasHobbies}`;
}

console.log(summarizeUser(userName, userAge, userHasHobbies));
