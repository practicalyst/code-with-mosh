const numbers = [90, 91, 92, 93, 2, 3, 4, 5];

// End
const lastNumber = numbers.pop();
console.log(numbers, 'last number: ', lastNumber);

// Beggining
const firstNumber = numbers.shift();
console.log(numbers, 'first number: ', firstNumber);

// Middle
numbers.splice(0, 3); // remove 3 elements from 0 position
console.log(numbers);
