import { Component } from 'react';

class TodoFormUpdate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.updateData,
      input: this.props.updateData.title
    }
  }
  //로직 부분
  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.input, this.state.data)
    const _data = Object.assign(this.state.data)
    _data.title = this.state.input
    this.props.updateTodo(_data)
    this.props.onChangeMode('create')
    this.setState({input: ''})
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <section>
        <div className="form">
          <form
            action="/update"
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
                placeholder="edit"
                onChange={this.handleChange}
              />
              <button
                className="form__button"
                type="submit"
                onClick={this.handleSubmit}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default TodoFormUpdate;