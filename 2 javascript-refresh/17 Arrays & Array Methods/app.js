// Arrays can store heterogeneous data types
const hobbies = ["Sports", "Cooking", 1, true, {}];

// Using a for-of loop to iterate through the array
for (let hobby of hobbies) {
  console.log(hobby);
}

// The map() method returns a new array with the results of calling a provided function on every element
console.log(hobbies.map((hobby) => "Hobby: " + hobby));

// The original array remains unchanged, meaning map() returns a copy of hobbies, not a reference to hobbies
console.log(hobbies);
