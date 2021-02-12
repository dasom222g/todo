import { Component } from 'react';
import {MdLaunch} from 'react-icons/md'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
  
    }
  }
  setUpdate = item => {
    this.props.onChangeMode('update')
    this.props.selected(item)
  }
  handleDelete = (id) => {
    this.props.onChangeMode('delete')
    this.props.removeTodo(id)
  }

  render() {
    console.log('todolist render')
    return (
      <section>
        <ul className="todo__list">
          {this.props.lists.map((item) => {
            return <li key={item.id} className="todo__item">
                <div className={item.isComplete ? 'todo__item-content complete' : 'todo__item-content' }>
                  <div className="todo__item-check">
                    <div>{this.props.lists.id}</div>
                    <label>
                      <input
                        type="checkbox"
                        onChange ={(e) => {
                          this.props.completeTodo(item.id)
                        }}
                      />
                      <span>{item.title}</span>
                    </label>
                  </div>
                  <button type="button">
                    <MdLaunch
                      className="update"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => this.setUpdate({
                      id: item.id,
                      title: item.title
                    })}
                  >
                    <TiEdit
                      className="update"
                    />
                  </button>
                  <button
                    type="button" className="todo__button-icon"
                    onClick={() => this.handleDelete(item.id)}
                  >
                    <RiCloseCircleLine
                      className="delete"
                    />
                  </button>
                </div>
              </li>
          })}
        </ul>
      </section>
    )
  }
}

export default TodoList;