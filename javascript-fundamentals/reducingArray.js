const number = [1, -1, 2, 3];

let sum = 0;
for (let n of number) sum += n;
console.log(sum);

console.log(
  number.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
);
