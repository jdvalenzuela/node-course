var crypto = require('crypto-js');

var secretMessage = 'I hid the chips under the couch.';

var secretMessage2 = {
    name: 'Jose',
    secretName: 'Juss3pp3'
};


var secretKey = '123abc';
var secretKey2 = '123abcd';

var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);
var encryptedMessage2 = crypto.AES.encrypt(JSON.stringify(secretMessage2), secretKey);

console.log ('Encryped Message: ' + encryptedMessage);
console.log ('Encryped Message 2: ' + encryptedMessage2);

var bytesDecrypted = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = bytesDecrypted.toString(crypto.enc.Utf8);

var bytesDecrypted2 = crypto.AES.decrypt(encryptedMessage2, secretKey);
var decryptedMessage2 = bytesDecrypted2.toString(crypto.enc.Utf8);
var decryptedMessage2Object = JSON.parse(decryptedMessage2);

console.log ('Decryped Message: ' + decryptedMessage);
console.log ('Decryped Message2: ' + decryptedMessage2);
console.log (decryptedMessage2Object);
console.log (decryptedMessage2Object.secretName);


