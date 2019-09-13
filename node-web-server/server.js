const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.render('welcome.hbs', {
    pageTitle: "Welcome Page",
    currentYear: new Date().getFullYear(),
    welcomeMsg: 'Hello Welcome to demo site'
  });
});

app.get('/about', (request, response) => {
  response.render('about.hbs', {
    pageTitle: 'About page!',
    currentYear: new Date().getFullYear()

  });
});

app.get('/json', (request, response) => {
  response.send({
    name: 'soniya',
    address: 'ahmedabad'
  });
});

app.listen(3000, () => {
  console.log('Server gets started on 3000 port');
});
