let numbers = [1, 2, 3, 4];

/* 
    Solution 1 -
        We assign an new object to be referenced by numbers,
        note that the old object still exists on memory until
        garbage collector frees it
    
        If we have another variable pointing to that memory address, 
        the garbage collector will not free it, and the data will continue 
        to exist

        Good option if you do not have many references to the array
*/

let iKnowWhatYouDid = numbers;
numbers = [];
console.log(numbers);
console.log(iKnowWhatYouDid);

// End of Solution 1

numbers = [1, 2, 3, 4];


/* 
    Solution 2 -
        Elegant and a good option in general.
*/

numbers.length = 0;
console.log(numbers);

// End of Solution 2

numbers = [1, 2, 3, 4];


/* 
    Solution 3 -
        I do not see why use this way but It is good to know that it exists
*/

numbers.splice(0, numbers.length);
console.log(numbers);

// End of Solution 3