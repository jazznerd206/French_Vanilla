// Perform a deep comparison between two values to determine if they are equivalent.

// Check if the two values are identical, if they are both Date objects with the same time, using Date.getTime() or if they are both non-object values with an equivalent value (strict comparison). Check if only one value is null or undefined or if their prototypes differ. If none of the above conditions are met, use Object.keys() to check if both values have the same number of keys, then use Array.prototype.every() to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.

const deepEqual = (a, b) => {
    // easy, if a equals b
    if (a === b) return true;
    // if date, use get Time
    if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
    // type checking
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
    // differentiate between undefined and null
    if (a === null || a === undefined || b === null || b === undefined) return false;
    // check prototypical inheritance
    if (a.prototype !== b.prototype) return false;
    // obtain keys
    let keys = Object.keys(a);
    // make sure ^^^ array.keys.length matches
    if (keys.length !== Object.keys(b).length) return false;
    // make sure the keys are equal
    return keys.every(k => deepEqual(a[k], b[k]));
};

console.log(deepEqual({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' })); // true