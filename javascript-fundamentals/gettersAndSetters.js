// getters => access properties
// setters => change (mutate) them

const person = {
    firstName: 'Jeremy',
    lastName: 'Fragance',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        
        if(typeof value !== 'string')
            throw new Error('Value is not a string');

        const parts = value.split(' ');

        if(parts.length !== 2)
            throw new Error('Enter a first and last name');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

// person.fullName = 'A F';
// console.log(person.fullName);
// console.log(person);


try {
    person.fullName = '';
}catch(e){
    console.log(e);
}