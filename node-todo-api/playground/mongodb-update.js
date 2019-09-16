const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }

 var db = client.db('TodoApp');
 console.log('Connected to MongoDB Server');

//deleteMany
  // db.collection('Todos').deleteMany({text: 'Todo something'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne

//  db.collection('Todos').deleteOne({text: 'Todo something'}).then((result) => {
  //  console.log(result);
  // });

// find and delete one
   db.collection('Todos').findOneAndUpdate({_id: new ObjectID("5d7f6e3f8e8fd7146027feae")}, {$set: {text: 'updated value'}}, {returnOriginal: false}).then((result) => {
  console.log(result);
    });
});
