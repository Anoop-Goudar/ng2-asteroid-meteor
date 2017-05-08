import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {});


const Todo = new Meteor.Collection('todo');

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
  addTodo(obj) {
    return Todo.insert(obj);
  },
  removeTodo(obj) {
    return Todo.remove(obj);
  }
})
