const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

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


UserSchema.statics.findByToken = function (token) {
  var User = this;
  var decoded;

  try {
    decoded = jwt.verify(token, 'abc123');
  } catch (e) {
    console.log('Failed to verify access token, Reasons: ', e);
    return Promise.reject();
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access' : 'auth'
  });

};

UserSchema.pre('save', function(next) {
var user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      })
    });
  } else {
    next();
  }
});


UserSchema.statics.findByCredentials = function (email, password) {
var User = this;
return User.findOne({email}).then((user) => {
  if (!user) {
    return Promise.reject();
  }

 return new Promise((resolve, reject) => {
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      resolve(user);
    } else {
      reject();
    }
  });
  });
 });
};

UserSchema.methods.removeToken = function (token) {
var user = this;

return user.update({
  $pull: {
    tokens: {
      token: token
    }
  }
});
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};
