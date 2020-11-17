import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  makeTodoList : Todo[] = [
      {Task: 'Work with angular', Done: false},
      {Task: 'Work with react', Done: true},
      {Task: 'Work with java', Done: false},
      {Task: 'Work with c#', Done: true},
      {Task: 'Work with vue', Done: false},
      {Task: 'Work with .Net Core', Done: false},
      {Task: 'Work with python', Done: false},
      {Task: 'Work with django', Done: false},
      {Task: 'Work with spring boot', Done: false},
    ]

    list () : Todo[]  {
      return this.makeTodoList;
    }
}
