// 4st? 3th? 1nd? 2rd? Fix it with this function.

// Adds an ordinal suffix to a number.

// Use the modulo operator (%) to find values of single and tens digits. Find which ordinal pattern digits match. If digit is found in teens pattern, use teens ordinal.


const addOrderTo = chaos => {
    // make sure the chaos is a number
    const int = parseInt(chaos, 10),
    // obtain modulo 100 and modulo 100 in pair
        digits = [int % 10, int % 100],
    // prepare the edict
        orders = ['st', 'nd', 'rd', 'th'],
        oPattern = [1, 2, 3, 4],
        tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    // execute directive
    return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
        ? int + orders[digits[0] - 1]
        : int + orders[3];
};

console.log(addOrderTo('123')); // "123rd"