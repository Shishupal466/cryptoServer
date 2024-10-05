// HMAC => Hased-based Message Authentication Code

const crypto = require('crypto');

const secret = 'my-secret-key';
const message = 'Important Message';

const hmac = crypto.createHmac('sha256',secret)
                   .update(message).digest('hex');
                   console.log(`HMAC: ${hmac}`);