import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../file/slice';

export default function AddTodos() {
    const [text, setText] = React.useState('');
    const dispatch = useDispatch();

    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(text));
        setText('');
    };

    return (
        <form onSubmit={formSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
                value={text}
                 className="p-3 sm:p-5 border-2 w-full flex-grow rounded border-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-300 hover:ring-1 hover:ring-blue-100 placeholder-gray-400"
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Add the Todos.."
            />
            <button className="bg-gradient-to-b from-blue-400 to-blue-600p-3 rounded font-bold w-full sm:w-auto h-20">
                Add Todo
            </button>
        </form>
    );
}