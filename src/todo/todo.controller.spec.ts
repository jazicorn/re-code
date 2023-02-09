import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

describe('TodoController', () => {
    let todoController: TodoController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [TodoController],
            providers: [TodoService],
        }).compile();

        todoController = app.get<TodoController>(TodoController);
    });

    describe('root', () => {
        expect(todoController.getHello()).toBe('Hello World!');
    });
});
