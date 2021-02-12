import './App.css';
import { Component } from 'react';
// import Base from './pages/Base';
import TodoList from './components/TodoList';

class App extends Component {

  render() {
    // 화면 html부분
    return (
      <div className="wrap">
        <TodoList />
        {/* <Base /> */}
      </div>
    )
  }
}

export default App;
