import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import TodoForm from '../components/todo-hook-second/TodoForm';
import TodoList from '../components/todo-hook-second/TodoList';
import TodoDetail from '../components/todo-hook-second/TodoDetail';

function TodoHook() {
  // 로직 부분
  const [mode, setMode] = useState('create') //create, update, delete, read
  const [todoList, setTodoList] = useState([])
  const [selectedItem, setSelectedItem] = useState({})

  const changeMode = mode => {
    setMode(mode)
  }

  const addTodo = value => {
    console.log('add todo')
    const newTodoList = {
      id: todoList.length + 1,
      title: value
    }
    if (!value || /^\s*$/.test(value)) {
      return
    } else {
      const filterText = todoList.filter(item => item.title === newTodoList.title)
      if (filterText.length) return
    }
    setTodoList([...todoList, newTodoList])
  }

  const completeTodo = id => {
    const _todoList = [...todoList]
    const updateTodoList =_todoList.map(item => {
      if (item.id === id) {
        item.isComplete = !item.isComplete
      }
      return item
    })
    setTodoList(updateTodoList)
  }

  const updateTodo = (id, newValue) => {
    if (!newValue || /^\s*$/.test(newValue)) return
    const _todoList = [...todoList]
    const updateTodoList =_todoList.map(item => {
      if (item.id === id) {
        item.title = newValue
      }
      return item
    })
    console.log(_todoList === todoList)
    // 질문 : 이부분 안써도 값 바뀌는데 왜 그러는지 모르겠음
    setTodoList(updateTodoList)
  }

  const removeTodo = id => {
    const _todoList = [...todoList]
    const removedArr = _todoList.filter(item => item.id !== id)
    removedArr.map((item, index) => {
      item.id = index + 1
      return item
    })
    setTodoList(removedArr)
  }

  const readTodo = item => {
    setSelectedItem(item)
    console.log(item)
  }

  // 화면 html부분
  return (
    <div className="todo">
      <header>
        <h2 className="todo__title">What’s the Plan for Today?</h2>
      </header>
      {mode === 'create' || mode === 'delete' ?
        (
          <TodoForm
            onSubmit={addTodo}
          />
        ) : null}
      {mode !== 'read' ?
        (
          <TodoList
            todoList={todoList}
            changeMode={changeMode}
            completeTodo={completeTodo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
            readTodo={readTodo}
          />
        ) :
        (
          <Switch>
              <Route
                path="/todo-hook-second/:itemid"
                exact
                render={() => <TodoDetail selectedItem={selectedItem} changeMode={changeMode} />}
              />
              <Route path="/todo-hook-second/">Not found</Route>
          </Switch>
        )
      }
    </div>
  )
}

export default TodoHook;
