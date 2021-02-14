// SERIALIZE COOKIE
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
// console.log('this is the serializeCookie output: ',serializeCookie('foo', 'bar'));

// SHUFFLE ALGORITHM
// Fisher Yates algorithm 
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};
const foo = [1, 2, 3];
// console.log('shuffle ', shuffle(foo))
// ================================


// REMOVE SELECTED VALUES FROM ARRAY
const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    let pulled = arr.filter((v, i) => !argState.includes(v));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    // console.log('pulled ', pulled)
};
let requests = ['a', 'b', 'c', 'a', 'b', 'c'];
// pull(requests, 'a', 'c');
// ================================

// 
// amaran  gras in sting this
// AMARA HIT GRASS IN A 
// IS ANAGRAM
const isAnagram = (str1, str2) => {
    const normalize = str =>
      str
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, '')
        .split('')
        .sort()
        .join('');
    return normalize(str1) === normalize(str2);
};
isAnagram('iceman', 'cinema'); // true
// ==================================

// TRANSFORM STRING TO SNAKE CASE
const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

// console.log(toSnakeCase('camelCase')); // 'camel_case'
// console.log(toSnakeCase('some text')); // 'some_text'
// console.log(toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens')); // 'some_mixed_string_with_spaces_underscores_and_hyphens'
// console.log(toSnakeCase('AllThe-small Things')); // "all_the_smal_things"
// console.log(toSnakeCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML')); // "i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html"
// ==============================


// REMOVE NON ASCII
const removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');
// console.log('äÄçÇéÉêlorem-ipsumöÖÐþúÚ ', removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ')); // 'lorem-ipsum'
// ==============================

// PRIMES
const primes = num => {
    let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2);
    let sqroot = Math.floor(Math.sqrt(num));
    let numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);
    numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));
    return arr;
};
// console.log('primes', primes(10))

// polygraph
const polygraph = (answer, notLie) => answer.every(obj => obj[notLie]);
console.log(polygraph([
    { user: 'Nipsy', sex: 'male' },
    { user: 'Hussle', sex: 'male' },
    { user: 'Alicia', sex: 'female' },
    { user: 'Keys', sex: 'female' },
], 'sex')); // true

// HEX TO RGB
const hexToRGB = hex => {
    let alpha = false;
    let h = hex.slice(hex.startsWith('#') ? 1 : 0);
    if (h.length === 3) h = [...h].map(x => x + x).join('');
    else if (h.length === 8) alpha = true;
    h = parseInt(h, 16);
    return (
        'rgb' +
        (alpha ? 'a' : '') +
        '(' +
        (h >>> (alpha ? 24 : 16)) +
        ', ' +
        ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
        ', ' +
        ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
        (alpha ? `, ${h & 0x000000ff}` : '') +
        ')'
    );
};
// hexToRGB('#27ae60ff'); // 'rgba(39, 174, 96, 255)'
// hexToRGB('27ae60'); // 'rgb(39, 174, 96)'
// hexToRGB('#fff'); // 'rgb(255, 255, 255)'

// BACKWARDS ARRAY POPULATER
const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
);
initializeArrayWithRangeRight(5); // [5,4,3,2,1,0]
initializeArrayWithRangeRight(7, 3); // [7,6,5,4,3]
initializeArrayWithRangeRight(9, 0, 2); // [8,6,4,2,0]