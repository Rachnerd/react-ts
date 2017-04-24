import * as React from 'react';
import { TodoItem, TodoProps } from './Todo';
import { MyTestClass } from './utils';

export interface TodosProps {
    title: string;
}

const todos: Array<TodoProps> = [
    {
        done: false,
        content: 'first',
        createdAt: new Date()
    },
    {
        done: false,
        content: 'second',
        createdAt: new Date()
    },
    {
        done: false,
        content: 'third',
        createdAt: new Date()
    }
];

export class Todos extends React.Component<TodosProps, undefined> {
    render() {
        const testClass = new MyTestClass();
        testClass.myTestFn('bar');
        return <ul>
            {
                todos
                    .map((todo: TodoProps, i: number) =>
                        <li key={i} >
                            <TodoItem content={todo.content} createdAt={todo.createdAt} done={todo.done}/>
                        </li>
                    )
            }
        </ul>;
    }
}
