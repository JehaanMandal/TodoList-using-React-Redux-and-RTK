import { nanoid, createSlice } from "@reduxjs/toolkit";



export const todoSlice = createSlice({
    name: "todo",
    initialState:{
      todos: [{ id: 1, text: "Jehaan"}]
  },
    reducers: {
        addTodo:(state,action)=>{
           const newTodo = {
            id: nanoid(),
            text: action.payload
           } 
           state.todos.push(newTodo)
        },
        removeTodo:(state,action)=>{
       state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
      updateTodo:(state,action)=>{
        const {id, text} = action.payload
        const todo = state.todos.find((todo)=> todo.id === id)
        if(todo){
            todo.text = text
        }
      }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export const todoReducer =  todoSlice.reducer