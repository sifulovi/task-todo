import {Component, OnInit} from '@angular/core';
import {Todo} from './model/todo';
import {TodoService} from './service/todo.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    Todo: Todo;
    TodoList: Todo[];

    constructor(private service: TodoService) {
    }

    ngOnInit(): void {
        this.getTodoList();
    }

    getTodoList() {
        this.TodoList = this.service.list();
    }

}
