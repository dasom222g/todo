import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
// import { IoMdPerson } from 'react-icons/io'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


function Todo(todos, completeTodo) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const lists = []
  todos.todos.map((todo, index) => {
    lists.push(
      <li key={index}>
        <div
          className={todo.isComplete ? 'todo-row complet' : 'todo-row'}
        >
          <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
        </div>
        <div className="icons">
          <RiCloseCircleLine />
          <TiEdit />
        </div>
      </li>
    )
  })
  console.log('todos!!!!', todos.todos)
  return (
    <ul className="todo-list">
      {lists}
    </ul>
  )
}

export default Todo
