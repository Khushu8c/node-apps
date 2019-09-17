var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo = mongoose.model('todo', {
//   text: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   },
//   completedAt: {
//     type: Boolean
//   }
// });
//
// var todoOne = new Todo({
//   text: 'Soniya'
// });
//
// todoOne.save().then((doc) => {
//   console.log('saved log',doc);
// }, (err) => {
//   console.log('Unable to add data: ', err);
// });

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
})

var user = new User({
  name: '111      ssss  '
});

user.save().then((result) => {
console.log('User data saved: ', result);
}, (e) => {
  console.log('Error ocuurs: ', e);
})
