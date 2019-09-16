const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }

 var db = client.db('TodoApp');
 console.log('Connected to MongoDB Server');

  db.collection('Todos').find().toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch data: ', error);
  })
});
