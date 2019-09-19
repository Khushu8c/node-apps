const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 1,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} id not valid email address'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      require: true
    },
    token: {
      type: String,
      require: true
    }
  }

  ]
});

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();
  return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
var user = this;
var access = 'auth';
var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

user.tokens.push({access, token});

console.log('**********', user);

return user.save().then(()=> {
  console.log('**********========', token);
  return token;
});
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};
