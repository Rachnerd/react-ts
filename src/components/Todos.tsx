import * as React from 'react';
import { Todo, TodoProps } from './Todo';

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
        return <ul>
            {
                todos
                    .map((todo: TodoProps, i: number) =>
                        <li key={i} >
                            <Todo content={todo.content} createdAt={todo.createdAt} done={todo.done}/>
                        </li>
                    )
            }
        </ul>;
    }
}
