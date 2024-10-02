// Write your solution here!
// Array of cat names
let cats = ['Milo', 'Otis', 'Garfield'];

// Functions that destructively modify the `cats` array:

// Adds a new cat name to the end of the array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Adds a new cat name to the beginning of the array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Removes the last cat name from the array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Removes the first cat name from the array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Functions that return a new array without modifying the original `cats` array:

// Appends a new cat name to the end of the array and returns a new array
function appendCat(name) {
  return [...cats, name];
}

// Prepends a new cat name to the beginning of the array and returns a new array
function prependCat(name) {
  return [name, ...cats];
}

// Removes the last cat name from the array and returns a new array
function removeLastCat() {
  return cats.slice(0, -1);
}

// Removes the first cat name from the array and returns a new array
function removeFirstCat() {
  return cats.slice(1);
}