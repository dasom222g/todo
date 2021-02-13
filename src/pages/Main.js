import { Component } from 'react';

class Main extends Component {
  render() {
    // 화면 html부분
    return (
      <div className="index-page">
        <ul>
          <li><a href="/todo">todo-app(class형)</a></li>
          <li><a href="/todo-hooks">todo-app(hooks)</a></li>
        </ul>
      </div>
    )
  }
}

export default Main;
