const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('toUpperCase', (text) => {
  return text.toUpperCase();
})

app.use((req, res, next) => {
  var time = `${new Date()} : ${req.method} ${req.url}`;
  console.log(time);
  fs.appendFile('server.log', time + '\n', (error) => {
    console.log('Unable to append file')
  });
next();
});

app.use((req, res, next) => {
res.render('maintainance.hbs');
})

app.use(express.static(__dirname + '/public'));
app.get('/', (request, response) => {
  response.render('welcome.hbs', {
    pageTitle: "Welcome Page",
    welcomeMsg: 'Hello Welcome to demo site'
  });
});

app.get('/about', (request, response) => {
  response.render('about.hbs', {
    pageTitle: 'About page!',
    welcomeMsg: 'Hello Welcome to about page'
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
