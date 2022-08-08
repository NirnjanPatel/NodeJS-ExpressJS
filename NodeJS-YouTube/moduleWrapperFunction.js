// // moduleWrapperFunction is same as javascript IIFI
// // It provides some global-looking variables that are specific to the module, such as: The module and exports object that can be used to export values from the module. The variables like __filename and __dirname, that tells us the module's absolute filename and its directory path

// (function (exports, require, module, __filename, __dirname) {
//   const fs = require("fs");
//   const name = "nirnjan";
//   console.log(name);

//   module.exports = { kjdfkldjd };
// });

// // iifi = immedietly invoked function expression
// // anonymuos function - self executed
// (function () {
//   var a = "nirnajn"; // Private variable
//   console.log(a);
//   module.exports = { a };
// })();
// // console.log(a);// Not accesable

// // this is not needed to write

console.log(__dirname);
console.log(__filename);
