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
    count: any;

    constructor() {
      this.newTodo = '';
      this.todos = [];
      this.count = 0;
      asteroid.ddp.on('added', ({ collection, id, fields }) => {
        if (collection === 'todo') {
          console.log(fields);
          this.count++;
          console.log(this.count);
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
        // .then((result) => {
        //   console.log('check after calling addtodo');
        //   console.log(this.todos);
        //   this.todos.push(this.todoObj);
        // });
        event.preventDefault();
    }

    deleteTodo(index) {
      this.todos.splice(index, 1);
    }

    deleteSelectedTodos() {
      //need ES5 to reverse loop in order to splice by index
      for(var i=(this.todos.length -1); i > -1; i--) {
        if(this.todos[i].completed) {
          this.todos.splice(i, 1);
        }
      }
    }

  }
