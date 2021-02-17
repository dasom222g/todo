import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  // 로직 부분
  const [input, setInput] = useState(props.updateItem ? props.updateItem.title : '')

  const handleSubmit = e => {
    e.preventDefault()
    props.updateItem ? props.onSubmit(props.updateItem.id, input) : props.onSubmit(input)
    setInput('')
  }

  const handleChange = e => {
    setInput(e.target.value)
  }

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  // 화면 부분
  console.log('TodoForm render')
  return (
    <section>
      {!props.updateItem ?
        (
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
                  ref={inputRef}
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
        ) :
        (
          <div className="form">
            <form action="/update" method="post" onSubmit={handleSubmit}>
              <div className="form-wrap">
                <input
                  className="form__element"
                  id="title"
                  name="title"
                  type="text"
                  value={input}
                  placeholder="Write a new todo"
                  ref={inputRef}
                  onChange={handleChange}
                />
                <button
                  className="form__button update"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        )
      }
    </section>
  )
}

export default TodoForm
