// Events Modules
const EventEmitter = require("events");

const event = new EventEmitter();
event.on("sayMyName", () => {
  console.log("Your Name is NIRNJAN");
});
event.on("sayMyName", () => {
  console.log("Your Sir Name is PATEL");
});
event.emit("sayMyName");
