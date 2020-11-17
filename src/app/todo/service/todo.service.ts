import {Injectable} from '@angular/core';
import {Todo} from '../model/todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor() {
    }

    makeTodoList: Todo[] = [
        {Id: 0, Task: 'Work with PHP', Done: true},
        {Id: 1, Task: 'Work with angular', Done: false},
        {Id: 2, Task: 'Work with react', Done: true},
        {Id: 3, Task: 'Work with java', Done: true},
        {Id: 4, Task: 'Work with c#', Done: true},
        {Id: 5, Task: 'Work with vue', Done: false},
        {Id: 6, Task: 'Work with .Net Core', Done: false},
        {Id: 7, Task: 'Work with python', Done: true},
        {Id: 8, Task: 'Work with django', Done: false},
        {Id: 9, Task: 'Work with spring boot', Done: false},
    ];

    list(): Todo[] {
        return this.makeTodoList;
    }

    add(addTodo: Todo) {
        addTodo.Id = this.makeTodoList.length + 1;
        this.makeTodoList.push(addTodo);
    }

    update(editTodo: Todo) {
        const index = this.makeTodoList.findIndex(c => c.Id === editTodo.Id);
        this.makeTodoList[index] = editTodo;
        this.delete(editTodo.Id);
        this.makeTodoList.push(editTodo);
    }

    delete(id: number) {
        const delTodo = this.getTodoId(id);
        this.makeTodoList.splice(delTodo, 1);
    }

    getTodoId(Id: number): number {
        return this.makeTodoList.findIndex(x => x.Id === Id);
    }

    done(todo: Todo) {
        let index = this.makeTodoList.findIndex(x => x.Id === todo.Id);
        todo.Done = true;
        this.makeTodoList[index] = todo;
    }

}
