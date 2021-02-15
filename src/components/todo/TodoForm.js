import { Component } from 'react';

class TodoFormCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      data: null,
    }
  }
  // componentDidMount() { // 처음 렌더링 될때 render함수 후에 실행 (update후에는 실행되지 않고 맨처음 redering될 경우 에만 실행)
  //   console.log('componentDidMount')
  // }
  componentWillReceiveProps(nextProps) { //현재 파일의 props의 값이 변경될때 실행, 인자값으로 받을수 있음
    console.log('componentWillReceiveProps', nextProps.mode)
    if (nextProps.mode === 'update') {
      if (nextProps.updateData) {
        this.setState({input: nextProps.updateData.title})
        this.setState({data: nextProps.updateData})
      }
    } else {
      this.setState({input: ''})
      this.setState({data: null})
    }
  }
  //로직 부분
  handleSubmit = e => {
    e.preventDefault()
    const actionArr = e.target.closest('form').action.split('/')
    const actionLast = actionArr[actionArr.length - 1]
    this.props.onChangeMode('create')
    switch (actionLast) {
      case 'create':
        this.props.addTodo(this.state.input)
        break;
      case 'update':
        const _data = Object.assign(this.state.data)
        _data.title = this.state.input
        this.props.updateTodo(_data)
        break;
        default:
          return
        }

    this.setState({input: ''})
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    console.log('todoFormCreate render')
    return (
      <section>
        <div className="form">
          {!this.state.data ?
            (
              <form
              action="/create"
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
            ) :
            (
              <form
                action="/update"
                method="post"
                onSubmit={this.handleSubmit}
              >
                <input type="hidden" value={this.state.data ? this.state.data.id : 0} />
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
                    className="form__button update"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Update
                  </button>
                </div>
              </form>
            )
          }
        </div>
      </section>
    )
  }
}

export default TodoFormCreate;