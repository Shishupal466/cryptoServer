const crypto = require('crypto')

var text = "shishupal" ;

const algorithm = 'aes-256-cbc';  // aes => it is a symmetry encryption algorithm
const key = crypto.randomBytes(32);  // this is used to generate security random key.
const iv = crypto.randomBytes(16); 
console.log(key.toString())

// Function to encrypt text
function encrypt(text){
    const cipher =crypto.createCipheriv(algorithm,key,iv); //crypto मॉड्यूल का उपयोग करके एक cipher object (एन्क्रिप्शन ऑब्जेक्ट) बनाने के लिए इस्तेमाल होती है। इस ऑब्जेक्ट का उपयोग डेटा को एन्क्रिप्ट करने के लिए किया जाता है।
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
    console.log(encrypted);

}

// Function to decrypt text
function decrypt(encrypted) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  // Usage
const plaintext = 'Sensitive Data';
const encryptedText = encrypt(plaintext);
const decryptedText = decrypt(encryptedText);

console.log(`Plaintext: ${plaintext}`);
console.log(`Encrypted: ${encryptedText}`);
console.log(`Decrypted: ${decryptedText}`);

