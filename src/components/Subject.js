import { Component } from 'react';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <strong>{this.props.sub}</strong>
      </header>
    )
  }
}

export default Subject;