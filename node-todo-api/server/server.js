
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./model/todo');
var {User} = require('./model/user');

var app = express();


app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (error) => {
    res.status(400).send(error);
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
      res.send(todos);
  }, (error) => {
  res.status(400).send(error);
})
});


app.listen(3000, () => {
  console.log('Server has started on port 3000.');
});
