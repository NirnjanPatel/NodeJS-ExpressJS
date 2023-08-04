// const chalk = require("chalk");
// console.log(chalk.red.underline(false));

// const { default: chalk } = require("chalk");
const validator = require("validator");

// const res = validator.isEmail("Nirnjn@gmail.com");
const res = validator.isEmail("Nirnjn.n.df@gmail.com");
// const res = validator.isEmail("Nirnjn.n.dfgmail.com"); // False
console.log(res);

// console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
