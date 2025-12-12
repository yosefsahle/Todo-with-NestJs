import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import type { Filter, Todo } from './todo.model';
import { TodoResponseDto } from './dto/todo-response.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoservice: TodoService) {}

  @Get()
  getAllTodos(@Query('filter') filter: Filter): TodoResponseDto {
    const todos = this.todoservice.findAll(filter);
    return new TodoResponseDto(todos);
  }

  @Get(':id')
  getTodoById(@Param('id') id: string): Todo {
    return this.todoservice.findById(id);
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto): Todo {
    return this.todoservice.createTodo(createTodoDto);
  }

  @Put(':id')
  updateTodo(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Todo {
    return this.todoservice.updateTodo(id, updateTodoDto);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string): void {
    return this.todoservice.deleteTodo(id);
  }
}
