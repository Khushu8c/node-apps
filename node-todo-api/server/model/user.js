var mongoose = require('mongoose');

var User = mongoose.model('USER', {
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    min: 1
  },
  age: {
    type: Number,
    required: true,
    default: 10
  }
});

module.exports = {User};
