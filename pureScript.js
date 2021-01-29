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