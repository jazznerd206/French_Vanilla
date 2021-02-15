// filterNonUnique
// Filters out the non-unique values in an array.

// Use Array.prototype.filter() for an array containing only the unique values.


// if the index equals the last index, there is no matching element, let it through the filter
const findUniqueValues = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

console.log(findUniqueValues([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]