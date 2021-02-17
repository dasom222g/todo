import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {GoCheck} from 'react-icons/go'
import {MdLaunch} from 'react-icons/md'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import TodoForm from '../todo-hook-second/TodoForm'

function TodoList({todoList, changeMode, completeTodo, updateTodo, removeTodo, readTodo}) {
  // 로직 부분
  const [updateItem, setUpdateItem] = useState({
    id: null,
    title: ''
  })

  const handleUpdate = (id, value) => {
    changeMode('update')
    setUpdateItem({
      id: id,
      title: value
    })
  }
  const handleRead = (id, value) => {
    changeMode('read')
    setUpdateItem({
      id: id,
      title: value
    })
    readTodo({
      id: id,
      title: value
    })
  }

  const handleDelete = id => {
    changeMode('delete')
    removeTodo(id)
  }

  const updateSubmit = (id, newValue) => {
    changeMode('create')
    updateTodo(id, newValue)
    setUpdateItem({
      id: null,
      title: ''
    })
  }


  // 화면 부분
  console.log('TodoList render')

  if (updateItem.id) return <TodoForm updateItem={updateItem} onSubmit={updateSubmit} />

  return (
    <section>
      <ul className="todo__list">
        {todoList.map((item) => {
          return <li key={item.id} className="todo__item">
            <div className={item.isComplete ? 'todo__content complete' : 'todo__content'}>
              <div className="todo__item-check">
                <label>
                  <input
                    type="checkbox"
                    checked={item.isComplete ? true : false }
                    onChange={() => {completeTodo(item.id)}}
                  />
                  <i className="todo__item-check-icon" />
                  <GoCheck className="todo__item-check-icon complete" />
                  <span className="todo__content-text">{item.title}</span>
                </label>
              </div>
              <div className="todo__item-buttonarea">
                <Link
                  className="todo__item-button"
                  to={`/todo-hook-second/${item.id}`}
                    onClick={() => handleRead(item.id, item.title)}
                >
                  <MdLaunch
                    className="todo__item-button-icon launch"
                  />
                </Link>
                <button
                  type="button"
                  className="todo__item-button"
                  onClick={() => handleUpdate(item.id, item.title)}
                >
                  <TiEdit
                    className="todo__item-button-icon update"
                  />
                </button>
                <button
                  type="button"
                  className="todo__item-button"
                  onClick={()=> handleDelete(item.id)}
                >
                  <RiCloseCircleLine
                    className="todo__item-button-icon delete"
                  />
                </button>
              </div>
            </div>
          </li>
        })}
      </ul>
    </section>
  )
}

export default TodoList
