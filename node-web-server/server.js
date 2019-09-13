const express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.send('Hello server!');
});

app.get('/html', (request, response) => {
  response.send('<h1> Hello server! </h1>');
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
