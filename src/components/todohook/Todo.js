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
    <section>
      <ul className="todo__list">
        {todos.map((todo, index) => {
          return <li key={index} className="todo__item">
            <div className={todo.isComplete ? 'todo__content complete' : 'todo__content'}>
              <div
                className="todo__content-text"
                onClick={() => completeTodo(todo.id)
              }
                >{todo.text}
              </div>
              <div className="todo__item-buttonarea additional-item">
                <div className="todo__item-button">
                  <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className="todo__item-button-icon delete"
                  />
                </div>
                <div className="todo__item-button">
                  <TiEdit
                    onClick={() => setEdit({
                      id: todo.id,
                      value: todo.text
                    })}
                    className="todo__item-button-icon update"
                  />
                </div>
              </div>
            </div>
          </li>
        })}
      </ul>
    </section>
  )
}

export default Todo
