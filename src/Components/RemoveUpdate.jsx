import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo, removeTodo } from '../file/slice';

export default function RemoveUpdate() {
    const todos = useSelector((state) => state.todos);
    const [editedTextId, setEditedTextId] = React.useState(null);
    const [editedText, setEditedText] = React.useState('');
    const dispatch = useDispatch();

    const handleUpdate = (todo) => {
        setEditedTextId(todo.id);
        setEditedText(todo.text);
    };

    const handleSave = (id) => {
        dispatch(
            updateTodo({
                id: id,
                text: editedText,
            })
        );
        setEditedTextId(null);
        setEditedText('');
    };

   return (
   <ul className="list-none w-full max-w-2xl mx-auto">
    {todos.map((todo) => (
        <li
        className="p-3 rounded-xl relative overflow-hidden text-gray-100 flex flex-col sm:flex-row justify-between my-5"
        key={todo.id}
        style={{        
          boxShadow: '0 0 25px rgba(100, 200, 255, 0.8), 0 0 10px rgba(255, 100, 200, 0.6)', 
        }}
        >
 
        <div className="flex-grow mb-2 sm:mb-0 text-2xl font-bold ">
            {editedTextId === todo.id ? (
                <input
                    type="text"
                    className="border-2 border-black w-full h-12 pl-3"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                />
            ) : (
                todo.text
            )}
        </div>

        <div className="flex flex-wrap justify-end mt-2 sm:mt-0">
            {editedTextId === todo.id ? (
                <button
                    onClick={() => handleSave(todo.id)}
                         className="bg-gradient-to-r from-green-500 to-green-700 mx-1 mb-1 sm:mb-0 flex p-2 rounded text-lg transition-all hover:shadow-md hover:bg-gradient-to-r hover:from-green-600 hover:to-green-800"
                >
                    Save
                </button>
            ) : (
            <button
                onClick={() => handleUpdate(todo)}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 mx-1 mb-1 sm:mb-0 flex p-2 rounded text-lg"
            >
                Update
            </button>
            )}
            <button
                className="bg-gradient-to-r from-red-500 to-orange-500  mx-1 mb-1 sm:mb-0 flex p-2 text-lg rounded"
                onClick={() => dispatch(removeTodo(todo.id))}
            >
                Remove
            </button>
        </div>
    </li>
    ))}
</ul>
);
}