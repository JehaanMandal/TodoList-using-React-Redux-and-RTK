import React from 'react'
import AddTodos from './Components/AddTodos'
import RemoveUpdate from './Components/RemoveUpdate'
import todoImage from '../Public/Todo.jpg'; 

export default function App() {
 
  return (
  
    <div 
    style={{ backgroundImage: `url(${todoImage})` }}
    className="h-screen w-full bg-cover bg-center flex items-center justify-center text-white flex-col relative" 
>
    <div className="absolute inset-0 bg-black/50"></div>
    <h1
    className="text-white text-3xl font-bold text-center p-4 rounded-2xl backdrop-blur-md bg-gradient-to-br from-gray-900/80 to-black/80 shadow-lg bg-gradient-to-r from-emerald-700 to-emerald-900"
>
    Todo-List Using React-Redux & RTK
</h1>
    <div className="p-4 w-full max-w-2xl flex flex-col gap-4 relative z-10">
        <AddTodos />
        <RemoveUpdate />
    </div>
</div>

  )
}
