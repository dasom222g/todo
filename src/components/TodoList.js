import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodo = [todo, ...todos] // todo: 현재 입력값, todos: 기존 입력값
    setTodos(newTodo)
    // console.log('addTodo실행')
    // console.log('todo', todo, 'todos', todos)
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    console.log('update..')
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
        console.log(todo.isComplete)
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList
