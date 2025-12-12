import { Injectable, NotFoundException } from '@nestjs/common';
import { Filter, Todo } from './todo.model';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  findAll(filter: Filter): Todo[] {
    let items = this.todos;
    if (filter == 'active') {
      items = items.filter((todo) => !todo.completed);
    }
    if (filter == 'completed') {
      items = items.filter((todo) => todo.completed);
    }
    return items;
  }

  findById(id: string): Todo {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) throw new NotFoundException('Todo not found');
    return todo;
  }

  createTodo(createTodoDto: CreateTodoDto): Todo {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: createTodoDto.title,
      completed: false,
      createdAt: new Date(),
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  updateTodo(id: string, updateTodoDto: UpdateTodoDto): Todo {
    let found = false;
    let updatedTodo: Todo;
    this.todos = this.todos.map((t) => {
      if (t.id !== id) return t;
      found = true;
      updatedTodo = { ...t, ...updateTodoDto };
      return updatedTodo;
    });
    if (!found) throw new NotFoundException('Todo not found');
    return updatedTodo!;
  }

  deleteTodo(id: string): void {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}
