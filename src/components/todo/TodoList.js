import { Component } from 'react';
import { Link } from 'react-router-dom';
import {GoCheck} from 'react-icons/go'
import {MdLaunch} from 'react-icons/md'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

class TodoList extends Component {
  setUpdate = item => {
    this.props.onChangeMode('update')
    this.props.selected(item)
  }
  setDetail = item => {
    this.props.onChangeMode('read')
    this.props.selected(item)
  }
  handleDelete = id => {
    this.props.onChangeMode('delete')
    this.props.removeTodo(id)
  }

  render() {
    console.log('todoList render')
    return (
      <section>
        <ul className="todo__list">
          {this.props.lists.map((item) => {
            return <li key={item.id} className="todo__item">
              <div className={item.isComplete ? 'todo__content complete' : 'todo__content' }>
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
                    <span className="todo__content-text">{item.title}</span>
                  </label>
                </div>
                <div className="todo__item-buttonarea">
                  <Link
                    className="todo__item-button"
                    to={`/todo/${item.id}`}
                    onClick={() => this.setDetail({
                      id: item.id,
                      title: item.title
                    })}
                  >
                    <MdLaunch
                      className="todo__item-button-icon launch"
                    />
                  </Link>
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