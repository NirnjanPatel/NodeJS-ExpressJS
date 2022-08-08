// Operating System Modules
// Get info about any os
// Architecture Details

const os = require("os");

console.log("Architecture = " + os.arch());
const freeMemory = os.freemem();

console.log("Memory in bites = " + freeMemory);

console.log("Memory in GB = " + `${freeMemory / 1024 / 1024}` + " GB");

const totalMemory = os.totalmem();
console.log("Memory in GB = " + `${totalMemory / 1024 / 1024 / 1024}` + " GB");

console.log("hostname = " + os.hostname());
console.log("platform = " + os.platform());
console.log("tmpdir = " + os.tmpdir());
console.log("type = " + os.type());
console.log("uptime = " + os.uptime());
console.log("cpus = " + os.cpus());
console.log("os.endianness() = " + os.endianness());
