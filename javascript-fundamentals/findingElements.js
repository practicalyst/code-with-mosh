// Finding primitives elements in an array
const numbers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 64];

console.log(numbers.indexOf('64')); // -1
console.log(numbers.lastIndexOf(64)); // 9
console.log(numbers.indexOf(3)); // -1
console.log(numbers.includes(3)); // false -> numbers.indexOf(3) !== -1


// Finding references elements in an array
const languages = [
  {id: 0, name: 'NodeJS'},
  {id: 1, name: 'Rust'},
  {id: 2, name: 'C/C++'},
  {id: 3, name: 'Python'},
];

const language = languages.find(( language ) => {
    return language.name === 'HTML';
});

console.log(language); // undefined


const languageIndex = languages.findIndex(( language ) => {
    return language.name === 'C/C++';
});

console.log(languageIndex); // 2