import { Component } from 'react';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1><a href="0.html" onClick={(e) => {
          e.preventDefault()
          this.props.onChangePage()
        }}>{this.props.title}</a></h1>
        <strong>{this.props.sub}</strong>
      </header>
    )
  }
}

export default Subject;