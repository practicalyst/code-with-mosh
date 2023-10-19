const numbers = [2, 3];

// End 
numbers.push(4, 5);
console.log(numbers);

// Beggining
numbers.unshift(90, 91);
console.log(numbers);

// Middle
numbers.splice(2, 0, 92, 93);
console.log(numbers);