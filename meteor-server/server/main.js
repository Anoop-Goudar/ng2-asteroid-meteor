import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {
  // console.log('these are the meteor server methods..');
  // console.log(Object.keys(Meteor.server.method_handlers).sort());
});


const Todo = new Meteor.Collection('todo');
var count = 0;

// We can publish some data (here all)
// we will be able to subscribe to the data later in the client app
// remember that this is not secured, all can subscribe to all data from the client side, just demo purposes
//
// Read more: http://guide.meteor.com/data-loading.html
Meteor.publish('todoList', function() {
  var todoDataList = Todo.find();
  return todoDataList;
});

// Meteor.publish('addTodo', function(message) {
//   console.log(message);
//   return Todo.insert(message);
// });
// Meteor.publish('user', function () {
//   return Meteor.users.find({_id: this.userId});
// });

// We can also use server side methods and call them from our client app
// here we just fetch all documents from the collection
// again, remember that this is not secured, all can call it from the client side, just demo purposes
//
// Read more: http://guide.meteor.com/methods.html

// Meteor.publish('addTask', function(newTask) {
//   console.log(newTask);
//   var afterAddition = Todo.insert(newTask);
//   console.log(afterAddition);
//   return afterAddition;
// });
Meteor.methods({
  getTodo(id) {
    return Todo.findOne(id);
  },
  getTodos() {
    return Todo.find().fetch();
  },
  addTodo(message) {
    console.log(message);
    count++;
    console.log('count is....');
    console.log(count);
    return Todo.insert(message);
  },
  removeTodo(id) {
    return Todo.remove({
      _id: id
    });
  }
// ,
// editTodo(id, finished) {
//   return Todo.update({
//     _id: id
//   }, {
//     $set: {
//       finished: finished
//     }
//   });
// }
});


// Deny all client-side updates on the Lists collection
// Read more about security stuff: http://guide.meteor.com/security.html
// Todo.deny({
//   insert() {
//     return true;
//   },
//   update() {
//     return true;
//   },
//   remove() {
//     return true;
//   },
// });

// Example user - just a simple example without validation etc.
// Read more at: https://guide.meteor.com/accounts.html
// Meteor.startup(() => {
//   const theOnlyUser = Meteor.users.find().fetch();
//   if (!theOnlyUser.length) {
//     Accounts.createUser({
//       username: 'admin',
//       password: 'pass'
//     });
//   }
// });
