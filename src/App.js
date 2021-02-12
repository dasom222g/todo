import './App.css';
import { Component } from 'react';
import Todo from './pages/Todo';
// import Base from './pages/Base';
// import TodoList from './components/todohook/TodoList';

class App extends Component {

  render() {
    // 화면 html부분
    return (
      <div className="wrap">
        <Todo />
        {/* <TodoList /> */}
        {/* <Base /> */}
      </div>
    )
  }
}

export default App;
