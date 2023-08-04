// Node Package Manager
// Initialize NPM first
// npm init
// it stores dependencies or packages
// Install an npm package 
// npm i package_name 

// const chalk = require("chalk");
// const { default: chalk } = require("chalk");
const validator = require("validator");
console.log(" fdg ");

// import chalk from 'chalk';

// console.log(chalk.blue.underline.inverse("This is CHALK"));
// console.log(chalk.red.underline("This is CHALK"));

const res = validator.isEmail("Nirnjan@gmail.com");
console.log(res ? res : res);

// console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

