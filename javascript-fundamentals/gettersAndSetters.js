// getters => access properties
// setters => change (mutate) them

const person = {
    firstName: 'Jeremy',
    lastName: 'Fragance',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
person.fullName = 'A F';
console.log(person.fullName);
console.log(person);