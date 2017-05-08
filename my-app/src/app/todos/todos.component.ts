import { Component } from '@angular/core';
import asteroid from '../../common/asteroid';

  @Component({
    selector: 'todos',
    templateUrl: 'todos.component.html',
    styleUrls: ['todos.component.css']
  })

  export class TodosComponent {

    newTodo: string;
    todos: any;
    todoObj: any;
    sub: any;

    constructor() {
      this.newTodo = '';
      this.todos = [];
      asteroid.call('getTodos').then((data) => {
        this.todos = data;
      });
      asteroid.ddp.on('added', ({ collection, id, fields }) => {
        if (collection === 'todo') {
            this.todos.push(fields);
        }
      });
    }


    addTodo(event) {
        this.todoObj = {
          newTodo: this.newTodo,
          completed: false
        }
        this.newTodo = '';
        asteroid.call('addTodo', this.todoObj);
        event.preventDefault();
    }

    deleteTodo(index) {
      var obj = {};
      obj = this.todos.splice(index, 1)[0];
      asteroid.call('removeTodo', obj);
    }

  }
