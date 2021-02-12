import React, {useState} from 'react'
import TodoForm from './TodoForm'
// import { IoMdPerson } from 'react-icons/io'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    console.log('edit value', value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) { //edit 버튼 클릭시 실행
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => {
        return <li key={index}>
          <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            >
            <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
          </div>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />
            <TiEdit
              onClick={() => setEdit({
                id: todo.id,
                value: todo.text
              })}
              className="edit-icon"
            />
          </div>
        </li>
      })}
    </ul>
  )
}

export default Todo
