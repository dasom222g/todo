import { Component } from 'react';

class TodoFormCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }
  //로직 부분
  handleSubmit = e => {
    e.preventDefault()
    this.props.onChangeMode('create')
    this.props.addTodo(this.state.input)
    this.setState({input: ''})
    console.log('this', this)
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <section>
        <div className="form">
          <form
            action="/creat"
            method="post"
            onSubmit={this.handleSubmit}
          >
            <div className="form-wrap">
              <input
                className="form__element"
                id="title"
                name="input"
                type="text"
                value={this.state.input}
                placeholder="Write a new todo"
                onChange={this.handleChange}
              />
              <button
                className="form__button"
                type="submit"
                onClick={this.handleSubmit}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default TodoFormCreate;