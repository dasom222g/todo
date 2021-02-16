import React, { useState } from 'react'
import TodoForm from '../components/todo-hook-second/TodoForm';

function TodoHook() {
  // 로직 부분
  const [mode, setMode] = useState('create') //create, update, delete, read
  const [todoList, settodoList] = useState([]) //create, update, delete, read
  const addTodo = (text) => {
    console.log(text)
  }

  // 화면 html부분
  return (
    <div className="todo">
      <header>
        <h2 className="todo__title">What’s the Plan for Today?</h2>
      </header>
      {mode === 'create' ? (<TodoForm  addTodo={addTodo} />) : null}
    </div>
  )
}

export default TodoHook;
