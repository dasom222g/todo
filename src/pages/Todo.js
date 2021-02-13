import '../assets/style/pages.scss';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoForm from '../components/todo/TodoForm';
import TodoFormUpdate from '../components/todo/TodoFormUpdate';
import TodoList from '../components/todo/TodoList';
import TodoDetail from '../components/todo/TodoDetail';

class Todo extends Component {
  // constructor 내부소스는 제일 먼저 실행되어 초기화를 담당
  constructor(props) {// 매개변수로 전달하는 props키워드는 그냥 샤용하기
    super(props)
    this.state = {
      mode: 'create', //create, update, delete
      todoList: [],
      selectedItem: null, 
      selectedItemId : 0,
    }
  }
  
  // 로직부분

  changeMode = (_mode) => {
    this.setState({mode: _mode})
  }

  getContent () {
    let _article = null
    if (this.state.mode === 'create' || this.state.mode === 'delete') {
      _article = <TodoForm
          addTodo={this.addTodo}
          onChangeMode={this.changeMode}
        />
    } else if (this.state.mode === 'update') {
      _article = <TodoFormUpdate
        updateData={this.state.selectedItem}
        onChangeMode={this.changeMode}
        updateTodo={this.updateTodo}
      />
    }
    return _article
  }

  addTodo = text => {
    const contents = this.state.todoList
    const newContent = {
      id: contents.length + 1,
      title: text
    }
    if (!text || /^\s*$/.test(text)) {
      return
    } else {
      const filtertitle = contents.filter(item => item.title === newContent.title)
      if (!!filtertitle.length) return
    }
    this.setState({
      todoList: [...contents, newContent]
    })
  }

  selectedTodo = selectedItem => {
    this.setState({selectedItem: selectedItem})
    console.log('selectedItem', selectedItem)
  }

  updateTodo = (updateItem) => {
    const contents = Array.from(this.state.todoList)
    contents.forEach((item) => {
      if (item.id === updateItem.id) {
        item.title = updateItem.title
        return
      }
    })
    this.setState({todoList: contents})
  }

  completeTodo = id => {
    const contents = Array.from(this.state.todoList)
    let updateTodo = contents.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete
      }
      return item
    })
    this.setState({todoList: updateTodo})
  }

  removeTodo = id => {
    console.log('remove id', id)
    const contents = Array.from(this.state.todoList)
    const removeArr = contents.filter(item => item.id !== id)
    removeArr.forEach((item, index) => {
      item.id = index + 1
    })
    this.setState({todoList: removeArr})
  }

  render() {
    // 화면 html부분
    return (
      <div className="todo">
        <header>
          <h2 className="todo__title">What’s the Plan for Today?</h2>
        </header>
        {this.getContent()}
        {this.state.mode !== 'update' && this.state.mode !== 'read'  && 
            <TodoList
            lists={this.state.todoList}
            onChangeMode={this.changeMode}
            selected={this.selectedTodo}
            completeTodo={this.completeTodo}
            removeTodo={this.removeTodo}
          />
        }
        {this.state.mode === 'read' && 
          <Switch>
            <Route
              path="/todo/:itemid"
              exact
              render={() => <TodoDetail updateData={this.state.selectedItem} onChangeMode={this.changeMode} />}
            />
            <Route path="/todo">Not found</Route>
          </Switch>
        }
      </div>
    )
  }
}

export default Todo;
