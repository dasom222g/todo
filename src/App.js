import './App.css';
import Subject from './components/Subject'
import TOC from './components/TOC'
import { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {
  // constructor 내부소스는 제일 먼저 실행되어 초기화를 담당
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     subject: {title: '다소미는', sub: '이쁩니다!!!!'},
  //     contents: [
  //       {id:1, title: 'HTML', desc: 'HTML is for information'},
  //       {id:2, title: 'CSS', desc: 'CSS is for information'},
  //       {id:3, title: 'JavaScript', desc: 'JavaScript is for information'},
  //     ]
  //   }
  // }
  render() {
    return (
      // <div>
      //   <Subject title={this.state.subject.title} sub={this.state.subject.sub} />
      //   <TOC data={this.state.contents} />
      // </div>
      <div className="wrap">
        <TodoList />
      </div>
    )
  }
}

export default App;
