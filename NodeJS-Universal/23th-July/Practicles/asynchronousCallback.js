// Asynchronous Callback Behaviour
console.log("Before execution");

function demo(a, b, cb) {
    var c = a + b;
    // cb(c);
    setTimeout(() => {
        cb(c)
    }, 3000);
}
var a = 34, b = 45;
demo(a, b, (result) => {
    console.log("Call back Function executed");
    console.log("result = " + result);

});

console.log("After execution");