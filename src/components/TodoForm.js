import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('props', props)
    // todoList에 정의되어 있는 addTodo라는 함수를 호출하여 실행
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })
    setInput('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? 
        (
          <div>
            <input
              type="text"
              placeholder="Add a todo"
              value={input}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button edit">Edit todo</button>
          </div>
        ) : 
        (
          <div>
            <input
              type="text"
              placeholder="Add a todo"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button">Add todo</button>
          </div>
        )
      }
    </form>
  )
}

export default TodoForm