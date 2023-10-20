const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined); // [1,2,3,4,5,6]

const slice = combined.slice(2,4);
console.log(slice); // [3,4]

// Using spread operator
const combined2 = [...first, ...second];
console.log(combined2);

/* 
    If we have an object inside the array,
    the reference will be copied.
*/

const objectArray = [
    {id: 0, name: 'Bitcoin'},
    {id: 1, name: 'Ethereum'},
    {id: 3, name: 'Dogecoin'},
]

const newCryptos = objectArray;
newCryptos[2] = {id: 3, name: 'Matic'};
console.log(objectArray);
console.log(newCryptos);