import { Component } from 'react';
import {GoCheck} from 'react-icons/go'
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
                    <label>
                      <input
                        type="checkbox"
                        checked={item.isComplete ? true : false }
                        onChange ={(e) => {
                          this.props.completeTodo(item.id)
                        }}
                      />
                      <i className="todo__item-check-icon" />
                      <GoCheck className="todo__item-check-icon complete" />
                      <span className="todo__item-check-text">{item.title}</span>
                    </label>
                  </div>
                  <div className="todo__item-buttonarea">
                    <button
                      type="button"
                      className="todo__item-button"
                    >
                      <MdLaunch
                        className="todo__item-button-icon launch"
                      />
                    </button>
                    <button
                      type="button"
                      className="todo__item-button"
                      onClick={() => this.setUpdate({
                        id: item.id,
                        title: item.title
                      })}
                    >
                      <TiEdit
                        className="todo__item-button-icon update"
                      />
                    </button>
                    <button
                      type="button"
                      className="todo__item-button"
                      onClick={() => this.handleDelete(item.id)}
                    >
                      <RiCloseCircleLine
                        className="todo__item-button-icon delete"
                      />
                    </button>
                  </div>
                </div>
              </li>
          })}
        </ul>
      </section>
    )
  }
}

export default TodoList;