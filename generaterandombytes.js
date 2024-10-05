const crypto = require('crypto');

const token = crypto.randomBytes(16); // 32-character hex string   16 bytes ka random value niklna and  .toString('hex') means  to convert hexadecimal.
console.log(`Random Token: ${token}`);
