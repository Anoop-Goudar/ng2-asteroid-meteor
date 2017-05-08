import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {});


const Todo = new Meteor.Collection('todo');
var count = 0;

Meteor.publish('todoList', function() {
  var todoDataList = Todo.find();
  return todoDataList;
});

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
  removeTodo(obj) {
    console.log(obj);
    return Todo.remove(obj);
  }
})
