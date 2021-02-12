import '../App.css';
import { Component } from 'react';
import Subject from '../components/Subject'
import TOC from '../components/TOC'
import ReadContent from '../components/ReadContent'
import CreateContent from '../components/CreateContent'
import UpdateContent from '../components/UpdateContent'
import Control from '../components/Control';
// import TodoList from './components/TodoList';

class Base extends Component {
  // constructor 내부소스는 제일 먼저 실행되어 초기화를 담당
  constructor(props) {// 매개변수로 전달하는 props키워드는 그냥 샤용하기
    super(props)
    this.state = {
      mode: 'create',
      selectedItemId: 1,
      welcome: {title: 'Welcome', desc: 'Hello React!!!'},
      subject: {title: '다소미는', sub: '이쁩니다!!!!'},
      contents: [
        {id:1, title: 'HTML', desc: 'HTML is for information'},
        {id:2, title: 'CSS', desc: 'CSS is for information'},
        {id:3, title: 'JavaScript', desc: 'JavaScript is for information'},
      ],
    }
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  
  // 로직부분
  handleUpdate (id, _title, desc) {
    const copyContents = Array.from(this.state.contents)
    copyContents.forEach((item) => {
      if (item.id === id) {
        item.title = _title
        item.desc = desc
        return
      }
      this.setState({
        mode: 'read',
        selectedItemId: id,
        contents: copyContents
      })
    })
  }

  handleDelete() {
    const contents = Array.from(this.state.contents)
    const removeArr = contents.filter(item => item.id !== this.state.selectedItemId)
    removeArr.forEach((item, index) => {
      item.id = index + 1
    })
    this.setState({contents: removeArr})
  }

  getContent() {
    let _title = null, desc = null, _article = null
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title
      desc = this.state.welcome.desc
      _article = <ReadContent title={_title} desc={desc} />
    } else if (this.state.mode === 'read') {
      this.state.contents.forEach((item) => {
        if (item.id === this.state.selectedItemId) {
          _title = item.title
          desc = item.desc
          return
        }
      })
      _article = <ReadContent title={_title} desc={desc} />
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={(_title, desc) => {
        const contents = this.state.contents
        const newContent = {
          id: this.state.contents.length + 1,
          title: _title,
          desc: desc
        }
        let isEqual = false
        contents.forEach((item) => {
          if (item.title === newContent.title) isEqual = true
        })
        if (!isEqual) {
          this.setState({
            contents: [...this.state.contents, newContent]
          })
        }
      }} />
    } else if (this.state.mode === 'update') {
      const item = this.state.contents[this.state.selectedItemId - 1]
      _article = <UpdateContent data={item} onSubmit={this.handleUpdate} />
    }
    return _article
  }

  render() {
    // 화면 html부분
    return (
      <div className="wrap">
        {/* <TodoList /> */}
        <Subject title="헤헤" sub={this.state.subject.sub} onChangePage={() => {
          this.setState({
            mode: 'welcome'
          })
        }} />
        {/* Subject 컴포넌트 바로 사용할때 state값 변경 방법 */}
        {/* <header>
          <h1><a href="0.html" onClick={() => {
            this.setState({
              mode: 'welcome'
            })
          }}>{this.state.subject.title}</a></h1>
          <strong>{this.state.subject.sub}</strong>
        </header> */}
        <TOC data={this.state.contents} onChangePage={(id) => {
          this.setState({
            mode: 'read',
            selectedItemId: Number(id)
          })
        }} />
        <Control onChangeMode={(mode) => {
          if (mode === 'delete') {
            this.handleDelete()
          } else {
            this.setState({
              mode: mode
            })
          }
        }} />
        {this.getContent()}
      </div>
    )
  }
}

export default Base;
