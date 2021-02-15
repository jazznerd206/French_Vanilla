// filterNonUnique
// Filters out the non-unique values in an array.

// Use Array.prototype.filter() for an array containing only the unique values.

const filterNonUnique = arr => 
    arr.filter(i => {
        // i refers to whatever objects the array is made up of, not the iterator
        console.log(arr.indexOf(i), arr.lastIndexOf(i));
        // if the index equals the last index, there is no matching element, let it through the filter
        arr.indexOf(i) === arr.lastIndexOf(i)
    });

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]