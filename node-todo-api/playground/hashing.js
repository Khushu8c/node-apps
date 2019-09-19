const bcrypt = require('bcryptjs');
var password = 'soniya123!';

// bcrypt.genSalt(10, (err, salt) => {
// bcrypt.hash(password, salt, (err, hash) => {
// console.log(hash);
// });
// });

var hashPwd = '$2a$10$YMB/AEjMzd69xqgiY79IIurzmyKBvzY5AKSkgqtLw0GfL/tE.Gyee';
bcrypt.compare('soniya12!', hashPwd, (err, res) => {
console.log(res);
});

// const {SHA256} = require('crypto-js');
// const jwt = require('jsonwebtoken');

// var messgage = 'Hello its demo';
// var encrpted = SHA256(messgage).toString();
// console.log(encrpted);

// var jwtEnc = jwt.sign(messgage, '123');
// console.log(jwtEnc);

// var decrypted = jwt.verify(jwtEnc, '123');
// console.log(decrypted);
