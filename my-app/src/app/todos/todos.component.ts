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
        event.preventDefault();
    }

    deleteTodo(index) {
      var obj = {};
      obj = this.todos.splice(index, 1)[0];
      console.log('deleting this obj..');
      console.log(obj);
      asteroid.call('removeTodo', obj);
    }

  }
