const os = require('os')

console.log(os.arch());

console.log(os.platform()); // returns the platform that node.js compiled for

console.log(os.cpus());

console.log(os.freemem());

console.log(os.homedir());

console.log(os.hostname());

console.log(os.networkInterfaces());

console.log(os.type());

console.log(os.uptime() / 3600);
// return number of seconds the computer has been running since it was last rebooted'=

console.log(os.userInfo());