// SERIALIZE COOKIE
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
console.log('this is the serializeCookie output: ',serializeCookie('foo', 'bar'));

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
console.log('shuffle ', shuffle(foo))
// ================================


// REMOVE SELECTED VALUES FROM ARRAY
const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    let pulled = arr.filter((v, i) => !argState.includes(v));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    console.log('pulled ', pulled)
};
let requests = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(requests, 'a', 'c');
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

console.log(toSnakeCase('camelCase')); // 'camel_case'
console.log(toSnakeCase('some text')); // 'some_text'
console.log(toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens')); // 'some_mixed_string_with_spaces_underscores_and_hyphens'
console.log(toSnakeCase('AllThe-small Things')); // "all_the_smal_things"
console.log(toSnakeCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML')); // "i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html"
// ==============================


// REMOVE NON ASCII
const removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');
console.log('äÄçÇéÉêlorem-ipsumöÖÐþúÚ ', removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ')); // 'lorem-ipsum'
// ==============================

