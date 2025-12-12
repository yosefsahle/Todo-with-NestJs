import { Todo } from '../todo.model';

export class TodoResponseDto {
  todos: Todo[];
  total: number;

  constructor(todos: Todo[]) {
    this.todos = todos;
    this.total = todos.length;
  }
}
