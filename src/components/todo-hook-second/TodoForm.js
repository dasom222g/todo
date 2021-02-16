import React, { useState } from 'react'

function TodoForm(props) {
  // 로직 부분
  const [input, setInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    props.addTodo(input)
    setInput('')
  }

  const handleChange = e => {
    setInput(e.target.value)
  }

  // 화면 부분
  console.log('TodoForm render')
  return (
    <section>
      <div className="form">
        <form action="/create" method="post" onSubmit={handleSubmit}>
          <div className="form-wrap">
            <input
              className="form__element"
              id="title"
              name="title"
              type="text"
              value={input}
              placeholder="Write a new todo"
              onChange={handleChange}
            />
            <button
              className="form__button"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default TodoForm
