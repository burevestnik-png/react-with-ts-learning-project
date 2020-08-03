import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { ITodo } from "./entities/ITodo";

const App: React.FC = () => {
    const [ todos, setTodos ] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Array<ITodo>
        setTodos(saved)
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = ( title: string ) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false
        }
        setTodos(prevState => [ newTodo, ...prevState ])
    }

    const toggleHandler = ( id: number ) => {
        setTodos(prevState => prevState.map(value => {
            if (value.id === id) {
                return {
                    ...value,
                    completed: !value.completed
                }
            }
            return value;
        }))
    }

    const removeHandler = ( id: number ) => {
        const shouldRemove = window.confirm('Do you really want to delete it?')
        if (shouldRemove) {
            setTodos(prevState => prevState.filter(value => value.id !== id));
        }
    }

    return (
        <>
            <Navbar/>
            <div className="container">
                <TodoForm onAdd={ addHandler }/>
                <TodoList todos={ todos }
                          onToggle={ toggleHandler }
                          onRemove={ removeHandler }
                />
            </div>
        </>
    );
}

export default App;
