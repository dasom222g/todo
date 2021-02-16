import { Component } from 'react';

class Main extends Component {
  render() {
    // 화면 html부분
    return (
      <div className="index-page">
        <ul>
          <li><a href="/todo">todo-app(class형)</a></li>
          <li><a href="/todo-hook-second">todo-app(hook-second)</a></li>
          <li><a href="/base-hook">base hook</a></li>
          <li><a href="/todo-hook">todo-app(hook)</a></li>
        </ul>
      </div>
    )
  }
}

export default Main;
