export interface ITodo {
    Id: number;
    Task: string;
    Done: boolean;
}

export class Todo implements ITodo {
    Done: boolean;
    Id: number;
    Task: string;

    constructor(Id: number, Task: string, Done: boolean) {
        this.Id = Id;
        this.Task = Task;
        this.Done = Done;
    }
}

