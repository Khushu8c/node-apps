var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Boolean
  }
});

var todoOne = new Todo({
  text: 'Soniya'
});

todoOne.save().then((doc) => {
  console.log('saved log',doc);
}, (err) => {
  console.log('Unable to add data: ', err);
});
