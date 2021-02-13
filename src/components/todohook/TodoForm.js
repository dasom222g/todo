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
    <section>
      <div className="form">
        <form onSubmit={handleSubmit}>
          {props.edit ? 
            (
              <div className="form-wrap">
                <input
                  type="text"
                  placeholder="Add a todo"
                  value={input}
                  name="text"
                  className="form__element"
                  onChange={handleChange}
                  ref={inputRef}
                />
                <button className="form__button update">Update</button>
              </div>
            ) : 
            (
              <div className="form-wrap">
                <input
                  type="text"
                  placeholder="Add a todo"
                  value={input}
                  name="text"
                  className="form__element"
                  onChange={handleChange}
                  ref={inputRef}
                />
                <button className="form__button">Add</button>
              </div>
            )
          }
        </form>
      </div>
    </section>
  )
}

export default TodoForm