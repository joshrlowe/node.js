// Arrays can store heterogeneous data types, including objects
const hobbies = ["Sports", "Cooking", 1, true, {}];

// Adding a new element to the array using push
hobbies.push("Programming");
console.log(hobbies); // Output: ["Sports", "Cooking", 1, true, {}, "Programming"]

/*
Objects are reference types in JavaScript. When objects are stored in an array, 
the array holds references (pointers) to those objects. The reference (pointer) 
remains the same, but the value at the referenced location can change, as seen above.
*/
