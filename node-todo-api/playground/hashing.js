const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var messgage = 'Hello its demo';
var encrpted = SHA256(messgage).toString();
console.log(encrpted);

var jwtEnc = jwt.sign(messgage, '123');
console.log(jwtEnc);

var decrypted = jwt.verify(jwtEnc, '123');
console.log(decrypted);
