// Creating and exporting Own Module
// Every Indivisual file is an module 

const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};
const mult = (a, b) => {
    return a * b;
};

const name = "Nirnjan";
console.log(name);


// Creating Global to this module by indivisual functions

// module.exports.add = add; // Function name  
// module.exports.sub = sub; // at sub we can use our ownm name
// module.exports.subtaction = sub;
// module.exports = name;

// Creating Global to this module by all functions at a time

module.exports = { add, sub, mult, name };
