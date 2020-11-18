import {Component, OnInit} from '@angular/core';
import {ITodo, Todo} from './model/todo';
import {TodoService} from './service/todo.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    Todo: Todo;
    modalTitle: string = 'Create Todo';
    DoneTodoList: Todo [];
    UnDoneTodoList: Todo [];

    constructor(private service: TodoService) {
    }

    ngOnInit(): void {
        this.getTodoList();
    }

    getTodoList() {
        this.Todo = new Todo(-1, '', false);
        this.UnDoneTodoList = [];
        this.DoneTodoList = [];
        this.service.list().map(todo => {
            if (todo.Done) {
                this.DoneTodoList.push(todo);
            } else {
                this.UnDoneTodoList.push(todo);

            }
        });
    }

    openModal() {
        this.modalTitle = 'Add Todo';
    }

    SaveOrUpdateDept(Todo: ITodo) {
        if (this.Todo.Id === -1) {
            this.service.add(Todo);
            UIkit.notification({message: 'Save Successfully', pos: 'top-right', status: 'success'});
        } else {
            this.service.update(Todo);
            UIkit.notification({message: 'Update Successfully', pos: 'top-right', status: 'success'});
        }
        this.getTodoList();
    }

    updateTodo(Todo: Todo) {
        this.modalTitle = 'Update Todo';
        this.Todo = Todo;
    }

    deleteTodo(id: number) {
        this.service.delete(id);
        this.getTodoList();
        this.Todo = {Id: 0, Task: '', Done: false};
        UIkit.notification({message: 'Save Successfully', pos: 'top-right', status: 'success'});
    }

    doneTask(Todo: Todo) {
        this.service.done(Todo);
        this.getTodoList();
    }
}
