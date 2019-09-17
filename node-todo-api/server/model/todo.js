
var mongoose = require('mongoose');
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

 module.exports = {Todo};
