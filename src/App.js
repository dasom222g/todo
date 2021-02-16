import './assets/style/pages.scss'
import { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Main from './pages/Main'
import Todo from './pages/Todo'
import TodoHook from './pages/TodoHook'
import Base from './pages/Base'
import BaseHook from './pages/BaseHook'
import TodoList from './components/todohook/TodoList'

class App extends Component {

  render() {
    // 화면 html부분
    return (
      <div className="content-wrapper">
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/todo" component={Todo} />
          <Route path="/todo-hook" component={TodoList} />
          <Route path="/todo-hook-second" component={TodoHook} />
          <Route path="/base" component={Base} />
          <Route path="/base-hook" component={BaseHook} />
          <Route path="/">Not found</Route>
        </Switch>
      </div>
    )
  }
}

export default App
