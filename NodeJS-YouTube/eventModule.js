// Events Modules
// You can create-, fire- and listen for- your own events
// ex1 - click button and get some details (Fire Events)

// const http = require("http");
// Variable name starts with lower case (means camel case)

// Class name starts with Upper case (means camel case
const EventEmitter = require("events");

// const EventEmitter = new event.EventEmitter();
// calling to class and creating a intanse of class rather than we are using this

// Creating object to this class
const event = new EventEmitter();
// Fire this event using callback
event.on("sayMyName", () => {
  console.log("Your Name is NIRNJAN");
});
// Fire this event using callback for multiple times
event.on("sayMyName", () => {
  console.log("Your Sir Name is PATEL");
});
event.emit("sayMyName");
// We can call multiple callback function by using one event this is a new functionality in nodejs which is not present in JS andJQuery

// event.on("sayMyName", () => {
//   console.log("Your Name is Thapa");
// });
// if we use like this than we will not get output

// emit = Many objects in a Node emit events, for example, a net. Server emits an event each time a peer connects to it, an fs. readStream emits an event when the file is opened. All objects which emit events are the instances of events.
