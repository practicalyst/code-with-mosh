const languages = [
    {id: 4, name: 'Python'},
    {id: 1, name: 'NodeJS'},
    {id: 3, name: 'Rust'},
    {id: 2, name: 'C/C++'},
    
];

console.log(languages);
console.log(languages.sort((a, b) => {
    // a < b => -1
    // a > b => 1
    // a ===  b => 0  

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA > nameB) return 1;
    if(nameB < nameB) return -1;
    return 0;
}));