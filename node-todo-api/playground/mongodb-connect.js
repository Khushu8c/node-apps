const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }

 var db = client.db('TodoApp');
 console.log('Connected to MongoDB Server');

  db.collection('Todos').insertOne({
    text: 'Todo something',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unablet to insert data. Reasons: ', err)
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id, '@2@@@@@@@@@@@@@@');
  });

});
