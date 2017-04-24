import * as React from 'react';

export interface TodoProps {
    content: string;
    done: boolean;
    createdAt: Date
}

export class TodoItem extends React.Component<TodoProps, undefined> {
    render() {
        return <h1>{this.props.content}</h1>;
    }
}
