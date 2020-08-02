import React, { FunctionComponent } from 'react';
import { ITodo } from "../entities/ITodo";

type TodoListProps = {
    todos: ITodo[],
    onToggle( id: number ): void,
    onRemove( id: number ): void
}

const TodoList: FunctionComponent<TodoListProps> = ( { todos, onRemove, onToggle } ) => {

    if (todos.length === 0) {
        return <span className="center">No todos</span>
    }
    
    return (
        <ul>
            { todos.map(todo => {
                const classes = [ 'todo' ]
                if (todo.completed) {
                    classes.push('completed')
                }
                return (
                    <li className={ classes.join(" ") }
                        key={ todo.id }
                    >
                        <label>
                            <input type="checkbox"
                                   checked={ todo.completed }
                                   onChange={ onToggle.bind(null, todo.id) }
                            />
                            <span>{ todo.title }</span>
                            <i className="material-icons red-text"
                               onClick={ () => onRemove(todo.id) }
                            >delete</i>
                        </label>
                    </li>
                );
            }) }
        </ul>
    );
};

export default TodoList;
