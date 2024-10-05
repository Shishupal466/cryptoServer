const crypto = require('crypto');  // crypto मॉड्यूल को आयात करना

// पासवर्ड हैश करने के लिए फ़ंक्शन
function hashPassword(password) {
  return crypto.createHash('sha256')  // SHA-256 हैश फ़ंक्शन का उपयोग करना
               .update(password)       // पासवर्ड को जोड़ना
               .digest('hex');         // हैश मान को हैक्साडेसिमल में प्राप्त करना
}

// पासवर्ड सेट करना
const password = 'myPassword123';
const hashedPassword = hashPassword(password);  // पासवर्ड को हैश करना

// पासवर्ड और हैश किए गए पासवर्ड को प्रदर्शित करना
console.log(`Password: ${password}`);
console.log(`Hashed Password: ${hashedPassword}`);
