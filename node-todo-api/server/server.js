
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

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


app.post('/users', (req, res) => {
 
  console.log(req.body);
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);
  console.log(user);

  user.save().then((user) => {
 return user.generateAuthToken();
  }).then((token)=> {
    console.log('token:', token);
    return res.header('x-auth', token).send(user.toJSON());
  }).catch((error) => {
    console.log(error);
    return res.status(400).send(error);
  })

});

app.listen(3000, () => {
  console.log('Server has started on port 3000.');
});
