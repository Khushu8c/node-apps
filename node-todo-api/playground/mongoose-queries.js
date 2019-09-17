const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/model/todo');

var id = '5d80fe858fab845324b90ef1';
Todo.find({
    _id: id
}).then((todos) => {
console.log('Todos: ', todos);
}).catch((e) => console.log(e));

Todo.findById(id).then((todos) => {
if (!todos) {
    return console.log(`Entry with ${id} not found`);
}
console.log('Element find by id is: ', todos);
}).catch((e) => console.log(e));