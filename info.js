const os = require("os");
console.log(os.userInfo());

// Info about the system Uptime

console.log(`The uptime of the system is ${os.uptime()}`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
